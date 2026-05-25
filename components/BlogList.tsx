"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

type BlogPostMetadata = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export function BlogList({ posts }: { posts: BlogPostMetadata[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const POSTS_PER_PAGE = 5;

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset to first page when searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative mb-12 flex items-center">
        <div className="absolute left-0 pl-3 md:pl-4 text-[#A39274] dark:text-[#5C5346]">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search thoughts..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full bg-transparent border-b border-[#D1C6B4] dark:border-[#2B2721] border-dashed pb-2 pl-10 md:pl-12 pr-4 focus:outline-none focus:border-[#A39274] dark:focus:border-[#5C5346] transition-colors text-[#3A352D] dark:text-[#9A9183] placeholder:text-[#A39274]/60 dark:placeholder:text-[#5C5346] font-sans text-lg"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#A39274] dark:text-[#7A7265] italic">No thoughts found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {currentPosts.map((post) => {
            const date = new Date(post.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            }).toUpperCase();

            return (
              <article key={post.slug} className="group relative">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#A39274] dark:text-[#5C5346] text-xs font-sans tracking-widest">
                      {formattedDate}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-[#3A352D] dark:text-[#E8E3D9] group-hover:text-[#A39274] dark:group-hover:text-[#E8E3D9] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[#5C554B] dark:text-[#9A9183] font-sans leading-relaxed text-sm md:text-base max-w-3xl mt-1">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 pt-8 border-t border-dashed border-[#D1C6B4] dark:border-[#2B2721] flex items-center justify-between text-[#A39274] dark:text-[#7A7265] font-sans text-sm tracking-widest uppercase">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 hover:text-[#3A352D] dark:hover:text-[#E8E3D9] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 hover:text-[#3A352D] dark:hover:text-[#E8E3D9] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
