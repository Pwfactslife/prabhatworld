'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import styles from './LeadPopup.module.css';

export default function LeadPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosed, setHasClosed] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds if not previously closed
        const timer = setTimeout(() => {
            const closed = sessionStorage.getItem('leadPopupClosed');
            if (!closed) {
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setHasClosed(true);
        sessionStorage.setItem('leadPopupClosed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
                    <X size={20} />
                </button>
                <div className={styles.content}>
                    <h3 className={styles.title}>Struggling with Manual Tasks? 🤖</h3>
                    <p className={styles.text}>
                        Don't let spreadsheets slow you down. Book a 15-min demo call to see how we can automate your business.
                    </p>
                    <Link href="#contact" className={styles.cta} onClick={handleClose}>
                        Book a Free Demo Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
