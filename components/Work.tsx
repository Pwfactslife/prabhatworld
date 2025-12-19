import Link from 'next/link';
import Image from 'next/image';
import styles from './Work.module.css';

export default function Work() {
    const projects = [
        {
            title: "JDS Safe Guard",
            desc: "Complete website overhaul and internal workflow setup for a security firm, improving client communication and staff management.",
            tags: ["Website", "Workflow Automation"],
            image: "/projects/jds.png"
        },
        {
            title: "The PB Wealth",
            desc: "Designed and built a professional business website to establish digital presence and structure service offerings.",
            tags: ["Business Website", "SEO"],
            image: "/projects/pbwealth.png"
        },
        {
            title: "Prompts99",
            desc: "Platform setup and web solution for an AI resource hub. Implemented scalable architecture for future growth.",
            tags: ["Platform Setup", "Web Solution"],
            image: "/projects/prompts99.png"
        }
    ];

    return (
        <section id="work" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Real Businesses. Real Systems.</h2>
                <p className={styles.subheading}>These are not demos — these are production systems used daily.</p>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.desc}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
