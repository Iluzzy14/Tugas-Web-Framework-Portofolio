import dataMahasiswa from "../../data/dataMahasiswa.json";
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";

const Experience = ({ isDarkMode }) => {
  const sortedExperiences =
    dataMahasiswa.experiences?.sort((a, b) => {
      if (a.is_current === b.is_current) {
        return new Date(b.start_date) - new Date(a.start_date);
      }
      return a.is_current ? -1 : 1;
    }) || [];

  // Theme Styles
  const containerClass = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";
  const titleClass = isDarkMode ? "text-white" : "text-gray-800";
  const lineClass = isDarkMode ? "bg-gray-700" : "bg-gray-200";

  return (
    <section id="experience" className="max-w-7xl mx-auto mb-6 mt-19 scroll-mt-25">
      <div className={`${containerClass} border rounded-2xl shadow-xl p-6 transition-colors duration-300`}>
        {/* {Tittle Contenent} */}
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-blue-500" size={24} />
          <h2 className={`text-xl font-bold ${titleClass}`}>Experience Timeline</h2>
        </div>

        <div className="relative pl-2">
          {/* Vertical Line */}
          <div className={`absolute left-[35px] top-4 bottom-4 w-0.5 ${lineClass}`}></div>
          <div className="space-y-8">
            <ExperienceCard isDarkMode={isDarkMode} SortExperiences={sortedExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;