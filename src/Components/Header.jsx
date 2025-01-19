import { useState } from "react";
import { Link } from "react-router-dom";
import QuickCVForm from "./QuickCVForm";

const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to toggle the pop-up form
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle form function
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <header className="pt-6 md:py-8 md:px-6 px-4 font-poppins bg-transparent fixed w-full top-0 left-0 z-50 backdrop-blur-md border-b border-slate-500">
      <div className="max-w-screen mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-2xl">
          RecruitmentHub 365
        </Link>

        <div className="flex items-center justify-center space-x-10 font-semibold">
          <nav className="hidden md:flex space-x-6 md:gap-x-4 text-white">
            <Link to="/about" className="hover:text-green-500">
              ABOUT US
            </Link>
            <Link to="/jobs" className="hover:text-green-500">
              JOBS
            </Link>
            <Link to="/employers" className="hover:text-green-500">
              EMPLOYERS
            </Link>
            <Link to="/insights" className="hover:text-green-500">
              INSIGHTS
            </Link>
            <Link to="/contact" className="hover:text-green-500">
              CONTACT
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={toggleForm}
              className="bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white px-5 py-1 rounded-full font-semibold hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] transition"
            >
              QUICK CV DROP
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden transition-all duration-300 ease-in-out bg-[#1e2a2f] text-white font-medium py-4 px-6 space-y-4 overflow-hidden flex flex-col`}
      >
        <a to="/about" className="hover:text-green-500">
          ABOUT US
        </a>
        <a to="/jobs" className="hover:text-green-500">
          JOBS
        </a>
        <a to="/candidates" className="hover:text-green-500">
          CANDIDATES
        </a>
        <a to="/employers" className="hover:text-green-500">
          EMPLOYERS
        </a>
        <a to="/sectors" className="hover:text-green-500">
          SECTORS
        </a>
        <a to="/insights" className="hover:text-green-500">
          INSIGHTS
        </a>
        <a to="/contact" className="hover:text-green-500">
          CONTACT
        </a>
      </div>

      {/* Pop-Up Form */}
      <QuickCVForm isVisible={isFormOpen} onClose={toggleForm} />
    </header>
  );
};

export default Header;
