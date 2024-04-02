import React from "react";
import { FaFacebook, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const MiWarden = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <title>Mi Warden</title>
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/img/banner.png"
            alt="Warden Tech-Secure"
            className="w-48"
          />
        </div>
      </header>
      <br />
      <br />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-black">
              <span className="text-green-500">Warden </span>Tech-Secure
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebook color="green" className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle color="green" className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">O usa tu cuenta de email</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-green-700 bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="text-green-700 bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* sign in section*/}
          <div className="w-2/3 bg-green-500 rounded-tr-2xl rounded-br-2l py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">¡Hola!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Encuentra todo sobre tu guardian personal</p>
            <a
              href="./registro"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Registrarse
            </a>
          </div>{" "}
          {/* Sign up section */}
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MiWarden;
