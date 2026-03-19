import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Achievements', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/' + href);
        } else {
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-card py-2 px-8 rounded-full max-w-5xl' : ''}`}>
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
                    <span className="w-10 h-10 bg-gradient-to-br from-electricBlue to-softViolet rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-electricBlue/20 group-hover:rotate-12 transition-transform">R</span>
                    <span className="hidden sm:inline-block gradient-text">Raj Kumar Bhol</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-base font-medium text-softWhite/70 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="flex items-center gap-4">
                        <a href="https://github.com" target="_blank" className="text-softWhite/50 hover:text-electricBlue transition-colors"><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" className="text-softWhite/50 hover:text-electricBlue transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/raj_kumar_bhol/" target="_blank" className="text-softWhite/50 hover:text-electricBlue transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-softWhite">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-card border-none rounded-none py-8 flex flex-col items-center gap-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xl font-medium text-softWhite/70 hover:text-white cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
