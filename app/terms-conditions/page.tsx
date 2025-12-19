import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function TermsAndConditions() {
    return (
        <main>
            <Header />
            <div className={styles.main} style={{ padding: "100px 20px", maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ marginBottom: "20px" }}>Terms and Conditions</h1>
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section style={{ marginTop: "30px" }}>
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms and Conditions constitute a legally binding agreement between you, whether personally or on behalf of an entity (“you”) and Prabhat World (“we,” “us” or “our”), concerning your access to and use of the prabhatworld.tech website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                    </p>
                </section>

                <section style={{ marginTop: "20px" }}>
                    <h2>4. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: contact@prabhatworld.tech
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
