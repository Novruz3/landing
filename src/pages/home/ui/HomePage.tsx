import Contact from "@/src/widgets/contact/ui/Contact";
import Features from "@/src/widgets/features/ui/Features";
import Header from "@/src/widgets/header/ui/Header";
import Hero from "@/src/widgets/hero/ui/Hero";
import Programs from "@/src/widgets/programs/ui/Programs";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
