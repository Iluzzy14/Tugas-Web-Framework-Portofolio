import experienceData from "../../dataMahasiswa.json"
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const getBadgeStyle = (type) => {
    switch (type?.toLowerCase()) {
      case "project":
        return "bg-green-100 text-green-700 border-green-200";
      case "internship":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "organization":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const sortedExperiences = experienceData.experiences?.sort((a, b) => {
    if (a.is_current === b.is_current) {
      return new Date(b.start_date) - new Date(a.start_date);
    }
    return a.is_current ? -1 : 1;
  }) || [];

  const getIconColor = (isCurrent) => {
    return isCurrent ? "bg-blue-500 text-white" : "bg-gray-200";
  };

  return (
    <>
    <div className="max-w-4xl mx-auto mb-10 px-4">
      <div className="border border-gray-200 bg-white rounded-lg shadow-lg pt-4 pr-4 pl-4 pb-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Experience</h2>
        <div className="relative">
          {/* Garis Vertikal Timeline */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {sortedExperiences.map((item) => (
              <div key={item.id} className="relative flex gap-6 items-start group">
                
                {/* Timeline Icon */}
                <div className="shrink-0 pt-1 relative z-10">
                  <div className={`w-12 h-12 ${getIconColor(item.is_current)} rounded-full flex items-center justify-center shadow-lg`}>
                    <Briefcase size={24}/>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  
                  {/* Header: Title & Organization */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium mt-1">
                        {item.organization}
                      </p>
                    </div>
                    
                    {/* Badge Type (Project/Internship) */}
                    <span className={`self-start text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${getBadgeStyle(item.experience_type)}`}>
                      {item.experience_type}
                    </span>
                  </div>

                  {/* Date Info */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-medium">
                    <Calendar size={14} />
                    <span>
                      {formatDate(item.start_date)} - {item.is_current ? "Present" : formatDate(item.end_date)}
                    </span>
                    
                    {item.is_current && (
                      <span className="text-blue-600 px-2 py-0.5 rounded-4xl text-[10px] font-bold border border-blue-300 ml-1">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    {item.description}
                  </p>

                  {/* Technologies Tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md border border-gray-200 hover:bg-gray-200 transition-colors mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}