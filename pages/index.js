import Banner1 from "@/components/banner";
import ServiceCards from "@/components/cards";
import CaseStudies from "@/components/casestudies";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Partners from "@/components/partner";
import WorkingProcess from "@/components/working";

export default function Home() {
  return (
    <div className="bg-accent text-secondary font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Partners */}
      <Partners />

      {/* services Cards */}
      <ServiceCards />

      {/* banner1 */}
      <Banner1 />

      {/* banner2 */}
      <CaseStudies />

      {/* Working Process */}
      <WorkingProcess />

      {/* Contact Us */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
