import { Bot, FileText, Globe } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span className={styles.label}>My Expertise</span>
                    <h2 className={styles.heading}>Business Outcomes, Not Just Code</h2>
                </div>

                <div className={styles.grid}>

                    {/* Outcome 1 */}
                    <div className={styles.serviceGroup}>
                        <h3>
                            <Bot size={28} />
                            Stop Wasting Hours
                        </h3>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <h4>Eliminate Repetitive Tasks</h4>
                                <p>AI-powered workflows that replace manual data entry, document handling, and reporting.</p>
                            </li>
                            <li className={styles.serviceItem}>
                                <h4>Tools Used</h4>
                                <p>Zapier, Make.com, OpenAI, Google Sheets</p>
                            </li>
                        </ul>
                    </div>

                    {/* Outcome 2 */}
                    <div className={styles.serviceGroup}>
                        <h3>
                            <FileText size={28} />
                            Zero Compliance Errors
                        </h3>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <h4>Automated Accuracy</h4>
                                <p>AI scans documents to match against tender requirements automatically. Never miss a detail.</p>
                            </li>
                            <li className={styles.serviceItem}>
                                <h4>Tools Used</h4>
                                <p>OCR, LLMs, Custom Python Scripts</p>
                            </li>
                        </ul>
                    </div>

                    {/* Outcome 3 */}
                    <div className={styles.serviceGroup}>
                        <h3>
                            <Globe size={28} />
                            Convert More Leads
                        </h3>
                        <ul className={styles.serviceList}>
                            <li className={styles.serviceItem}>
                                <h4>Sales-Ready Web Systems</h4>
                                <p>Fast, professional websites that build trust. Integrated directly with your CRM.</p>
                            </li>
                            <li className={styles.serviceItem}>
                                <h4>Tools Used</h4>
                                <p>Next.js, React, Tailwind, Supabase</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
