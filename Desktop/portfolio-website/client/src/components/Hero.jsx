import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

const Hero = ({ profilePic }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="section-padding grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-electricBlue/10 border border-electricBlue/20 text-electricBlue text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Available for Hire
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-6 leading-tight">
                        <span className="gradient-text">Raj Kumar Bhol</span>
                        <br />
                        <span className="text-4xl md:text-5xl opacity-90 block mt-2">
                            Full Stack Developer
                        </span>
                    </h1>

                    <p className="text-lg text-softWhite/60 mb-10 max-w-lg leading-relaxed">
                        Crafting high-performance web experiences with React, Node.js, and modern AI-driven architectures. I build digital solutions that are as beautiful as they are functional.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary flex items-center gap-2">
                            <Download size={18} />
                            Download Resume
                        </button>
                    </div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center"
                >
                    {/* Animated Glow Backdrops */}
                    <div className="absolute inset-0 bg-electricBlue/20 blur-[100px] rounded-full animate-pulse" />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-electricBlue to-softViolet animate-float">
                        <div className="w-full h-full rounded-full bg-midnight overflow-hidden border-4 border-midnight">
                            <img
                                src={profilePic}
                                alt="Raj Kumar Bhol"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tech Stack Floaties */}
                        <TechStackFloaty icon="⚛️" label="React" pos="top-0 -left-4" delay={0} />
                        <TechStackFloaty icon="🟢" label="Node" pos="bottom-12 -right-8" delay={1} />
                        <TechStackFloaty icon="🔥" label="Express" pos="top-12 -right-8" delay={2} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TechStackFloaty = ({ icon, label, pos, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, delay }}
        className={`absolute ${pos} glass-card py-2 px-4 rounded-full flex items-center gap-2 text-sm font-medium z-10`}
    >
        <span>{icon}</span>
        <span className="opacity-80">{label}</span>
    </motion.div>
)

export default Hero;
