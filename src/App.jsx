import Profile from './components/Profile';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Navbar from './partials/navbar';
import Footer from './partials/footer';
import ScrollToTop from './partials/ScrollToTop';
import { useEffect, useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    document.title = "Portofolio - Muhammad Zidni Khoirul Rizqi";
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <>
      <div className={`min-h-screen font-sans selection:bg-blue-500/30 transition-colors duration-300 ${isDarkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="pt-6">
          <Profile isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Experiences isDarkMode={isDarkMode} />
        </main>
        <Footer isDarkMode={isDarkMode} />
        <ScrollToTop isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
