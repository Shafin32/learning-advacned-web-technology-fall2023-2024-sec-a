'use client'
import { useRouter } from "next/navigation"
import React from "react";

export const Back = () =>{
    const router = useRouter();
    return (
        <button
          id="backBtn"
          onClick={() => router.back()}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Back
        </button>
      );
}