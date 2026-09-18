import React from "react";

export default function YourStack({ selectedStack, onRemove }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-6">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">Your Stack</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                    {selectedStack.length}
                </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
                {selectedStack.length === 0 ? "No technologies selected yet." : "Selected technologies:"}
            </p>

            {selectedStack.length === 0 ? (
                <div className="mt-6 border border-dashed border-gray-200 rounded-xl p-8 flex items-center justify-center text-center">
                    <span className="text-xs text-gray-400">Your stack is empty.</span>
                </div>
            ) : (
                <div className="mt-4 space-y-2.5">
                    {selectedStack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs"
                        >
                            <div className="flex items-center space-x-2">
                                <span>{item.icon}</span>
                                <span className="font-semibold text-gray-800">{item.name}</span>
                            </div>
                            <button
                                onClick={() => onRemove(item)}
                                className="text-gray-400 hover:text-red-500 font-bold px-1"
                            >
                                {/* ✕ */}
                                if you are not interested please 'delete'
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}