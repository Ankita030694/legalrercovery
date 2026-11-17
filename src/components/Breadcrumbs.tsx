import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  [key: string]: any;
}

export default function Breadcrumbs({ items, currentPage }: { items: BreadcrumbItem[]; currentPage?: string; [key: string]: any }) {
  return (
    <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 font-medium mb-6">
      <Link href="/" className="hover:text-[#DC2626] transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.href || index} className="flex items-center space-x-2">
          <span className="text-gray-300">/</span>
          {index === items.length - 1 || !item.href ? (
            <span className="text-[#111827] font-semibold line-clamp-1 max-w-[200px] md:max-w-md">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="hover:text-[#DC2626] transition-colors">
              {item.label}
            </Link>
          )}
        </span>
      ))}
      {currentPage && (
        <span className="flex items-center space-x-2">
          <span className="text-gray-300">/</span>
          <span className="text-[#111827] font-semibold line-clamp-1 max-w-[200px] md:max-w-md">
            {currentPage}
          </span>
        </span>
      )}
    </nav>
  );
}
