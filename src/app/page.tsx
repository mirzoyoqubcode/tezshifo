import Application from "@/components/Application/Application";
import Convenience from "@/components/Convenience/Convenience";
import FaqSection from "@/components/FaqSection/FaqSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Possibilities from "@/components/Possibilities/Possibilities";
import Presentation from "@/components/Presentation/Presentation";
import Services from "@/components/Services/Services";
import React from "react";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Services />
      <Convenience />
      <Presentation />
      <Possibilities />
      <Application />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Home;
