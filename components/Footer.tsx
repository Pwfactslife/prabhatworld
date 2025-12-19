import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialLinks}>
                    <Link
                        href="https://instagram.com/prabhatworld.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <Instagram size={20} />
                        <span>@prabhatworld.tech</span>
                    </Link>
                    <Link
                        href="mailto:contact@prabhatworld.tech"
                        className={styles.link}
                    >
                        <Mail size={20} />
                        <span>Contact</span>
                    </Link>
                </div>

                <div className={styles.divider}></div>

                <p className={styles.copyright}>
                    &copy; {currentYear} Prabhat World. AI Automation Solutions.
                </p>
            </div>
        </footer>
    );
}
