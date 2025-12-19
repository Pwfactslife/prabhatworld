import { AlertTriangle, Clock, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import styles from './ProblemStatement.module.css';

export default function ProblemStatement() {
    const problems = [
        {
            icon: <Clock size={24} />,
            title: "Hours Wasted on Repetitive Tasks",
            text: "Stop copying data between sheets manually. Your team should focus on growth, not data entry."
        },
        {
            icon: <FileSpreadsheet size={24} />,
            title: "Dependent on Excel & WhatsApp",
            text: "Business logic stuck in chat logs and fragile spreadsheets? It's time for a robust system."
        },
        {
            icon: <AlertTriangle size={24} />,
            title: "Errors in Compliance & Docs",
            text: "Manual processes lead to critical mistakes in tenders and legal documents. Automate to ensure accuracy."
        },
        {
            icon: <LayoutGrid size={24} />,
            title: "No Visibility in Processes",
            text: "Can't track who did what? Gain clear insights and accountability with structured workflows."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.intro}>
                <h2 className={styles.heading}>Does this sound like your business?</h2>
                <p className={styles.subtext}>
                    Growth without systems leads to chaos. We solve these core operational bottlenecks.
                </p>
            </div>

            <div className={styles.grid}>
                {problems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{item.icon}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardText}>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
