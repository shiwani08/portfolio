"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* Icon Container */}
      <div className="text-6xl text-blue-600 mb-6">
        <FontAwesomeIcon icon={faHammer} bounce />
      </div>

      {/* Text Content */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Page is in development
        </h2>
        <div className="text-lg text-gray-600 max-w-md mx-auto">
          Work in progress!
        </div>
      </div>

      {/* Simple Button */}
      <button
        onClick={() => router.push("/")}
        className="mt-8 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
      >
        Back to Home
      </button>
    </main>
  );
}