import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // menampilkan Button saat di scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${
        isDarkMode 
          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/50" 
          : "bg-white hover:bg-gray-50 text-blue-600 shadow-gray-400/50 border border-gray-200"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};
export default ScrollToTop;