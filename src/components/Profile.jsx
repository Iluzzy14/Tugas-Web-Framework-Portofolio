import { useEffect, useState } from "react";
import profileImg from "../assets/MyProfile.png";
import dataMahasiswa from "../../dataMahasiswa.json";
import {  
  MapPin, 
  Eye, 
  ExternalLink, 
} from "lucide-react";


const Profile = ({ isDarkMode }) => {
    // Dynamic styles based on theme
    const cardClass = isDarkMode 
        ? "bg-gradient-to-r from-blue-900 to-slate-900 border-blue-800/50" 
        : "bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/20";
    
    const textMutedClass = isDarkMode ? "text-blue-200" : "text-blue-50";
    const badgeClass = isDarkMode 
        ? "bg-white/10 border-white/10 text-gray-200" 
        : "bg-white/20 border-white/20 text-white";

    return (
        <section id="profile" className="max-w-4xl mx-auto -mt-20 mb-8 px-4 scroll-mt-20">
            <div className={`${cardClass} rounded-2xl shadow-xl p-6 text-white border relative overflow-hidden transition-colors duration-500`}>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-10"></div>

                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
                    
                    {/* Foto Profil */}
                    <div className={`w-32 h-36 shrink-0 rounded-xl overflow-hidden p-1 shadow-lg ring-2 ${isDarkMode ? "bg-gray-800 ring-blue-500/50" : "bg-white/30 ring-white/50"}`}>
                        <div className={`w-full h-full rounded-3xl flex items-center justify-center text-gray-500 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                            <img
                                src={profileImg} 
                                alt="👨‍💻"
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </div>
    
                    <div className="flex-1 text-center md:text-left w-full">
                        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                            {dataMahasiswa.profile.full_name}
                        </h1>
                        <p className={`text-sm md:text-lg font-medium mt-1 ${textMutedClass}`}>
                            {dataMahasiswa.profile.headline}
                        </p>
                        
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

                        {/* Lokasi & Views */}
                        <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-6 items-center text-sm">
                            <div className="inline-flex items-center gap-2 text-white/90">
                                <MapPin className="w-4 h-4" />
                                <span>{dataMahasiswa.profile.location}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 text-white/90">
                                <Eye className="w-4 h-4" />
                                <span>{dataMahasiswa.statistics.views_count} Views</span>
                            </div> 
                        </div>

                        {/* Deskripsi */}
                        <p className="mt-4 text-sm md:text-base md:max-w-xl text-white/90 leading-relaxed font-medium">
                            {dataMahasiswa.profile.short_bio}
                        </p>
                        
                        {/* Tombol Portfolio */}
                        <a
                            href={dataMahasiswa.profile.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 ${isDarkMode ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30" : "bg-white text-blue-600 hover:bg-blue-50 shadow-black/10"}`}
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visit Portfolio
                        </a>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Profile;