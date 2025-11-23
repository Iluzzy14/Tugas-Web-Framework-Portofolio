import { Github, Linkedin, Mail } from "lucide-react";
import dataMahasiswa from "../../dataMahasiswa.json"


const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`border-t mt-12 py-8 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 border-gray-800 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/zidniee" target="_blank" className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-blue-600"}`}>
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-zidni-khoirul-rizqi/" target="_blank" className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-blue-600"}`}>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:muhammadzidnikhoirul@gmail.com" className={`transition-colors ${isDarkMode ? "hover:text-white" : "hover:text-blue-600"}`}>
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} {dataMahasiswa.profile.full_name}. All rights reserved.
                </p>
                <p className="text-xs mt-2 opacity-70">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

export default Footer;