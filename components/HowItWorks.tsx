import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    const steps = [
        { title: "Understand Process", text: "I analyze your current manual workflow and identify bottlenecks." },
        { title: "Identify Opportunities", text: "We pinpoint where AI and automation can save the most time." },
        { title: "Build & Test", text: "I build the automation workflows and rigorously test them." },
        { title: "Deploy & Monitor", text: "We go live, and I ensure everything runs smoothly." }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>How It Works</h2>
                    <p>Simple, systematic, and results-driven process.</p>
                </div>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.number}>{i + 1}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
