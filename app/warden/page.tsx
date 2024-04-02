import React from "react";

const Warden = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <title>Warden</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
    </div>
  );
};

export default Warden;
