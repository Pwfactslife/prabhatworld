import styles from './VisualBreak.module.css';

export default function VisualBreak() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.statement}>
                    Automation is not about AI.<br />
                    It&apos;s about <span className={styles.highlight}>removing friction</span> from your business.
                </h2>
            </div>
        </section>
    );
}
