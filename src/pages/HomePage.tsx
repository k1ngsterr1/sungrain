import React, { useEffect, useState } from "react";

import MainScreen from "@widgets/Main";
import AboutScreen from "@widgets/About";
import Products from "@widgets/Products";
import Contacts from "@widgets/Contacts";
import Header from "@features/Header";

const HomePage = () => {
  const [scrollOpacity, setScrollOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll: number =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage: number = window.scrollY / maxScroll;
      const coefficient: number = 12;
      setScrollOpacity(percentage * coefficient);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ backgroundColor: `rgba(26, 38, 43, ${scrollOpacity})` }}>
      <Header />
      <MainScreen />
      <AboutScreen />
      <Products />
      <Contacts />
    </div>
  );
};

export default HomePage;
