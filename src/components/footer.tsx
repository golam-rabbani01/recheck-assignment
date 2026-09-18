import logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About */}
                    <div>
                        <img src={logo} alt="" />

                        <h2 className="text-2xl font-bold mb-4">My Website</h2>
                        <p className="text-gray-200">
                            curated tools,techonologies and resources for devolopers building modern software
                        </p>
                    </div>


                    {/* quicklink */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-500">Home</a></li>
                            <li><a href="#" className="hover:text-red-500">About</a></li>
                            <li><a href="#" className="hover:text-blue-800">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Email: bh4269138@gmail.com</p>
                        <p className="text-gray-400 mt-2">Phone: +880 1883934266</p>
                        <p className="text-gray-400 mt-2">Dhaka</p>
                    </div>

                </div>

                {/* Copyright  */}
                <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
                    <p>© 2026 My Website. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;