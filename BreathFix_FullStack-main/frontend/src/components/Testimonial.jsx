import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is the best service I have ever used. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Amazing experience! The team was very professional.",
    rating: 4.0,
  },
  {
    name: "Michael Johnson",
    feedback: "A wonderful and smooth process from start to finish.",
    rating: 4.3,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="bg-gray-100 py-10 mt-36">
        <div className="container mx-auto px-4 font-poppins">
          <h2 className="text-center text-5xl font-medium text-black mb-6">
            Testimonials
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg"
              >
                <p className="text-gray-600 text-lg italic text-center">
                  "{testimonial.feedback}"
                </p>
                <div className="mt-4 text-yellow-500 text-center">
                  {"⭐".repeat(Math.floor(testimonial.rating))}
                  {testimonial.rating % 1 !== 0 && "★"}
                </div>
                <h4 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
