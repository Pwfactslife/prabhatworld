import styles from './WhoIWorkWith.module.css';

export default function WhoIWorkWith() {
    const customereGroups = [
        {
            title: "Small Business Owners",
            desc: "Who are tired of manual data entry and want to scale without adding more staff."
        },
        {
            title: "Service Agencies",
            desc: "Marketing, HR, or Legal firms needing streamlined client onboarding and reporting."
        },
        {
            title: "Operations-Heavy Firms",
            desc: "Logistics, Security, or Manpower agencies dealing with daily compliance and rostering."
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Who I Work With</h2>
            <div className={styles.grid}>
                {customereGroups.map((group, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{group.title}</h3>
                        <p>{group.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
