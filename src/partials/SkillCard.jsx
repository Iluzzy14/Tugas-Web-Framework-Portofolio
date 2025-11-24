import { Terminal, Code, Database } from "lucide-react";

const SkillCard = ({ isDarkMode, skills }) => {

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

    // Style berdasarkan tema
    const cardClass = isDarkMode ? "bg-gray-900/50 border-gray-700 hover:border-blue-300" : "bg-gray-50 border-gray-200 hover:border-gray-700";
    const iconBgClass = isDarkMode ? "bg-gray-500/50 border-gray-700" : "bg-white border-gray-200 shadow-sm";
    const textMainClass = isDarkMode ? "text-gray-100" : "text-gray-800";
    const textSubClass = isDarkMode ? "text-gray-400" : "text-gray-500";
    const trackClass = isDarkMode ? "bg-gray-700" : "bg-gray-200";

    return (
        <>
            {skills?.map((skill) => {
                const percentageFromLevel = getLevelPercentage(skill.level);
                const width = skill.proficiency ?? percentageFromLevel;

                return (
                    <div key={skill.id} className={`${cardClass} border rounded-xl p-5 transition-colors`}>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                        
                        {/* Icon */}
                        <div className={`p-2 rounded-lg border ${iconBgClass} flex items-center justify-center w-12 h-12`}>
                            <img 
                                src={skill.icon_url} 
                                alt={skill.name}
                                className="w-8 h-8 object-contain"
                            />
                        </div>

                        {/* Name & Experience */}
                        <div>
                            <h3 className={`font-semibold ${textMainClass}`}>
                            {skill.name}
                            </h3>
                            {skill.is_main && (
                            <p className={`text-xs ${textSubClass} mt-0.5`}>
                                {skill.years_of_experience ?? 0} years experience
                            </p>
                            )}
                        </div>
                        </div>

                        {/* Main Badge */}
                        {skill.is_main && (
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            isDarkMode 
                            ? "bg-blue-900/30 text-blue-300 border border-blue-800" 
                            : "bg-blue-100 text-blue-600 border border-blue-200"
                        }`}>
                            Main
                        </span>
                        )}
                    </div>

                    {/* Level & Percentage */}
                    <div className="mb-2 flex justify-between items-center">
                        <span className={`text-xs font-medium uppercase ${textSubClass}`}>
                        {skill.level}
                        </span>
                        <span className="text-xs font-bold text-blue-500">
                        {width}%
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className={`w-full rounded-full h-1.5 overflow-hidden ${trackClass}`}>
                        <div
                        className="bg-linear-to-r from-blue-600 to-cyan-500 h-1.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${width}%` }}
                        />
                    </div>
                    </div>
                );
            })}
        </>
    );
}

export default SkillCard;