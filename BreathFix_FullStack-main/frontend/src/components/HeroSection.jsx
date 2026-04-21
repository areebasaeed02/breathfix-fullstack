import React from "react";
import heroimage from "../images/heroimage.png";
import heart from "../images/heart.png";
import eyes from "../images/eyes.png";
import lungs from "../images/lungs.png";
import ovaries from "../images/ovaries.png";
import stomach from "../images/stomach.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import sign from "../images/sign.svg";

const HeroSection = () => {
  return (
    <>
      <div className="font-poppins mt-16 px-4 py-10 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-7xl font-bold text-gray-800 mb-5 font-poppins">
              Caring For <span className="text-blue-500">Health</span> Caring
              For You
            </h1>
            <p
              className="text-gray-600 mb-6 font-poppins"
              style={{ width: "85%" }}
            >
              <span className="font-semibold">
                {" "}
                Chronic Obstructive Pulmonary Disease (COPD){" "}
              </span>{" "}
              is a progressive lung condition that obstructs airflow, making it
              difficult to breathe. A brief statement outlining the purpose and
              mission of the clinic. This can include the commitment to patient
              care, community health.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-16 rounded shadow-md">
              Learn More
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <img
              src={heroimage}
              alt="COPD Illustration"
              className="w-full h-auto border rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <section className="mt-16 text-center font-poppins">
        <div>
          <h1 className="text-5xl font-medium">Centers of Excellence</h1>
          <p className="mt-1">The best clinical talent and skills</p>
        </div>
        <div className="flex flex-row justify-evenly mt-16">
          <div className="flex flex-col justify-center">
            <img
              src={eyes}
              title="Opthamology"
              alt="eye pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Opthamology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={heart}
              title="Cardiology"
              alt="heart pic"
              className="w-16 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">Cardiology</caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={lungs}
              title="Pulmonology"
              alt="lungs pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Pulmonology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={ovaries}
              title="Gynaecology"
              alt="ovi pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Gynaecology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={stomach}
              title="Gastroentology"
              alt="stomach pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Gastroentology
            </caption>
          </div>
        </div>
      </section>
      <section className="font-poppins mt-36 text-center">
        <div className="flex flex-row justify-center">
          <img src={sign} alt="sign" className="mr-2" />
          <h3 className="text-blue-700 font-semibold text-2xl">Discover Doctors</h3>
        </div>
        <h1 className="text-5xl font-medium">Meet Our Medical Specialist</h1>
        <div className="flex flex-row justify-center mt-16 px-16">
          <div>
            <img
              src={one}
              alt="dr. pic"
              className="mx-auto rounded-xl"
              style={{ width: "90%", height: "85%" }}
            />
            <p className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold py-2 px-16 rounded shadow-md w-fit mx-auto mt-8">
              Dr. Twanda Costos
            </p>
          </div>
          <div>
            <img
              src={two}
              alt="dr. pic"
              className="mx-auto rounded-xl"
              style={{ width: "90%", height: "85%" }}
            />
            <p className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold py-2 px-16 rounded shadow-md w-fit mx-auto mt-8">
              Dr. Nell Domron
            </p>
          </div>
          <div>
            <img
              src={three}
              alt="dr. pic"
              className="mx-auto rounded-xl"
              style={{ width: "90%", height: "85%" }}
            />
            <p className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold py-2 px-16 rounded shadow-md w-fit mx-auto mt-8">
              Dr. Roy Nawakosko
            </p>
          </div>
          <div>
            <img
              src={four}
              alt="dr. pic"
              className="mx-auto rounded-xl"
              style={{ width: "90%", height: "85%" }}
            />
            <p className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold py-2 px-16 rounded shadow-md w-fit mx-auto mt-8">
              Dr. Jerry Roy
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
