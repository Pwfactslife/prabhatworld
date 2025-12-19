import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function TermsAndConditions() {
    return (
        <main>
            <Header />
            <div className={styles.main} style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
                <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Terms and Conditions</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", opacity: 0.8 }}>
                    By using PrabhatWorld.tech, you agree to the following terms. Please read them carefully.
                </p>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>1. Services</h2>
                    <p>PrabhatWorld provides:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>AI automation services</li>
                        <li>Business workflow solutions</li>
                        <li>Web development and related consulting</li>
                    </ul>
                    <p>All services are provided based on mutual agreement, scope, and timelines discussed individually.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>2. Use of Website</h2>
                    <p>You agree not to:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Misuse this website</li>
                        <li>Attempt to access restricted areas</li>
                        <li>Copy or reuse content without permission</li>
                    </ul>
                    <p>The website is intended for informational and business communication purposes only.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>3. No Guaranteed Results</h2>
                    <p>While we aim to deliver practical and effective solutions:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Results may vary based on business processes and implementation</li>
                        <li>We do not guarantee specific financial or operational outcomes</li>
                    </ul>
                    <p>Automation improves efficiency but does not replace sound business decisions.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>4. Intellectual Property</h2>
                    <p>
                        All content on this website — including text, visuals, and branding — belongs to PrabhatWorld unless stated otherwise.
                        You may not reproduce or redistribute content without written permission.
                    </p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>5. Payments & Agreements</h2>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Pricing, timelines, and deliverables are discussed and agreed upon before starting any project</li>
                        <li>Payments, if applicable, are governed by individual agreements or invoices</li>
                        <li>No service is considered active unless confirmed by both parties</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>6. Limitation of Liability</h2>
                    <p>PrabhatWorld is not liable for:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Business losses</li>
                        <li>Data loss due to external factors</li>
                        <li>Issues arising from third-party tools or platforms</li>
                    </ul>
                    <p>We focus on best practices, but final responsibility remains with the business owner.</p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
