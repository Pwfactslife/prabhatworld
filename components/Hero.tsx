import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <span className={`${styles.badge} animate-fade-in`}>Automate & Scale 🚀</span>
            <h1 className={`${styles.headline} animate-fade-in delay-100`}>
                AI Automation That Removes Manual Work From Your Business
            </h1>
            <p className={`${styles.subheadline} animate-fade-in delay-200`}>
                I design practical AI-powered workflows that replace Excel chaos, reduce errors, and free up hours every week — without complexity.
            </p>
            <div className={`${styles.ctaGroup} animate-fade-in delay-300`}>
                <Link href="#contact" className={styles.primaryCta}>
                    Get a Free Automation Audit
                </Link>
                <Link
                    href="https://wa.me/9117609166" // 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryCta}
                >
                    Chat on WhatsApp
                </Link>
            </div>
            <p className={styles.microProof}>
                ✓ Used by service agencies & operations-heavy businesses
            </p>
        </section>
    );
}
