import { useEffect, useState } from "react";
import profileImg from "../assets/MyProfile.png";
import datapribadi from "../../dataMahasiswa.json";
import { DynamicIcon } from 'lucide-react/dynamic'; 

export default function Profile() {
    const [views, setViews] = useState(datapribadi.statistics?.views_count ?? 0);

    useEffect(() => {
        const key = "profile_viewed";
        
        if (!localStorage.getItem(key)) {
            setViews(v => v + 1);
            localStorage.setItem(key, "1");
        }
    }, []);
    
    return (
        <>
        <div className="max-w-4xl mx-auto mt-10 mb-6 px-4">
            <div className="bg-linear-to-r from-blue-400 to-cyan-400 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    
                    {/* Foto Profil */}
                    <div className="w-32 h-36 shrink-0 rounded-lg overflow-hidden bg-blue-300 p-1 shadow-sm opa">
                        <img 
                            src={profileImg} 
                            alt="My Profile"
                            className="w-full h-full object-cover rounded-lg" 
                        />
                    </div>
    
                    <div className="flex-1 text-center md:text-left w-full">
                        <h1 className="text-2xl md:text-3xl font-bold">{datapribadi.profile.full_name}</h1>
                        <p className="text-sm md:text-base opacity-90 mt-1">
                            Fullstack Web Developer | React & Django Enthusiast
                        </p>
                        
                        <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2 text-xs md:text-sm">
                            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                {datapribadi.profile.nim}
                            </span>
                            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                {datapribadi.profile.prodi}
                            </span>
                            <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                Angkatan {datapribadi.profile.angkatan}
                            </span>
                        </div>

                        {/* Lokasi & Views */}
                        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 items-center text-sm">
                            <div className="inline-flex items-center gap-1.5 text-white/90">
                                <DynamicIcon name="map-pin" className="w-4 h-4" /> {/* Tailwind v4 bisa atur size icon lewat class */}
                                <span>{datapribadi.profile.location}</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 text-white/90">
                                <DynamicIcon name="eye" className="w-4 h-4" />
                                <span>{views} Views</span>
                            </div> 
                        </div>

                        {/* Deskripsi */}
                        <p className="mt-3 text-sm md:text-base md:max-w-xl opacity-95 font-medium leading-relaxed">
                            Mahasiswa UMS dengan minat pada pengembangan web fullstack.
                        </p>
                        
                        {/* Tombol Portfolio */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1EEKy3soRlGjaMNpr-USDNdiSzBLxiMiY"
                            download
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 bg-white text-blue-600 px-5 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            <DynamicIcon name="external-link" className="w-4 h-4 text-blue-600" />
                            Visit Portfolio
                        </a>
                    </div>

                </div>
            </div> 
        </div>
    </>
    );
}