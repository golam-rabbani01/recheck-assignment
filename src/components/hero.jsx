import React from "react";
import logo from '../assets/banner-stack.png'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Build Your Ideal <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-600">
                        Development Stack
                    </span>
                </h1>
                <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                    <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white font-medium text-sm px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
                        Explore Technologies
                    </button>
                    <button className="bg-white border border-gray-200 text-gray-700 font-medium text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 bg-linear-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition duration-500">

                    <img src={logo} alt="" />
                </div>
            </div>
        </section>
    );
}