import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://prabhatworld.tech/blog/${post.slug}`,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [
            `https://prabhatworld.tech${post.image}`,
        ],
        datePublished: post.date,
        dateModified: post.date,
        author: [
            {
                '@type': 'Person',
                name: post.author,
                url: 'https://prabhatworld.tech',
            },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'Prabhat World',
            logo: {
                '@type': 'ImageObject',
                url: 'https://prabhatworld.tech/images/logo.png', // Replace with actual logo URL if available
            },
        },
        description: post.description,
    };

    return (
        <>
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-gray-50">
                <Header />
                <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center mb-6"
                        >
                            ← Back to Blog
                        </Link>

                        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-gray-600 mb-8 text-sm">
                            <span>By {post.author}</span>
                            <span className="mx-2">•</span>
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                            <span className="mx-2">•</span>
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 bg-white p-8 rounded-xl shadow-sm">
                        {post.content}
                    </div>
                </article>
                <Footer />
            </main>
        </>
    );
}
