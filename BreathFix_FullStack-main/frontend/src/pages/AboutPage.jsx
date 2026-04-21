import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Bars } from "react-loader-spinner";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonial";
import Email from "../components/Email";
import ContactForm from "../components/ContactForm";

const AboutPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "About - BreathFix";
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
          <ContactForm />
          <Testimonials />
          <Email />
          <Footer />
        </>
      )}
    </>
  );
};

export default AboutPage;