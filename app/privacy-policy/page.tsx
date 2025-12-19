import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function PrivacyPolicy() {
    return (
        <main>
            <Header />
            <div className={styles.main} style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
                <h1 style={{ marginBottom: "20px", fontSize: "2rem", fontWeight: "bold" }}>Privacy Policy</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", opacity: 0.8 }}>
                    At PrabhatWorld.tech, your privacy matters. This page explains what information we collect, why we collect it, and how we use it — in simple terms.
                </p>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>1. Information We Collect</h2>
                    <p>We only collect information that helps us communicate with you or provide our services.</p>
                    <p style={{ marginTop: "10px" }}>This may include:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Your name</li>
                        <li>Email address or WhatsApp number</li>
                        <li>Business type</li>
                        <li>Details you share about your workflow or automation needs</li>
                    </ul>
                    <p>We collect this information when you:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px" }}>
                        <li>Fill out a contact form</li>
                        <li>Request a free automation audit</li>
                        <li>Contact us via WhatsApp or email</li>
                    </ul>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>2. How We Use Your Information</h2>
                    <p>We use your information only to:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Respond to your inquiry</li>
                        <li>Understand your business requirements</li>
                        <li>Provide automation or web-related services</li>
                        <li>Improve our website and offerings</li>
                    </ul>
                    <p><strong>We do not sell, rent, or trade your personal data.</strong></p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>3. Cookies & Analytics</h2>
                    <p>We may use basic analytics tools (such as Google Analytics) to understand:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Which pages are visited</li>
                        <li>How users interact with the site</li>
                    </ul>
                    <p>This data is anonymous and used only to improve performance and user experience.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>4. Data Storage & Security</h2>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Your data is stored securely</li>
                        <li>Access is limited and protected</li>
                        <li>We take reasonable steps to prevent unauthorized access</li>
                    </ul>
                    <p>However, no online system is 100% secure, and we cannot guarantee absolute security.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>5. Third-Party Services</h2>
                    <p>We may use trusted third-party services for:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Email communication</li>
                        <li>Form handling</li>
                        <li>Analytics</li>
                    </ul>
                    <p>These services only receive the information required to perform their function and are expected to follow standard data protection practices.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                        <li>Ask what data we hold about you</li>
                        <li>Request correction or deletion of your data</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                    <p>To do this, simply contact us.</p>
                </section>

                <section style={{ marginBottom: "30px" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>7. Contact Information</h2>
                    <p>If you have questions about this policy, you can contact us at:</p>
                    <p style={{ marginTop: "10px" }}>
                        📧 Email: contact@prabhatworld.tech<br />
                        🌐 Website: prabhatworld.tech
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
