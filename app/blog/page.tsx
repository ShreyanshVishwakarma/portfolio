"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/blog";
import AnimatedContent from "@/components/AnimatedContent";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const blogPosts = await response.json();
          setPosts(blogPosts);
        }
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen relative bg-background overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="h-12 w-48 bg-muted animate-pulse rounded-lg" />
              <div className="h-6 w-96 bg-muted animate-pulse rounded-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 rounded-2xl bg-muted/50 border border-border animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-background overflow-hidden">
      {/* Background flair */}
      <div className="absolute inset-0 top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedContent 
            distance={40} 
            direction="vertical" 
            delay={0.1}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Writing & <span className="text-primary italic">Thoughts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Documenting my journey through computer science, diving deep into data structures, solving leetcode grinds, and navigating placement season.
            </p>
          </AnimatedContent>

          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-xl">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {posts.map((post, i) => (
                <AnimatedContent 
                  key={post.slug}
                  distance={50}
                  direction="vertical"
                  delay={0.2 + (i * 0.1)}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6">
                          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </time>
                          </span>
                          {post.author && (
                            <span className="flex items-center gap-1.5 opacity-80">
                              <User className="w-3.5 h-3.5" />
                              {post.author}
                            </span>
                          )}
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-3">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-8">
                          {post.description}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-primary mt-auto pt-4 border-t border-border/50">
                        Read full post
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  </Link>
                </AnimatedContent>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
