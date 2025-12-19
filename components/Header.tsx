import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    Prabhat<span>World</span>
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="#services">Services</Link>
                    <Link href="#work">Work</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact" className={styles.ctaButton}>
                        Book Audit
                    </Link>
                </nav>
            </div>
        </header>
    );
}
