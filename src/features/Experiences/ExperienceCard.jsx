import { Briefcase, Calendar } from "lucide-react";

const ExperienceCard = ({ isDarkMode, SortExperiences }) => {
  // FormatDate
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  // Badge Style based on experience type
  const getBadgeStyle = (type) => {
    const t = type?.toLowerCase();
    if (isDarkMode) {
      switch (t) {
        case "project":
          return "bg-emerald-900/30 text-emerald-300 border-emerald-800";
        case "internship":
          return "bg-blue-900/30 text-blue-300 border-blue-800";
        case "organization":
          return "bg-purple-900/30 text-purple-300 border-purple-800";
        default:
          return "bg-gray-800 text-gray-300 border-gray-700";
      }
    } else {
      switch (t) {
        case "project":
          return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "internship":
          return "bg-blue-50 text-blue-700 border-blue-200";
        case "organization":
          return "bg-purple-50 text-purple-700 border-purple-200";
        default:
          return "bg-gray-100 text-gray-700 border-gray-200";
      }
    }
  };
  // Icon Color based on current status
  const getIconColor = (isCurrent) => {
    if (isCurrent) return "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-blue-500/25";
    return isDarkMode
      ? "bg-gray-800 text-gray-400 border border-gray-700"
      : "bg-white text-gray-400 border border-gray-200";
  };

  // Theme Style
  const cardClass = isDarkMode
    ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-900 hover:border-gray-600"
    : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md";
  const textTitleClass = isDarkMode
    ? "text-gray-100 group-hover:text-blue-400"
    : "text-gray-900 group-hover:text-blue-600";
  const textOrgClass = isDarkMode ? "text-gray-400" : "text-gray-500";
  const textDescClass = isDarkMode ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-200";
  const tagClass = isDarkMode
    ? "bg-gray-800 text-gray-300 border-gray-700 hover:text-white"
    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200";
  const currentBadgeClass = isDarkMode
    ? "bg-blue-900/20 text-blue-400 border-blue-900/50"
    : "bg-blue-50 text-blue-600 border-blue-200";

  return (
    <>
      {SortExperiences?.map((Experience) => (
        <div key={Experience.id} className="relative flex gap-6 items-start group">
          {/* Timeline Icon */}
          <div className="shrink-0 pt-1 relative z-10">
            <div
              className={`w-14 h-14 ${getIconColor(
                Experience.is_current
              )} rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105`}
            >
              <Briefcase size={22} />
            </div>
          </div>

          {/* Content Card */}
          <div className={`flex-1 ${cardClass} border rounded-xl p-5 transition-all duration-300 shadow-sm`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className={`font-bold text-lg leading-tight transition-colors ${textTitleClass}`}>
                  {Experience.title}
                </h3>
                <p className={`text-sm font-medium mt-1 ${textOrgClass}`}>{Experience.organization}</p>
              </div>
              {/* Badge */}
              <span
                className={`self-start text-[10px] uppercase font-bold px-3 py-1 rounded-full border tracking-wide ${getBadgeStyle(
                  Experience.experience_type
                )}`}
              >
                {Experience.experience_type}
              </span>
            </div>

            {/* Date Info */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-medium">
              <Calendar size={14} className={isDarkMode ? "text-gray-400" : "text-gray-400"} />
              <span className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
                {formatDate(Experience.start_date)} —{" "}
                {Experience.is_current ? "Present" : formatDate(Experience.end_date)}
              </span>
              {Experience.is_current && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ml-1 animate-pulse ${currentBadgeClass}`}>
                  Active
                </span>
              )}
            </div>

            {/* Description */}
            <p className={`text-sm leading-relaxed mb-4 border-l-2 pl-3 ${textDescClass}`}>
              {Experience.description}
            </p>

            {/* Technologies Tags */}
            {Experience.technologies && Experience.technologies.length > 0 && (
              <div className={`flex flex-wrap gap-2 pt-2 border-t ${isDarkMode ? "border-gray-800/50" : "border-gray-100"}`}>
                {Experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2.5 py-1 text-xs font-medium rounded border transition-colors ${tagClass}`}
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceCard;