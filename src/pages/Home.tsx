import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Education from "@/components/sections/Education";
import Reviews from "@/components/sections/Reviews";
import Contacts from "@/components/sections/Contacts";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Education />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
