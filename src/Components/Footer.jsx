import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Mission */}
          <div className="md:col-span-2">
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering job seekers with AI-powered resume optimization and interview preparation tools.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ATS Analyzer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interview Practice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mock Interview</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Email: prepmate@gmail.com</p>
            <div className="flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5m0 0L2.25 6.75m9.75 6.5v6.5"
                />
              </svg>
              <p className="text-gray-300">prepmate@gmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-2">Follow us</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={30} className="hover:text-blue-500 cursor-pointer" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={30} className="hover:text-pink-500 cursor-pointer" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube size={30} className="hover:text-red-500 cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Stay connected with us on social media
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PrepMate AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
