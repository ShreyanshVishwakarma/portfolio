import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Pre } from "@/components/ui/pre";

import { ThemeToggle } from "@/components/theme-toggle";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F4EFE6] dark:bg-[#1a1814] text-[#3A352D] dark:text-[#d3cec4] font-serif pb-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#A39274] hover:text-[#3A352D] dark:hover:text-[#d3cec4] transition-colors mb-8 font-sans text-sm tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" />
            Back to notes
          </Link>
          <div className="bg-[#FDFAF3] dark:bg-[#201d18] rounded-sm shadow-sm border border-[#E8DFD3] dark:border-[#383329] min-h-[400px] p-8 md:p-16 text-center flex flex-col items-center justify-center transition-colors duration-300">
            <h1 className="text-3xl md:text-5xl font-normal mb-4 dark:text-[#e8e4db]">Thought Not Found</h1>
            <p className="text-[#5C554B] dark:text-[#a09787] font-sans">
              This page from the notebook seems to have been torn out.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();

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

        <div className="bg-[#FDFAF3] dark:bg-[#161412] rounded-sm shadow-sm border border-[#E8DFD3] dark:border-[#2B2721] min-h-[800px] relative overflow-hidden transition-colors duration-300">
          {/* Subtle lined paper background effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15] dark:hidden bg-[linear-gradient(#C4B59D_1px,transparent_1px)] dark:bg-transparent bg-[length:100%_3rem] mt-8">
          </div>

          <div className="relative z-10 p-8 md:p-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#A39274] dark:text-[#7A7265] hover:text-[#3A352D] dark:hover:text-[#E8E3D9] transition-colors mb-12 font-sans text-xs tracking-widest uppercase"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to notes
            </Link>

            <article>
              <header className="mb-12">
                <span className="text-[#A39274] dark:text-[#5C5346] text-xs font-sans tracking-widest block mb-4">
                  {formattedDate} {post.author && `• BY ${post.author.toUpperCase()}`}
                </span>
                <h1 className="text-4xl md:text-[3.25rem] font-normal leading-tight mb-8 text-[#2D2924] dark:text-[#E8E3D9]">{post.title}</h1>
              </header>

              <div className="prose prose-lg dark:prose-invert max-w-none text-[#4A433A] dark:text-[#9A9183] font-sans 
                [&>p]:leading-relaxed [&>p]:mb-6 
                [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:font-normal [&>h2]:text-[#2D2924] dark:[&>h2]:text-[#E8E3D9] [&>h2]:mt-12 [&>h2]:mb-6
                [&>h3]:font-serif [&>h3]:text-2xl [&>h3]:font-normal [&>h3]:text-[#2D2924] dark:[&>h3]:text-[#E8E3D9] [&>h3]:mt-8 [&>h3]:mb-4
                [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul>li]:mb-2
                [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>ol>li]:mb-2
                [&>code]:bg-[#E8DFD3]/50 dark:[&>code]:bg-[#1A1815] [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded-sm [&>code]:text-[#8B3A3A] dark:[&>code]:text-[#D8B48F] [&>code]:font-mono [&>code]:text-sm
                [&>blockquote]:border-l-2 [&>blockquote]:border-[#A39274] dark:[&>blockquote]:border-[#2B2721] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#70665A] dark:[&>blockquote]:text-[#7A7265] [&>blockquote]:my-8
                [&>hr]:border-[#D1C6B4] dark:[&>hr]:border-[#2B2721] [&>hr]:border-dashed [&>hr]:my-12">
                <MDXRemote source={post.content} components={{ pre: Pre }} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
