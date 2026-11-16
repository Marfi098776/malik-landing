import About from "@/components/About";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinCTA from "@/components/JoinCTA";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Timeline />
      <Testimonials />
      <Partners />
      <News />
      <JoinCTA />
      <Footer />
    </>
  );
}
