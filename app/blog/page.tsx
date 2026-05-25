import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { BlogList } from "@/components/BlogList";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // We strip full content to keep the client payload lightweight
  const lightweightPosts = posts.map(({ slug, title, date, description }) => ({
    slug,
    title,
    date,
    description,
  }));

  return (
    <div className="min-h-screen bg-[#F4EFE6] dark:bg-[#11100E] text-[#3A352D] dark:text-[#9A9183] selection:bg-[#E2D8C6] dark:selection:bg-[#322A20] pb-24 font-serif transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 lg:px-8">
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12 px-2 md:px-12">
          <Link href="/" className="text-xl tracking-wide text-[#3A352D] dark:text-[#E8E3D9] font-sans font-semibold hover:text-[#A39274] dark:hover:text-[#E8E3D9] transition-colors">SHREYANSH</Link>
          <div className="flex items-center gap-4">
            <span className="text-[#A39274] dark:text-[#7A7265] text-xs uppercase tracking-widest font-sans font-medium mt-1">Notebook</span>
            <ThemeToggle />
          </div>
        </header>

        {/* Paper Container */}
        <div className="bg-[#FDFAF3] dark:bg-[#161412] rounded-sm shadow-sm border border-[#E8DFD3] dark:border-[#2B2721] min-h-[800px] relative overflow-hidden transition-colors duration-300">
          
          {/* Subtle lined paper background effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] dark:hidden bg-[linear-gradient(#C4B59D_1px,transparent_1px)] dark:bg-transparent bg-[length:100%_3rem] mt-8">
          </div>

          <div className="relative z-10 p-8 md:px-16 md:pt-10 md:pb-16">
            <p className="text-[#A39274] dark:text-[#7A7265] italic text-2xl mb-8" style={{ fontFamily: 'var(--font-cursive), cursive, Georgia, serif' }}>Writing & Thoughts,</p>
            
            <h2 className="text-4xl md:text-[3.25rem] font-normal leading-tight mb-8 text-[#2D2924] dark:text-[#E8E3D9]">
              Documenting the<br /><i className="text-[#A39274] dark:text-[#7A7265]">journey.</i>
            </h2>
            
            <p className="text-[#5C554B] dark:text-[#9A9183] text-lg leading-relaxed mb-12 max-w-2xl font-sans tracking-wide">
              Welcome to my digital notebook. This is where I document my progress through computer science, deep dives into data structures, and anything else I learn along the way.
            </p>

            <BlogList posts={lightweightPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
