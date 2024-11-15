import { Text, Img } from "./..";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const navigate = useNavigate();

  // Function to handle navigation and scroll
  const handleNavigation = (path, hash) => {
    if (window.location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage first
      navigate("/");
      // Use a timeout to wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    } else {
      scrollToSection(hash);
    }
  };

  // Function to scroll to a specific section
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center mt-2.5 gap-5 mx-[100px] md:mx-0`}
    >
      <Img src="images/img_header_logo.png" alt="Logo Image" className="h-[60px] w-[208px] object-contain" />
      <ul className="flex flex-wrap gap-10">
        <li>
          <button onClick={() => handleNavigation("/", "#about_us")} className="text-[20px] font-normal text-black-900">
            About us
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/", "#Why_us")} className="text-[20px] font-normal text-black-900">
            Why us
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/appeal")} className="text-[20px] font-normal text-black-900">
            Appeal
          </button>
        </li>
      </ul>
    </header>
  );
}
