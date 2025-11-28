import { Cpu } from "lucide-react";
import SkillCard from "./SkillCard";
import dataMahasiswa from "../../data/dataMahasiswa.json";

const Skills = ({ isDarkMode }) => {
  // Theme Styles
  const containerClass = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";
  const titleClass = isDarkMode ? "text-white" : "text-gray-800";
  const skills = dataMahasiswa.skills;

  const cardClass = isDarkMode
    ? "bg-gradient-to-r from-blue-900 to-slate-900 border-blue-800/50"
    : "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/20";

  return (
    <section id="skills" className="max-w-7xl mx-auto scroll-mt-25">
      <div className={`${cardClass} border rounded-2xl shadow-xl p-6 transition-colors duration-300`}>
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="text-blue-500" size={24} />
          <h2 className={`text-xl font-bold ${titleClass}`}>Skills & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Memanggil SkillCard */}
          <SkillCard isDarkMode={isDarkMode} skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;