'use client';

import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
    // TODO: Replace with actual WhatsApp number
    const phoneNumber = '9117609166';
    const message = 'Hi, I would like to inquire about AI automation services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.container}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
