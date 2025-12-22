import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";
import styles from './blog.module.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Design & Photography Journal - Prabhat World",
    description: "Curated stories on design, automation, and business growth.",
};

export default function Blog() {
    const featuredPost = blogPosts[0];
    const restPosts = blogPosts.slice(1);

    return (
        <main className={styles.main}>
            <Header />

            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.journalHeader}>
                    <div className={styles.categoryLabel}>Resources <span className={styles.arrow}>&rarr;</span> <span className={styles.activeCategory}>Design & Photography</span></div>
                    <h1 className={styles.pageTitle}>Untitled Design & Photography Journal</h1>
                    <p className={styles.pageSubtitle}>The Untitled UI Journal features carefully selected good works from studios, designers, architects, photographers, and creators from all around the globe. Subscribe for new posts in your inbox.</p>
                </div>

                {/* Hero Section */}
                {featuredPost && (
                    <Link href={`/blog/${featuredPost.slug}`} className={styles.heroLink}>
                        <div className={styles.heroCard}>
                            <div className={styles.heroImageContainer}>
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className={styles.heroImage}
                                    priority
                                />
                                <div className={styles.heroOverlay}>
                                    <div className={styles.heroContent}>
                                        <h2 className={styles.heroTitle}>
                                            {featuredPost.title}
                                        </h2>
                                        <div className={styles.heroMeta}>
                                            <span className={styles.heroAuthor}>By {featuredPost.author}</span>
                                            <span className={styles.heroDate}>{new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Grid Section */}
                <div className={styles.featuredHeader}>
                    <h2>Featured blog posts</h2>
                    <button className={styles.viewAllBtn}>View all posts</button>
                </div>

                <div className={styles.grid}>
                    {restPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.cardImageContainer}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>
                                        {post.title}
                                    </h3>
                                    <span className={styles.arrowIcon}>↗</span>
                                </div>
                                <p className={styles.cardDescription}>
                                    {post.description}
                                </p>
                                <div className={styles.cardMeta}>
                                    <div className={styles.authorGroup}>
                                        {/* Avatar placeholder if we had one, for now just text */}
                                        <span className={styles.cardAuthor}>{post.author}</span>
                                    </div>
                                    <span className={styles.cardDate}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3>Let&apos;s get started on something great</h3>
                        <p>Join over 4,000+ startups already growing with Untitled.</p>
                    </div>
                    <div className={styles.ctaActions}>
                        <button className={styles.ctaButton}>Get started</button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
