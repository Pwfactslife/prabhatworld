import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';

export default function LatestInsights() {
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Latest Insights
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends and strategies in business automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block"
                        >
                            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-blue-600 mb-2 font-medium">
                                        {post.tags[0]}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.description}
                                    </p>
                                    <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center mt-auto">
                                        Read More →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
