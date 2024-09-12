import React from "react";
import CustomButton from "./CustomButton";
import verstronet from "../../assets/verstronet.png";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={verstronet}
          height={30}
          width={30}
          alt="Verstronet logo"
          className="mr-4"
        />
      </div>
      <nav className="hidden md:flex space-x-6">
        {["Home", "Classes", "Features", "Pricing", "Company"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-300 hover:text-white transition duration-300">
            {item}
          </a>
        ))}
      </nav>
      <CustomButton href="#" variant="secondary">
        Log in
      </CustomButton>
    </header>
  );
};

export default Header;
