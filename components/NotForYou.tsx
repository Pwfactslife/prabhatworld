import { XCircle } from 'lucide-react';
import styles from './NotForYou.module.css';

export default function NotForYou() {
    const points = [
        "You want a cheap automation without understanding your process",
        "You expect AI to magically fix broken operations",
        "You don’t want to change how work is done"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>This is NOT for you if...</h2>
                <ul className={styles.list}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.item}>
                            <XCircle className={styles.icon} size={24} />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
