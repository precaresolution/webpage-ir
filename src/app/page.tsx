import Hero from "@/components/Hero";
import Company from "@/components/Company";
import History from "@/components/History";
// import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <History />
      {/* <Solutions /> */}
      <Partners />
      <Contact />
    </>
  );
}
