import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Services from "@/components/Services";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import NotForYou from "@/components/NotForYou";
import VisualBreak from "@/components/VisualBreak";
import HowItWorks from "@/components/HowItWorks";
import Work from "@/components/Work";
import TrustBio from "@/components/TrustBio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemStatement />
      <WhoIWorkWith />
      <NotForYou />
      <Services />
      <VisualBreak />
      <HowItWorks />
      <Work />
      <TrustBio />
      <ContactForm />
      <Footer />
      <LeadPopup />
    </main>
  );
}
