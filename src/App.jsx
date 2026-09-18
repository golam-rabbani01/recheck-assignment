

import Footer from "./components/Footer";
import React, { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import TechCard from "./components/card";
import YourStack from "./components/stuck";
import { technologies } from "./data/tech";


export default function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const toggleStack = (tech) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    } else {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <Hero />
      <footer />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Explore the <span className="text-pink-600">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={selectedStack.some((item) => item.id === tech.id)}
                onToggle={toggleStack}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <YourStack selectedStack={selectedStack} onRemove={toggleStack} />
          </div>
        </div>
        <Footer />
      </section>

    </div>

  );
}


