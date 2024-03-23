import Image from "next/image";
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-withe shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Warden Tech-Secure</div>
        </div>
      </header>
      <main className="flex-grow"></main>
    </div>
  );
}
