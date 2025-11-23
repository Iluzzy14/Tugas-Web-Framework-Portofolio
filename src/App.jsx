import Profile from './components/Profile';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
        document.title = "Portofolio - Muhammad Zidni Khoirul Rizqi";
    }, []);
  return (
    <>
      <Profile />
      <Skills />
      <Experiences />
    </>
  );
}

export default App;
