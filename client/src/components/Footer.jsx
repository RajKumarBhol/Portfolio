import { Link } from 'react-router-dom'
import { Github, Linkedin, Instagram, Heart } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
                        <span className="w-10 h-10 bg-gradient-to-br from-electricBlue to-softViolet rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-electricBlue/20">R</span>
                        <span className="gradient-text">Raj Kumar Bhol</span>
                    </Link>



                    <div className="flex gap-4">
                        <a href="https://github.com" className="w-10 h-10 glass-card flex items-center justify-center text-softWhite/60 hover:text-electricBlue transition-all"><Github size={18} /></a>
                        <a href="https://linkedin.com" className="w-10 h-10 glass-card flex items-center justify-center text-softWhite/60 hover:text-electricBlue transition-all"><Linkedin size={18} /></a>
                        <a href="https://www.instagram.com/raj_kumar_bhol/" className="w-10 h-10 glass-card flex items-center justify-center text-softWhite/60 hover:text-electricBlue transition-all"><Instagram size={18} /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-softWhite/40 text-sm">
                        © {currentYear} Raj Kumar Bhol. All rights reserved.
                    </p>
                    <p className="text-softWhite/40 text-sm flex items-center gap-2">
                        Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Node.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
