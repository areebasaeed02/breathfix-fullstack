import React, { useEffect, useState } from "react";
import Register from "../components/Register";
import { Bars } from "react-loader-spinner";

const RegisterPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "Register - BreathFix";
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
        <Register />
      )}
    </>
  );
};

export default RegisterPage;
