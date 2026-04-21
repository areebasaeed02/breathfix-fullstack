import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/breathfix/backend/api/contactform.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
        console.log("Form Data Submitted:", formData);
        setFormData({
          name: "",
          email: "",
          gender: "",
          description: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error in Form Submission");
      console.log("Error ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-row justify-evenly mt-36 font-poppins px-16 py-16">
      <div className="mt-16 w-6/12">
        <h3 className="text-4xl font-semibold font-poppins">
          Get in Touch with COPD Experts for Support
        </h3>
        <p className="mt-16 text-sm">
          At the COPD Website, we prioritize your well-being by providing expert
          guidance and tailored support to help you navigate the challenges of
          Chronic Obstructive Pulmonary Disease (COPD). Whether you’re seeking
          information about managing symptoms, connecting with specialists, or
          accessing helpful resources, we are here to assist you every step of
          the way.
          <br />
          <br /> Our contact team is available to answer your questions, provide
          reliable advice, and connect you with the tools and knowledge you need
          to lead a healthier and more comfortable life. We understand that
          every journey is unique, and our mission is to offer compassionate,
          personalized assistance that meets your individual needs.
          <br />
          <br /> Feel free to reach out to us through our contact form, email,
          or phone. Let’s work together to improve your quality of life and
          achieve better respiratory health. At the COPD Website, you are never
          alone in your journey
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Contact Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  checked={formData.gender === "Male"}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  checked={formData.gender === "Female"}
                  className="mr-2"
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  checked={formData.gender === "Other"}
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter your message or description"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
