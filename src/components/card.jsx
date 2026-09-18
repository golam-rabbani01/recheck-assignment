import React from "react";

export default function TechCard({ tech, isAdded, onToggle }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl">{tech.icon}</span>
                    {tech.badge && (
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tech.badgeColor}`}>
                            {tech.badge}
                        </span>
                    )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mt-3">{tech.name}</h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{tech.description}</p>
            </div>

            <div className="mt-6">
                <div className="flex items-center justify-between text-[11px] text-gray-400 mb-4 font-medium">
                    <span>{tech.category}</span>
                    <span>{tech.level}</span>
                    <span className="text-amber-550   font-boldold"> {tech.rating}</span>
                </div>

                <button
                    onClick={() => onToggle(tech)}
                    className={`w-full text-xs font-semibold py-2.5 rounded-xl transition ${isAdded
                        ? "bg-green-500 text-rose-600 border border-rose-200 hover:bg-rose-100"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                >
                    {isAdded ? "Remove from Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
}