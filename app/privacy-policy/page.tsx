import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function PrivacyPolicy() {
    return (
        <main>
            <Header />
            <div className={styles.main} style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ marginBottom: "20px" }}>Privacy Policy</h1>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section style={{ marginTop: "30px" }}>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Prabhat World. We are committed to protecting your personal information and your right to privacy.
                        If you have any questions or concerns about our policy, or our practices with regards to your personal information,
                        please contact us at contact@prabhatworld.tech.
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>2. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information
                        about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Website for a variety of business purposes described below.
                        We process your personal information for these purposes in reliance on our legitimate business interests,
                        in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>4. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at contact@prabhatworld.tech.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
