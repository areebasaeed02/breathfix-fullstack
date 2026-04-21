import React, { useState } from "react";
import toast from "react-hot-toast";

const Email = () => {
  const [sub, setsub] = useState({
    email: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/breathfix/backend/api/email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sub),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
        setsub({email:''});
      } else if (data.status === "error") {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <section className="mt-36 mb-16 text-center font-poppins">
        <h1 className="text-5xl font-medium">Subscribe To Our NewsLetter</h1>
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col">
            <input
              placeholder="email address"
              name="email"
              className="px-6 w-6/12 bg-gray-100 text-black h-12 mt-8 border border-black rounded-lg mx-auto"
              value={sub.email}
              onChange={(e) => setsub({ ...sub, email: e.target.value })}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-16 rounded-lg shadow-md w-fit mx-auto mt-8 text-lg"
              type="submit"
            >
              subscribe
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Email;
