// import profileImg from "../assets/MyProfile.png";
import dataMahasiswa from "../../dataMahasiswa.json";
import {  
  MapPin, 
  Mail, 
  ExternalLink, 
  Linkedin,
  Github,
  Eye
} from "lucide-react";
const Profile = ({ isDarkMode }) => {
  const data = dataMahasiswa.profile;
  const decorOpacity = isDarkMode ? "opacity-10" : "opacity-30";

  // Status Badge
  const badgeClass = isDarkMode 
    ? "bg-blue-900/30 border-blue-800 text-blue-300"
    : "bg-blue-50/80 border-blue-100 text-blue-700";

  // Typography
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const gradientText = isDarkMode 
    ? "from-blue-400 via-purple-400 to-cyan-400"
    : "from-blue-600 via-indigo-600 to-cyan-500";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  
  // Buttons
  const contactBtnClass = isDarkMode 
    ? "bg-blue-600 hover:bg-blue-500" 
    : "bg-blue-600 hover:bg-blue-700";
  
  const portfolioBtnClass = isDarkMode
    ? "border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-200"
    : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700";

  // Footer Info
  const footerInfoColor = isDarkMode ? "text-gray-400 border-gray-800" : "text-gray-500 border-gray-100";
  const footerItemBg = isDarkMode ? "bg-gray-800/50" : "bg-gray-50";

  // Image & Cards
  const imgBorder = isDarkMode ? "border-gray-800" : "border-white";
  const imgBg = isDarkMode ? "bg-gray-900" : "bg-white";
  
  // Floating Badge
  const floatBadgeBg = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100";
  const iconBox1 = isDarkMode ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600";
  const iconBox2 = isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800";

  // Split fullname
  const nameParts = data.full_name.split(' ');

  const firstName = nameParts[0];
  const middleName = nameParts[1];
  const lastName = nameParts.slice(2).join(' ');

  return (
    <section 
      id="profile" 
      className="relative w-full py-24 px-6 -mt-6 scroll-mt-20 overflow-hidden transition-colors duration-300"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className={`absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transition-opacity duration-300 ${decorOpacity}`}></div>
          <div className={`absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-400/20 rounded-full blur-3xl transition-opacity duration-300 ${decorOpacity}`}></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-7 space-y-8 order-2 md:order-1 text-center md:text-left">
          
          {/* Status Badge */}
          <div className="flex justify-center md:justify-start">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-300 ${badgeClass}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Available for Hire
              </span>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-sans tracking-tight transition-colors duration-300 ${headingColor}`}>
              {firstName} <span className={`text-transparent bg-clip-text bg-linear-to-r animate-gradient ${gradientText}`}>{middleName}</span> <br className="hidden md:block"/> {lastName}
            </h1>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 text-xs md:text-sm">
                <span className={`${badgeClass} px-3 py-1 rounded-full backdrop-blur-sm border`}>
                    {dataMahasiswa.profile.nim}
                </span>
                <span className={`${badgeClass} px-3 py-1 rounded-full backdrop-blur-sm border`}>
                  {dataMahasiswa.profile.prodi}
                </span>
                <span className={`${badgeClass} px-3 py-1 rounded-full backdrop-blur-sm border`}>
                  Angkatan {dataMahasiswa.profile.angkatan}
                </span>
              </div>
            
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 transition-colors duration-300 ${textColor}`}>
              {data.short_bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a 
              href="mailto:muhammadzidnikhoirul@gmail.com"
              className={`group px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 ${contactBtnClass}`}
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" /> 
              Contact Me
            </a>
            <a 
              href={data.portfolio_url} 
              target="_blank" 
              rel="noreferrer" 
              className={`group px-8 py-3.5 rounded-xl border font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 backdrop-blur-sm ${portfolioBtnClass}`}
            >
              View Portfolio 
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Footer Info */}
          <div className={`flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 text-sm font-medium pt-6 border-t transition-colors duration-300 ${footerInfoColor}`}>
            <span className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${footerItemBg}`}>
              <MapPin size={16} className="text-red-500" /> {data.location}
            </span>
            <span className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${footerItemBg}`}>
              <Eye size={16} className="text-red-500" /> {dataMahasiswa.statistics.views_count}
            </span>
          </div>
        </div>

        {/* Photo Content */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2 relative">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Animated Gradient Border */}
            <div className="absolute -inset-1 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className={`relative w-full h-full rounded-[1.9rem] overflow-hidden border-4 shadow-2xl transition-colors duration-300 ${imgBg} ${imgBorder}`}>
                <img 
                  src={data.photo_url} 
                  alt={data.full_name} 
                  className="w-full h-12/10 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                  onError={() => setImgError(true)}
                />
            </div>

            {/* Floating Badge (Decor) */}
            <div className={`absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg border flex gap-3 animate-bounce-slow ${floatBadgeBg}`}>
               <div className={`p-2 rounded-lg ${iconBox1}`}>
                 <Linkedin size={20} />
               </div>
               <div className={`p-2 rounded-lg ${iconBox2}`}>
                 <Github size={20} />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;

