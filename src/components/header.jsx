
// import logo from '../assets/logo-text.png'
// const nav = () => {
//     return (
//         <nav className='bg-red-100 '>
//             <div className='container mx-auto flex justify-between  '>
//                 <img className='w-10 h-8 object-contain' src={logo} alt="" />
//                 <ul className='flex gap-4 items-center mx-auto'>
//                     <li>Home</li>
//                     <li>Techonologies</li>
//                     <li>Projrcts</li>
//                     <li>About</li>
//                     <li>Contract</li>
//                 </ul>

//                 <div className='flex gap-2 justify-items-end'>
//                     <button className="btn btn-error">sign In</button>
//                     <button className="btn btn-outline btn-error">sign Up</button>

//                 </div>



//             </div>
//         </nav>

//     );
// };

// export default nav;

import React from "react";

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-linear-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
                    DS
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">DevStack</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                <a href="#" className="text-pink-600 font-semibold">Home</a>
                <a href="#" className="hover:text-gray-900 transition">Technologies</a>
                <a href="#" className="hover:text-gray-900 transition">Projects</a>
                <a href="#" className="hover:text-gray-900 transition">About</a>
                <a href="#" className="hover:text-gray-900 transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign In</a>
                <a href="#" className="text-sm font-medium bg-linear-to-r from-pink-500 to-rose-500 text-white px-5 py-2.5 rounded-full hover:opacity-90 shadow-sm transition">
                    Sign Up
                </a>
            </div>
        </header>
    );
}