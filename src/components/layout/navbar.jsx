import { useState } from "react";
import { 
  Menu, 
  X,
  Sun,
  Moon
} from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme }) => {

  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = isDarkMode 
    ? "text-gray-300 hover:text-white hover:bg-gray-800"
    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100";

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); 
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"}`}>
      <div className="w-full md:w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo clicks scroll to top smoothly */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-bold bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              ZidniKR
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <a href="#profile" 
                onClick={(e) => handleNavClick(e, 'profile')}
                className={`${navLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Profile
              </a>
              <a href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                className={`${navLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Skills
              </a>
              <a href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')}
                className={`${navLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Experience
              </a>
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-b transition-colors duration-300 ${isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#profile" onClick={(e) => handleNavClick(e, 'profile')} className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkClass}`}>Profile</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkClass}`}>Skills</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={`block px-3 py-2 rounded-md text-base font-medium ${navLinkClass}`}>Experience</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;