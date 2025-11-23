import { useEffect } from "react";
import skillsData from "../../dataMahasiswa.json"

export default function Skills() {

const getLevelPercentage = (level = "") => {
    const l = (level || "").toLowerCase();
    switch (l) {
        case "advanced":
        case "expert":
            return 100;
        case "intermediate":
            return 66;
        case "beginner":
        case "basic":
            return 33;
        default:
            return 0;
    }
};

    const skills = skillsData?.skills ?? [];

    return (
        <>
        <div className="max-w-4xl mx-auto mb-6 px-4">
            <div className="border border-gray-200 bg-white rounded-lg shadow-lg pt-4 pr-4 pl-4 pd-5">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-6">
                    {skills.map((skill) => {
                        const percentageFromLevel = getLevelPercentage(skill.level);
                        const width = skill.proficiency ?? percentageFromLevel;

                        return (
                        <div key={skill.id} className="border border-gray-200 bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={skill.icon_url} 
                                        alt={skill.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                                        {skill.is_main && (
                                            <p className="text-sm text-gray-600">{skill.years_of_experience ?? 0} years experience</p>
                                        )}
                                    </div>
                                </div>
                                {skill.is_main && (
                                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Main
                                    </span>
                                )}
                            </div>
                            <div className="mb-2 flex justify-between items-center">
                                <span className="text-sm text-gray-600">{skill.level}</span>
                                <span className="text-sm text-gray-600">{width}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${width}%` }}
                                ></div>
                            </div>
                        </div>
                        );
                    })}
                    </div>
            </div>
        </div>
    </>
    );
}