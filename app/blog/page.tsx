import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import styles from './blog.module.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Insights & Guides - Prabhat World",
    description: "Practical guides on AI automation, business growth, and technology for small businesses.",
};

export default function Blog() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Insights & Guides
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Practical strategies to automate your business, save time, and scale faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-blue-600 mb-3 font-medium">
                                    {post.tags[0]}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="group-hover:translate-x-1 transition-transform">Read Article →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
