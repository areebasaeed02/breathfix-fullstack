import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Bars } from "react-loader-spinner";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonial";
import Email from "../components/Email";
import Services from "../components/Services";

const HomePage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "Home - MediaX";
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen items-center">
          <Bars
            height="80"
            width="80"
            color="blue"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Services />
          <Testimonials />
          <Email />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
