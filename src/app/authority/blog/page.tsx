"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faUsers, faChartLine, faClipboardList, faCog, 
  faPlus, faEdit, faTrash, faUpload, faMagic, faSearch, faSignOutAlt,
  faNewspaper, faFilter
} from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import("./TiptapEditor"), { 
  ssr: false,
  loading: () => <p className="text-sm font-semibold text-gray-400">Loading Editor...</p>,
});

// Define FAQ interface
interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

// Define Review interface
interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string;
}

// Define Blog interface matching the user's requested structure
interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
}

const BlogsDashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [editingBlogSlug, setEditingBlogSlug] = useState<string | null>(null);

  const [newBlog, setNewBlog] = useState<Blog>({
    title: "",
    subtitle: "",
    description: "",
    date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
    image: "",
    created: Date.now(),
    metaTitle: "",
    metaDescription: "",
    slug: "",
    faqs: [],
    reviews: [],
    author: "Anuj Anand Malik", // Default author
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [rssDebugInfo, setRssDebugInfo] = useState<string>("");
  const [isLoadingRss, setIsLoadingRss] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  // AI Generation state
  const [aiContext, setAiContext] = useState("");
  const [aiPrimaryKeyword, setAiPrimaryKeyword] = useState("");
  const [aiSecondaryKeywords, setAiSecondaryKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Image Generation state
  const [imagePrompt, setImagePrompt] = useState("");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isUploadingGenerated, setIsUploadingGenerated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages based on filtered blogs
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  // Get the current blogs to display based on the current page
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset pagination when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Logout handler using NextAuth SignOut
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/nullify" });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Fetch blogs data from MongoDB APIs
  const fetchBlogsData = async () => {
    setIsLoadingBlogs(true);
    try {
      const res = await fetch("/api/blog");
      const json = await res.json();
      if (json.success) {
        const data = json.data.map((docData: any) => ({
          id: docData._id,
          title: docData.title || "",
          subtitle: docData.subtitleKeywords || "",
          description: docData.content || "",
          date: docData.publishedAt ? docData.publishedAt.split("T")[0] : "",
          image: docData.coverImage?.gridFsId ? `/api/blog/image/${docData.coverImage.gridFsId}` : "",
          created: docData.createdAt ? new Date(docData.createdAt).getTime() : Date.now(),
          metaTitle: docData.metaTitle || "",
          metaDescription: docData.metaDescription || "",
          slug: docData.slug || "",
          faqs: docData.faqs || [],
          reviews: (docData.reviewSnippets || []).map((r: any) => ({
            name: r.reviewerName || "Anonymous",
            rating: r.rating || 5,
            review: r.reviewText || "",
          })),
          author: docData.author || "Anuj Anand Malik",
        }));
        
        // Sort blogs by created timestamp in descending order (newest first)
        const sortedData = data.sort((a: any, b: any) => (b.created || 0) - (a.created || 0));
        setBlogs(sortedData);
      }
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  // Autosave functionality
  useEffect(() => {
    if (showBlogForm && newBlog) {
      // Don't save if it's empty initial state
      if (newBlog.title === "" && newBlog.description === "") return;

      const timer = setTimeout(() => {
        const key = formMode === "edit" && newBlog.id ? `autosave_blog_${newBlog.id}` : "autosave_blog_new";
        localStorage.setItem(key, JSON.stringify(newBlog));
      }, 1000); // Save after 1 second of inactivity

      return () => clearTimeout(timer);
    }
  }, [newBlog, showBlogForm, formMode]);

  // Helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Trim spaces from start and end
  };

  // Handle blog form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => {
      // If title field is changed, auto-generate slug (only if slug is empty or user hasn't modified it)
      if (name === "title" && (!prevState.slug || prevState.slug === generateSlug(prevState.title))) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value),
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Handle Tiptap editor content changes
  const handleEditorChange = (content: string) => {
    setNewBlog((prevState) => ({
      ...prevState,
      description: content,
    }));
  };

  // Add FAQ to the blog
  const addFaq = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: "", answer: "" }],
    }));
  };

  // Remove FAQ from the blog
  const removeFaq = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index),
    }));
  };

  // Handle FAQ input changes
  const handleFaqChange = (index: number, field: "question" | "answer", value: string) => {
    setNewBlog((prevState) => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = { 
        ...updatedFaqs[index], 
        [field]: value, 
      };
      return {
        ...prevState,
        faqs: updatedFaqs,
      };
    });
  };

  // Add Review to the blog
  const addReview = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: "", rating: 5, review: "" }],
    }));
  };

  // Remove Review from the blog
  const removeReview = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index),
    }));
  };

  // Handle Review input changes
  const handleReviewChange = (index: number, field: keyof Review, value: string | number) => {
    setNewBlog((prevState) => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = { 
        ...updatedReviews[index], 
        [field]: value, 
      } as Review;
      return {
        ...prevState,
        reviews: updatedReviews,
      };
    });
  };

  // Handle file upload to MongoDB GridFS Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      alert("Image is too large. Maximum size is 10MB.");
      return;
    }
    
    try {
      setUploading(true);
      setUploadProgress(30);
      
      // Create local preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      const formData = new FormData();
      formData.append("file", file);
      
      setUploadProgress(60);

      // Upload via secure MongoDB endpoint
      const res = await fetch("/api/blog/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      setUploadProgress(90);

      if (res.ok && data.success) {
        const imageUrl = `/api/blog/image/${data.gridFsId}`;
        setNewBlog((prevState) => ({
          ...prevState,
          image: imageUrl,
        }));
        setUploadProgress(100);
      } else {
        throw new Error(data.error || "File upload failed.");
      }
    } catch (error: any) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  // Handle AI generation
  const handleGenerate = async () => {
    if (!aiPrimaryKeyword.trim()) {
      alert("Please enter a Primary Keyword.");
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch("/api/generate-article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          primaryKeyword: aiPrimaryKeyword,
          secondaryKeywords: aiSecondaryKeywords,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate blog");
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No reader available");
      }

      let accumulatedDetails = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulatedDetails += new TextDecoder().decode(value);
      }

      const generatedData = JSON.parse(accumulatedDetails);

      setNewBlog((prevState) => ({
        ...prevState,
        title: generatedData.title || prevState.title,
        subtitle: generatedData.subtitle || prevState.subtitle,
        description: generatedData.description || prevState.description, // HTML content
        metaTitle: generatedData.metaTitle || prevState.metaTitle,
        metaDescription: generatedData.metaDescription || prevState.metaDescription,
        slug: generatedData.slug || prevState.slug,
        faqs: generatedData.faqs || prevState.faqs,
        reviews: generatedData.reviews || prevState.reviews,
      }));

      // If slug wasn't provided but title was, generate one
      if (!generatedData.slug && generatedData.title) {
        const generatedSlug = generateSlug(generatedData.title);
        setNewBlog((prev) => ({ ...prev, slug: generatedSlug }));
      }
      
      // Also set the image prompt if suggested
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }
      
      alert("Blog generated successfully! Please review and add an image.");
    } catch (error) {
      console.error("Error generating blog:", error);
      alert("Failed to generate blog. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt.trim()) {
      alert("Please enter an image prompt.");
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();
      setGeneratedImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Helper to convert base64 or fetch URL to blob safely
  const getImageBlob = async (url: string): Promise<Blob> => {
    if (url.startsWith("data:")) {
      const arr = url.split(',');
      const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
    const response = await fetch(`/api/proxy-image?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch image via proxy: ${response.statusText}`);
    }
    return await response.blob();
  };

  const handleUploadGeneratedImage = async () => {
    if (!generatedImageUrl) return;

    try {
      setIsUploadingGenerated(true);
      
      const blob = await getImageBlob(generatedImageUrl);
      const file = new File([blob], `generated_${Date.now()}.png`, { type: "image/png" });

      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/blog/upload", {
        method: "POST",
        body: formData,
      });

      const data = await uploadRes.json();
      if (uploadRes.ok && data.success) {
        const imageUrl = `/api/blog/image/${data.gridFsId}`;
        setNewBlog((prevState) => ({
          ...prevState,
          image: imageUrl,
        }));
        setImagePreview(imageUrl);
        setGeneratedImageUrl(null); // Clear the preview once uploaded
        alert("Image generated & uploaded to MongoDB successfully!");
      } else {
        throw new Error(data.error || "File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading generated image:", error);
      alert("Failed to upload image to MongoDB.");
    } finally {
      setIsUploadingGenerated(false);
    }
  };



  // Handle blog form submission (Create or Update) to MongoDB APIs
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    let gridFsId = "";
    if (newBlog.image && newBlog.image.includes("/api/blog/image/")) {
      gridFsId = newBlog.image.split("/api/blog/image/")[1];
    }

    // Auto-upload external image (Unsplash, Pollinations, generatedImageUrl) to GridFS if not already done
    const imageToUpload = !gridFsId ? (generatedImageUrl || (newBlog.image && newBlog.image.startsWith("http") ? newBlog.image : "")) : "";

    if (imageToUpload) {
      setIsSubmitting(true);
      try {
        console.log("[Auto-Uploader] Auto-uploading external image to GridFS before saving...");
        const blob = await getImageBlob(imageToUpload);
        const file = new File([blob], `generated_${Date.now()}.png`, { type: "image/png" });

        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await fetch("/api/blog/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadRes.ok && uploadData.success) {
          gridFsId = uploadData.gridFsId;
          newBlog.image = `/api/blog/image/${gridFsId}`;
          setImagePreview(newBlog.image);
          setGeneratedImageUrl(null);
          console.log("[Auto-Uploader] Auto-uploaded successfully. gridFsId:", gridFsId);
        } else {
          throw new Error(uploadData.error || "Auto file upload failed.");
        }
      } catch (error: any) {
        console.error("Auto-uploader failed:", error);
        alert(`Failed to auto-upload image: ${error.message || error}. Please upload the cover image manually before saving.`);
        setIsSubmitting(false);
        return;
      }
    }

    setIsSubmitting(true);
    try {

      // Map dynamic reviews and faqs sub-arrays
      const blogPostPayload = {
        title: newBlog.title,
        slug: newBlog.slug,
        subtitleKeywords: newBlog.subtitle,
        metaTitle: newBlog.metaTitle || newBlog.title,
        metaDescription: newBlog.metaDescription || "",
        publishedAt: new Date(newBlog.date).toISOString(),
        author: newBlog.author,
        content: newBlog.description, // Tiptap HTML content
        coverImage: {
          gridFsId: gridFsId,
          filename: "cover.jpg",
          contentType: "image/jpeg",
        },
        faqs: (newBlog.faqs || []).map((f) => ({
          question: f.question,
          answer: f.answer,
        })),
        reviewSnippets: (newBlog.reviews || []).map((r) => ({
          reviewerName: r.name,
          rating: r.rating,
          reviewText: r.review,
          reviewDate: new Date().toLocaleDateString(),
        })),
      };

      const url = formMode === "add" ? "/api/blog" : `/api/blog/${editingBlogSlug}`;
      const method = formMode === "add" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...blogPostPayload, newSlug: newBlog.slug }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        resetForm();
        fetchBlogsData();
      } else {
        alert(data.error || "Save operation failed.");
      }
    } catch (error: any) {
      console.error("Error processing blog:", error);
      alert("Error processing blog: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit selection
  const handleEdit = (blog: Blog) => {
    setEditingBlogSlug(blog.slug);
    setNewBlog(blog);
    setFormMode("edit");
    setImagePreview(blog.image);

    // Check for saved draft for this specific blog
    const savedDraft = localStorage.getItem(`autosave_blog_${blog.id}`);
    if (savedDraft) {
      if (window.confirm("Found an unsaved draft for this blog. Do you want to restore your edits?")) {
        setNewBlog(JSON.parse(savedDraft));
      } else {
        localStorage.removeItem(`autosave_blog_${blog.id}`);
      }
    }

    setShowBlogForm(true);
  };

  // Handle blog deletion via MongoDB API
  const handleDelete = async (id: string | undefined, slugToDelete: string) => {
    if (!slugToDelete) return;
    
    if (window.confirm("Are you sure you want to delete this blog and its associated image from the database?")) {
      try {
        const res = await fetch(`/api/blog/${slugToDelete}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slugToDelete));
        } else {
          alert(data.error || "Failed to delete from database.");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    if (formMode === "edit" && editingBlogSlug) {
      localStorage.removeItem(`autosave_blog_${editingBlogSlug}`);
    } else {
      localStorage.removeItem("autosave_blog_new");
    }

    setNewBlog({
      title: "",
      subtitle: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      image: "",
      created: Date.now(),
      metaTitle: "",
      metaDescription: "",
      slug: "",
      faqs: [],
      reviews: [],
      author: "Anuj Anand Malik",
    });
    setImagePreview(null);
    setEditingBlogSlug(null);
    setFormMode("add");
    setShowBlogForm(false);
  };

  // Cancel form handler
  const handleCancelForm = () => {
    resetForm();
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Test RSS feed
  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);
      const response = await fetch("/api/rss");
      if (!response.ok) {
        throw new Error(`RSS feed returned status: ${response.status}`);
      }
      const xml = await response.text();
      const itemCount = (xml.match(/<item>/g) || []).length;
      
      setRssDebugInfo(
        `RSS Feed Status: ✅ OK\n` +
        `Items in Feed: ${itemCount}\n\n` +
        `Sample XML (first 500 chars):\n${xml.substring(0, 500)}...`
      );
    } catch (error: any) {
      setRssDebugInfo(`Error testing RSS feed: ${error.message}`);
    } finally {
      setIsLoadingRss(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6 mb-6">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Blogs Dashboard</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Manage, write, edit, and publish blogs and articles with AI generation assistance.</p>
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100"
      >
        {/* Header with Add Blog Button */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-800">
            {showBlogForm ? (formMode === "add" ? "Create New Blog" : "Edit Blog") : "Blog Management"}
          </h2>
          <motion.button
            onClick={() => {
              if (showBlogForm) {
                resetForm();
              } else {
                setFormMode("add");

                // Check for saved draft for new blog
                const savedDraft = localStorage.getItem("autosave_blog_new");
                if (savedDraft) {
                  if (window.confirm("Found an unsaved draft. Do you want to restore it?")) {
                    setNewBlog(JSON.parse(savedDraft));
                  } else {
                    localStorage.removeItem("autosave_blog_new");
                  }
                }

                setShowBlogForm(true);
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-xl font-extrabold text-xs tracking-wider uppercase cursor-pointer"
          >
            <FontAwesomeIcon icon={showBlogForm ? faChartLine : faPlus} />
            {showBlogForm ? "View Blogs" : "Add Blog"}
          </motion.button>
        </div>

        {/* Conditional Rendering: Show either Data Table or Blog Form */}
        {showBlogForm ? (
          <AnimatePresence mode="wait">
            <form onSubmit={handleSubmitBlog} className="space-y-8">
              
              {/* AI Generator Section */}
              <div className="bg-red-50/40 p-5 rounded-2xl border border-red-100 mb-6 space-y-4">
                <h3 className="text-[#DC2626] font-black text-sm uppercase tracking-wider flex items-center">
                  <FontAwesomeIcon icon={faMagic} className="mr-2" />
                  AI Article Writer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-gray-500 uppercase">Primary Keyword</label>
                    <input
                      type="text"
                      value={aiPrimaryKeyword}
                      onChange={(e) => setAiPrimaryKeyword(e.target.value)}
                      placeholder="e.g., recover FNF from previous employor"
                      className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DC2626]"
                      disabled={isGenerating}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-gray-500 uppercase">Secondary Keywords</label>
                    <input
                      type="text"
                      value={aiSecondaryKeywords}
                      onChange={(e) => setAiSecondaryKeywords(e.target.value)}
                      placeholder="e.g., recover FNF from previous employor"
                      className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DC2626]"
                      disabled={isGenerating}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="bg-[#DC2626] text-white text-xs font-black uppercase px-5 py-2.5 rounded-xl hover:bg-[#B91C1C] disabled:bg-red-300 transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                      Generating Content...
                    </>
                  ) : (
                    "Generate AI Blog Content"
                  )}
                </button>
              </div>

              {/* Core blog fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="title" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Blog Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                    placeholder="Enter blog title"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="slug" className="block text-xs font-black text-gray-400 uppercase tracking-wider">URL Slug</label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={newBlog.slug}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                    placeholder="url-friendly-slug-name"
                  />
                  <p className="mt-1 text-[11px] text-gray-400 font-mono">Will be used in the URL: /blog/{newBlog.slug}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="subtitle" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Subtitle/SEO Keywords</label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={newBlog.subtitle}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                    placeholder="Enter SEO keywords"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="metaTitle" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Meta Title</label>
                  <input
                    type="text"
                    id="metaTitle"
                    name="metaTitle"
                    value={newBlog.metaTitle || ""}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                    placeholder="Enter meta title for search engines"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Publication Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newBlog.date}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="image" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Blog Image</label>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        id="image-upload"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-xs font-bold flex items-center hover:bg-gray-100 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faUpload} className="mr-2" />
                        {uploading ? "Uploading..." : "Choose Image"}
                      </button>
                      {newBlog.image && (
                        <span className="text-xs font-bold text-emerald-600">Image successfully loaded</span>
                      )}
                    </div>
                    
                    {uploading && (
                      <div className="w-full bg-gray-250 rounded-full h-2">
                        <div 
                          className="bg-[#DC2626] h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    )}
                    
                    {/* Image preview */}
                    {(imagePreview || newBlog.image) && (
                      <div className="mt-2">
                        <img 
                          src={imagePreview || newBlog.image} 
                          alt="Blog image preview" 
                          className="w-36 h-20 object-cover rounded-xl border border-gray-200"
                        />
                      </div>
                    )}
                    
                    {/* AI Image Generation Prompt */}
                    <div className="mt-4 p-4 bg-red-50/20 border border-red-100 rounded-2xl space-y-3">
                      <label className="block text-[10px] font-black text-gray-500 uppercase">AI Image DALL-E Prompt</label>
                      <textarea
                        value={imagePrompt}
                        onChange={(e) => setImagePrompt(e.target.value)}
                        rows={2}
                        className="text-black w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-[#DC2626]"
                        placeholder="Describe the illustration to generate..."
                      />
                      <button
                        type="button"
                        onClick={handleGenerateImage}
                        disabled={isGeneratingImage || !imagePrompt}
                        className="w-full px-4 py-2 bg-[#111827] text-white rounded-xl text-xs font-bold disabled:bg-gray-300 cursor-pointer"
                      >
                        {isGeneratingImage ? "Generating Image..." : "Generate Image with DALL-E"}
                      </button>
                      
                      {generatedImageUrl && (
                        <div className="mt-4 flex flex-col items-center gap-3">
                          <img 
                            src={generatedImageUrl} 
                            alt="Generated Preview" 
                            className="w-full max-w-xs rounded-xl border border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={handleUploadGeneratedImage}
                            disabled={isUploadingGenerated}
                            className="w-full px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                          >
                            {isUploadingGenerated ? "Uploading..." : "Save Image to Database"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="metaDescription" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Meta Description</label>
                  <input
                    type="text"
                    id="metaDescription"
                    name="metaDescription"
                    value={newBlog.metaDescription || ""}
                    onChange={handleInputChange}
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#DC2626]"
                    placeholder="Enter short meta description snippet"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="author" className="block text-xs font-black text-gray-400 uppercase tracking-wider">Author</label>
                  <select
                    id="author"
                    name="author"
                    value={newBlog.author}
                    onChange={handleInputChange}
                    required
                    className="text-black w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none"
                  >
                    <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                    <option value="Shrey Arora">Shrey Arora</option>
                  </select>
                </div>
              </div>
              
              {/* Rich Text Editor */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-wider">Blog Content</label>
                <TiptapEditor 
                  value={newBlog.description} 
                  onChange={handleEditorChange} 
                />
                

              </div>

              {/* FAQs Builder */}
              <div className="p-5 border border-gray-200 rounded-2xl space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-150">
                  <h4 className="text-sm font-black text-gray-800 uppercase tracking-wider">Frequently Asked Questions</h4>
                  <button
                    type="button"
                    onClick={addFaq}
                    className="px-3.5 py-1.5 bg-[#DC2626]/10 text-[#DC2626] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626]/20 transition-all cursor-pointer"
                  >
                    + Add FAQ
                  </button>
                </div>
                {newBlog.faqs && newBlog.faqs.length > 0 ? (
                  <div className="space-y-3">
                    {newBlog.faqs.map((faq, index) => (
                      <div key={index} className="p-4 bg-gray-50 border border-gray-150 rounded-xl space-y-3 relative">
                        <button
                          type="button"
                          onClick={() => removeFaq(index)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-[#DC2626] cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <div className="space-y-1 w-[90%]">
                          <label className="text-[9px] font-black text-gray-400 uppercase block">Question</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                            className="text-black w-full px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold"
                            placeholder="FAQ question"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-gray-400 uppercase block">Answer</label>
                          <textarea
                            value={faq.answer}
                            onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                            className="text-black w-full px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium"
                            rows={2}
                            placeholder="FAQ answer details"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-xs text-gray-400 font-semibold py-4 uppercase">No FAQs added yet.</p>
                )}
              </div>

              {/* Review Snippets Builder */}
              <div className="p-5 border border-gray-200 rounded-2xl space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-150">
                  <h4 className="text-sm font-black text-gray-800 uppercase tracking-wider">Client Reviews</h4>
                  <button
                    type="button"
                    onClick={addReview}
                    className="px-3.5 py-1.5 bg-[#DC2626]/10 text-[#DC2626] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#DC2626]/20 transition-all cursor-pointer"
                  >
                    + Add Review
                  </button>
                </div>
                {newBlog.reviews && newBlog.reviews.length > 0 ? (
                  <div className="space-y-3">
                    {newBlog.reviews.map((review, index) => (
                      <div key={index} className="p-4 bg-gray-50 border border-gray-150 rounded-xl space-y-3 relative">
                        <button
                          type="button"
                          onClick={() => removeReview(index)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-[#DC2626] cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%]">
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase block">Reviewer Name</label>
                            <input
                              type="text"
                              value={review.name}
                              onChange={(e) => handleReviewChange(index, "name", e.target.value)}
                              className="text-black w-full px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold"
                              placeholder="Reviewer Name"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] font-black text-gray-400 uppercase block">Star Rating</label>
                            <select
                              value={review.rating}
                              onChange={(e) => handleReviewChange(index, "rating", parseInt(e.target.value))}
                              className="text-black w-full px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold"
                            >
                              <option value={5}>5 Stars</option>
                              <option value={4}>4 Stars</option>
                              <option value={3}>3 Stars</option>
                              <option value={2}>2 Stars</option>
                              <option value={1}>1 Star</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-gray-400 uppercase block">Review Text</label>
                          <textarea
                            value={review.review}
                            onChange={(e) => handleReviewChange(index, "review", e.target.value)}
                            className="text-black w-full px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium"
                            rows={2}
                            placeholder="Enter review copy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-xs text-gray-400 font-semibold py-4 uppercase">No reviews added yet.</p>
                )}
              </div>

              {/* Form Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#DC2626] text-white rounded-xl font-black text-xs uppercase tracking-wider hover:bg-[#B91C1C] disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? "Saving..." : "Save Blog"}
                </button>
              </div>

            </form>
          </AnimatePresence>
        ) : (
          /* Table blogs list view */
          <div className="space-y-6">
            
            {/* Search Input bar */}
            <div className="flex items-center gap-3 max-w-sm border border-gray-250 rounded-xl px-4 py-2.5 bg-white shadow-sm">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold focus:outline-none text-gray-800"
              />
            </div>

            {isLoadingBlogs ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading directory...</p>
              </div>
            ) : currentBlogs.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-black uppercase tracking-wider bg-gray-50/40">
                      <th className="py-4 px-6">Image</th>
                      <th className="py-4 px-6">Article Details</th>
                      <th className="py-4 px-6">Author & Date</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBlogs.map((blog) => (
                      <tr key={blog.id} className="border-b border-gray-100 hover:bg-gray-50/20 transition-colors">
                        <td className="py-4 px-6">
                          <div className="w-24 h-14 bg-gray-100 rounded-xl overflow-hidden border border-gray-150">
                            {blog.image ? (
                              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">No Image</div>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 max-w-sm">
                          <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 line-clamp-1 mb-1">{blog.title}</h4>
                          <span className="text-[10px] text-[#DC2626] font-mono tracking-tight bg-red-50/30 px-2 py-0.5 rounded border border-red-100/30">
                            /blog/{blog.slug}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-xs font-bold text-gray-700">{blog.author}</div>
                          <div className="text-[10px] text-gray-400 font-semibold">{blog.date}</div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEdit(blog)}
                              className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-colors cursor-pointer"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id, blog.slug)}
                              className="p-2 border border-red-100 rounded-xl text-[#DC2626] hover:text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-colors cursor-pointer"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-16 text-center">No articles matches found.</div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-4 bg-white border-t border-gray-100">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl disabled:opacity-50 cursor-pointer hover:bg-gray-50"
                >
                  Previous
                </button>
                <span className="text-xs font-extrabold text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-200 text-xs font-bold rounded-xl disabled:opacity-50 cursor-pointer hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}

            {/* RSS Feed Diagnostic Debug Section */}
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-4">
              <h3 className="text-xs font-black text-gray-700 uppercase tracking-widest">RSS Feed Diagnostic Panel</h3>
              <button
                type="button"
                onClick={testRssFeed}
                disabled={isLoadingRss}
                className="px-4 py-2 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-xl text-xs font-bold hover:shadow transition-all cursor-pointer"
              >
                {isLoadingRss ? "Checking RSS..." : "Execute RSS Diagnostic check"}
              </button>
              {rssDebugInfo && (
                <pre className="bg-[#0B0F17] text-[#10B981] p-4 rounded-xl text-xs font-mono overflow-auto max-h-[300px] leading-relaxed border border-gray-800 shadow-inner">
                  {rssDebugInfo}
                </pre>
              )}
            </div>

          </div>
        )}

      </motion.div>
    </motion.div>
  );
};

export default BlogsDashboard;
