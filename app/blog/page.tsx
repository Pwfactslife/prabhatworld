import Header from "@/components/Header";
import styles from './blog.module.css';

export default function Blog() {
    return (
        <main>
            <Header />
            <div className={styles.container}>
                <h1>Insights & Guides</h1>
                <p>Coming Soon. Practical guides on AI automation for business.</p>
            </div>
        </main>
    );
}
