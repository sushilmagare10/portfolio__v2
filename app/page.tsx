"use client";

import { navItems } from "@/data";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
