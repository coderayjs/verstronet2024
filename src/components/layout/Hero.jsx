import React from "react";
import CustomButton from "../layout/CustomButton";

const Hero = () => {
  return (
    <main className="container mx-auto px-4 text-center mt-20">
      <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
        <p className="text-gray-300">
          Announcing our next round of funding.{" "}
          <CustomButton href="#" variant="secondary">
            Read more
          </CustomButton>
        </p>
      </div>

      <h1 className="text-5xl font-bold mb-4">
        Upgrade your IT skills <br />
        with <span className="text-blue-400">Verstronet</span>
      </h1>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Get access to the best instructors in the world. Learn from the best and
        stay ahead of the curve. We have created a platform that makes learning
        easier than ever.
      </p>

      <div className="space-x-4">
        <CustomButton>Get started</CustomButton>
        <CustomButton href="#" variant="secondary">
          Learn more
        </CustomButton>
      </div>
    </main>
  );
};

export default Hero;
