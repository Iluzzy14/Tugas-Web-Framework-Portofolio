import { useEffect } from "react";
import dataMahasiswa from "../../dataMahasiswa.json"
import { 
  Terminal,
  Cpu,
} from "lucide-react";
const Skills = ({ isDarkMode }) => {
    const getLevelPercentage = (level = "") => {
        const l = (level || "").toLowerCase();
        switch (l) {
            case "advanced":
            case "expert": return 100;
            case "intermediate": return 66;
            case "beginner":
            case "basic": return 33;
            default: return 0;
        }
    };

    const skills = dataMahasiswa?.skills ?? [];

    // Theme Styles
    const containerClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";
    const titleClass = isDarkMode ? "text-white" : "text-gray-800";
    const cardClass = isDarkMode ? "bg-gray-900/50 border-gray-700 hover:border-gray-600" : "bg-gray-50 border-gray-200 hover:border-blue-300";
    const iconBgClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200 shadow-sm";
    const textMainClass = isDarkMode ? "text-gray-100" : "text-gray-800";
    const textSubClass = isDarkMode ? "text-gray-400" : "text-gray-500";
    const trackClass = isDarkMode ? "bg-gray-700" : "bg-gray-200";

    return (
        <section id="skills" className="max-w-4xl mx-auto mb-8 px-4 scroll-mt-20">
            <div className={`${containerClass} border rounded-2xl shadow-xl p-6 transition-colors duration-300`}>
                <div className="flex items-center gap-3 mb-6">
                    <Cpu className="text-blue-500" size={24} />
                    <h2 className={`text-xl font-bold ${titleClass}`}>Skills & Expertise</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill) => {
                        const percentageFromLevel = getLevelPercentage(skill.level);
                        const width = skill.proficiency ?? percentageFromLevel;
                        const Icon = skill.icon_comp || Terminal; 

                        return (
                            <div key={skill.id} className={`${cardClass} border rounded-xl p-5 transition-colors`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg border ${iconBgClass}`}>
                                            <img 
                                                src={skill.icon_url} 
                                                alt={skill.name}
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold ${textMainClass}`}>{skill.name}</h3>
                                            {skill.is_main && (
                                                <p className={`text-xs ${textSubClass} mt-0.5`}>{skill.years_of_experience ?? 0} years experience</p>
                                            )}
                                        </div>
                                    </div>
                                    {skill.is_main && (
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${isDarkMode ? "bg-blue-900/30 text-blue-300 border border-blue-800" : "bg-blue-100 text-blue-600 border border-blue-200"}`}>
                                            Main
                                        </span>
                                    )}
                                </div>
                                <div className="mb-2 flex justify-between items-center">
                                    <span className={`text-xs font-medium uppercase ${textSubClass}`}>{skill.level}</span>
                                    <span className="text-xs font-bold text-blue-500">{width}%</span>
                                </div>
                                <div className={`w-full rounded-full h-1.5 overflow-hidden ${trackClass}`}>
                                    <div
                                        className="bg-linear-to-r from-blue-600 to-cyan-500 h-1.5 rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${width}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;