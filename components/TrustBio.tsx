import styles from './TrustBio.module.css';

export default function TrustBio() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Trust Me?</h2>
                <div className={styles.content}>
                    <p>
                        I’m not just a developer; I understand business. With a background in <span className={styles.highlight}>Management (BBA)</span> and real-world operations, I view automation as a tool to solve business problems, not just write code.
                    </p>
                    <br />
                    <p>
                        My focus is on <span className={styles.highlight}>practicality</span>. I don't sell hype or complicated systems you can't maintain. I build efficient, accurate workflows that save you time from day one.
                    </p>
                </div>

                <div className={styles.credentials}>
                    <div className={styles.credentialItem}>
                        <span className={styles.credentialValue}>3+</span>
                        <span className={styles.credentialLabel}>Years Experience</span>
                    </div>
                    <div className={styles.credentialItem}>
                        <span className={styles.credentialValue}>10+</span>
                        <span className={styles.credentialLabel}>Projects Delivered</span>
                    </div>
                    <div className={styles.credentialItem}>
                        <span className={styles.credentialValue}>100%</span>
                        <span className={styles.credentialLabel}>Practical Focus</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
