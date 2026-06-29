"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, faUsers, faChartLine, faClipboardList, faCog, 
  faPlus, faEdit, faTrash, faUpload, faMagic, faSearch, faSignOutAlt,
  faNewspaper, faFilter, faStar, faChevronLeft, faChevronRight,
  faTimes, faArrowLeft, faCheckCircle, faInfoCircle, faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import Tiptap editor with client-side rendering only
const TiptapEditor = dynamic(() => import("./TiptapEditor"), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-xl min-h-[350px]">
      <div className="flex flex-col items-center gap-2">
        <span className="animate-spin text-[#DC2626]">💫</span>
        <p className="text-slate-500 text-sm font-semibold">Loading Custom Editor...</p>
      </div>
    </div>
  ),
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
    author: "Rahul Verma", // Default author
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [rssDebugInfo, setRssDebugInfo] = useState<string>("");
  const [isLoadingRss, setIsLoadingRss] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  // AI Generation state
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
          author: docData.author || "Rahul Verma",
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
        alert(formMode === "add" ? "Blog Post published successfully!" : "Blog Post updated successfully!");
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
          alert("Blog deleted successfully!");
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
      author: "Rahul Verma",
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
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <AnimatePresence mode="wait">
        {!showBlogForm ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-3xs">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#DC2626]">📝</span>
                  <span>Curated Blog Dashboard</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormMode("add");
                  const savedDraft = localStorage.getItem("autosave_blog_new");
                  if (savedDraft) {
                    if (window.confirm("Found an unsaved draft. Do you want to restore it?")) {
                      setNewBlog(JSON.parse(savedDraft));
                      setImagePreview(JSON.parse(savedDraft).image || null);
                    } else {
                      localStorage.removeItem("autosave_blog_new");
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
                        author: "Rahul Verma",
                      });
                      setImagePreview(null);
                    }
                  } else {
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
                      author: "Rahul Verma",
                    });
                    setImagePreview(null);
                  }
                  setShowBlogForm(true);
                }}
                className="bg-[#DC2626] hover:bg-[#991B1B] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-3xs"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Write Blog Post</span>
              </button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Published Blogs</span>
                <p className="text-3xl font-black text-[#DC2626] mt-1">{blogs.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">TOC & SEO Enriched</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {blogs.filter(b => b.description?.includes('<h2') || b.description?.includes('<h3')).length}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-3xs">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">FAQs Embedded</span>
                <p className="text-3xl font-black text-blue-700 mt-1">
                  {blogs.filter(b => b.faqs && b.faqs.length > 0).length}
                </p>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-3xs items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search blogs by title, subtitle, or slug..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {/* Blogs Table / List */}
            {isLoadingBlogs ? (
              <div className="flex justify-center items-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs">
                <div className="flex flex-col items-center gap-2">
                  <span className="animate-spin text-2xl text-[#DC2626]">💫</span>
                  <p className="text-slate-500 text-sm font-semibold">Loading published blogs...</p>
                </div>
              </div>
            ) : currentBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-3xs border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No blog posts found matching search query.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-3xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Banner</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Slug / Link</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentBlogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            <img
                              src={blog.image || "/logo_qa.png"}
                              alt={blog.title}
                              className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-3xs"
                            />
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#DC2626] transition-colors">
                              {blog.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{blog.date}</span>
                              <span>•</span>
                              <span>By: {blog.author}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-150 text-slate-600 px-2 py-0.5 rounded-md">
                              {blog.slug}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 items-center">
                              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
                                {blog.faqs?.length || 0} FAQs
                              </span>
                              <span className="px-2 py-0.5 bg-red-50 border border-red-200/50 rounded-md text-[10px] font-extrabold text-[#DC2626]">
                                {blog.reviews?.length || 0} Reviews
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-[#DC2626] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id, blog.slug)}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete post"
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs text-slate-400 font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* RSS Feed Diagnostic Debug Section */}
            <div className="bg-white border border-slate-100 shadow-3xs p-5 rounded-2xl space-y-4">
              <h3 className="text-xs font-black text-slate-700 uppercase tracking-widest">RSS Feed Diagnostic Panel</h3>
              <button
                type="button"
                onClick={testRssFeed}
                disabled={isLoadingRss}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all cursor-pointer border border-slate-200"
              >
                {isLoadingRss ? "Checking RSS..." : "Execute RSS Diagnostic check"}
              </button>
              {rssDebugInfo && (
                <pre className="bg-slate-900 text-[#DC2626] p-4 rounded-xl text-xs font-mono overflow-auto max-h-[300px] leading-relaxed border border-slate-800 shadow-inner">
                  {rssDebugInfo}
                </pre>
              )}
            </div>

          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmitBlog}
            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    const savedDraft = localStorage.getItem(formMode === 'add' ? "autosave_blog_new" : `autosave_blog_${newBlog.id}`);
                    if (savedDraft) {
                      setNewBlog(JSON.parse(savedDraft));
                      setImagePreview(JSON.parse(savedDraft).image || null);
                      alert("Draft recovered successfully!");
                    } else {
                      alert("No draft found in storage.");
                    }
                  }}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-600 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  title="Check autosaved version"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-xs" />
                  <span>Restore Draft</span>
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#DC2626] hover:bg-[#991B1B] border border-[#DC2626] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Blog"}
                </button>
              </div>
            </div>

            {/* AI Generator Section */}
            <div className="p-6 border border-red-200/80 bg-gradient-to-br from-red-50/40 to-orange-50/10 rounded-2xl shadow-3xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-[#DC2626] text-xs font-bold animate-pulse">✨</span>
                  <div>
                    <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                      AI Article Writer
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                      Provide context, topic, or a writeup. AI will generate a complete blog post including FAQs and reviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <textarea
                  value={aiPrimaryKeyword}
                  onChange={(e) => setAiPrimaryKeyword(e.target.value)}
                  placeholder="Provide detailed context, a writeup, or topic here to generate a comprehensive blog article..."
                  rows={3}
                  className="w-full p-4 bg-white border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-50 rounded-xl text-xs text-slate-800 focus:outline-none placeholder-slate-400 shadow-3xs transition-all resize-y"
                  disabled={isGenerating}
                />
              </div>

              <div className="flex items-center justify-end mt-3">
                  <motion.button
                    type="button"
                    onClick={handleGenerate}
                    disabled={isGenerating || !aiPrimaryKeyword.trim()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-[#DC2626] hover:from-red-700 hover:to-[#991B1B] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    {isGenerating ? (
                      <>
                        <span className="animate-spin text-xs">💫</span>
                        <span>Generating Content...</span>
                      </>
                    ) : (
                      <>
                        <span>✨ Generate Blog with AI</span>
                      </>
                    )}
                  </motion.button>
              </div>
            </div>

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS principles"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span>URL Slug *</span>
                  <span className="text-[10px] text-slate-400 italic lowercase font-normal">(only letters, numbers, hyphens)</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  required
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                >
                  <option value="Rahul Verma">Rahul Verma</option>
                  <option value="Shrey Arora">Shrey Arora</option>
                  <option value="Adv. Ashish Bhay">Adv. Ashish Bhay</option>
                </select>
              </div>

              {/* Image Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="image"
                    value={newBlog.image}
                    onChange={handleInputChange}
                    placeholder="e.g. /api/blog/image/... or select local file"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Upload cover image"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    <span>{uploading ? '...' : 'Upload'}</span>
                  </button>
                </div>
                
                {/* Upload Progress bar */}
                {uploading && (
                  <div className="w-full bg-slate-100 rounded-full h-1 mt-1">
                    <div 
                      className="bg-[#DC2626] h-1 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Image Generation Card */}
            <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">AI Image DALL-E Generator</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  className="p-3 border border-slate-200 rounded-xl focus:border-[#DC2626] focus:outline-none text-xs font-semibold text-slate-700 bg-white flex-1"
                  placeholder="Describe the illustration to generate..."
                />
                <button
                  type="button"
                  onClick={handleGenerateImage}
                  disabled={isGeneratingImage || !imagePrompt}
                  className="px-4 py-3 bg-slate-800 text-white rounded-xl text-xs font-bold disabled:bg-slate-300 cursor-pointer transition-colors"
                >
                  {isGeneratingImage ? "Generating..." : "Generate Image"}
                </button>
              </div>
              
              {generatedImageUrl && (
                <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 p-3 bg-white border border-slate-200 rounded-xl">
                  <img 
                    src={generatedImageUrl} 
                    alt="Generated Preview" 
                    className="w-32 h-20 object-cover rounded-lg border border-slate-200"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-medium mb-2">Image generated successfully. Save to MongoDB to use it as cover image.</p>
                    <button
                      type="button"
                      onClick={handleUploadGeneratedImage}
                      disabled={isUploadingGenerated}
                      className="px-4 py-2 bg-[#DC2626] text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-[#991B1B] transition-colors"
                    >
                      {isUploadingGenerated ? "Uploading..." : "Save Image to Database"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Image Preview Block */}
            {(imagePreview || newBlog.image) && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cover Image Preview</span>
                <img
                  src={imagePreview || newBlog.image}
                  alt="cover preview"
                  className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-3xs"
                />
              </div>
            )}

            {/* Tiptap Rich Description Editor */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <TiptapEditor
                  value={newBlog.description}
                  onChange={handleEditorChange}
                />
              </div>
            </div>

            {/* SEO Meta Tags Accordion */}
            <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#DC2626]" />
                <span>Google Search SEO Configuration</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={newBlog.metaTitle || ""}
                    onChange={handleInputChange}
                    placeholder="Defaults to post title if left blank"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#DC2626] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Description</label>
                  <input
                    type="text"
                    name="metaDescription"
                    value={newBlog.metaDescription || ""}
                    onChange={handleInputChange}
                    placeholder="Short description for Google snippet"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#DC2626] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-700" />
                  <span>Crawlable Q&A (FAQ Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addFaq}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {(newBlog.faqs || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No FAQ cards configured. Add items to support Google Q&A Rich snippets.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Question (e.g. Can I settle a bank loan without court?)"
                          required
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#DC2626] focus:outline-none"
                        />
                        <textarea
                          placeholder="Provide a detailed answer here..."
                          required
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          className="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-medium focus:border-[#DC2626] focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Review Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-[#DC2626]" />
                  <span>Client Reviews (Star Ratings)</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-[#DC2626] hover:text-[#991B1B] flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Review</span>
                </button>
              </div>

              {(newBlog.reviews || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No reviews added. User reviews boost conversion rates.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(newBlog.reviews || []).map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-3xs">
                      <button
                        type="button"
                        onClick={() => removeReview(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="flex flex-col gap-2.5 pr-8">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Reviewer Name"
                            required
                            value={review.name}
                            onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                            className="w-full p-2 border border-slate-200 rounded-lg text-xs font-semibold focus:border-[#DC2626] focus:outline-none"
                          />
                          <select
                            value={review.rating}
                            onChange={(e) => handleReviewChange(idx, 'rating', parseInt(e.target.value))}
                            className="w-24 p-2 border border-slate-200 rounded-lg text-xs font-bold text-[#DC2626] focus:border-[#DC2626] focus:outline-none"
                          >
                            <option value={5}>5 ★</option>
                            <option value={4}>4 ★</option>
                            <option value={3}>3 ★</option>
                            <option value={2}>2 ★</option>
                            <option value={1}>1 ★</option>
                          </select>
                        </div>
                        <textarea
                          placeholder="Review comments..."
                          required
                          rows={2}
                          value={review.review}
                          onChange={(e) => handleReviewChange(idx, 'review', e.target.value)}
                          className="w-full p-2 border border-slate-200 rounded-lg text-[11px] font-medium focus:border-[#DC2626] focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Form Action Buttons Bottom */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handleCancelForm}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-xs cursor-pointer hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#DC2626] text-white rounded-xl font-black text-xs uppercase tracking-wider hover:bg-[#991B1B] disabled:opacity-50 cursor-pointer shadow-sm transition-colors"
              >
                {isSubmitting ? "Saving..." : "Save Blog Post"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogsDashboard;
