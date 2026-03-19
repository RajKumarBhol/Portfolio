import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import newsPortalImg from '../assets/news.jpg'
import pollMasterImg from '../assets/Mentimeter_Applications_Web_Live-Polling_HeroImage_2021__1_.jpeg'

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "News Portal",
            description: "A comprehensive news portal featuring a real-time voting system for community-driven content and articles.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            image: newsPortalImg,
            github: "https://github.com",
            live: "https://demo.com"
        },
        {
            id: 2,
            title: "Poll Master",
            description: "A real-time polling application enabling instant vote updates and dynamic data synchronization.",
            techStack: ["React", "Node.js", "Socket.IO", "Express"],
            image: pollMasterImg,
            github: "https://github.com/RajKumarBhol/Polling",
            live: "https://demo.com"
        },
        {
            id: 3,
            title: "Dev Portfolio V2",
            description: "A premium glassmorphism portfolio with complex animations (This Website!).",
            techStack: ["React", "Framer Motion", "Tailwind"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            github: "https://github.com/RajKumarBhol/portfolio-website",
            live: "https://demo.com"
        }
    ]);

    return (
        <section id="projects" className="section-padding">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl mb-4">Featured Projects</h2>
                    <div className="h-1.5 w-24 bg-softViolet rounded-full" />
                </div>
                <p className="max-w-md text-softWhite/60 text-right hidden md:block">
                    Explore some of my best work, ranging from complex full-stack systems to creative frontend experiments.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card group flex flex-col overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-electricBlue transition-all">
                                    <Github size={20} />
                                </a>
                                <a href={project.live} className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:text-electricBlue transition-all">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-electricBlue/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-softWhite/60 mb-6 flex-grow">{project.description}</p>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-softWhite hover:text-electricBlue transition-colors group/btn">
                                    Source Code <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
