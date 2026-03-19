import { motion } from 'framer-motion'
import {
    Layout, Server, Settings, Terminal,
    Zap, Code2, Cpu, Users, Layers, MessageSquare,
    Globe, Database, Award, RefreshCw
} from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout className="text-electricBlue" />,
            skills: [
                { name: "React.js", level: "Advanced", progress: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", level: "Intermediate", progress: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
                { name: "Tailwind CSS", level: "Advanced", progress: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "JavaScript", level: "Advanced", progress: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            ]
        },
        {
            title: "Backend",
            icon: <Server className="text-softViolet" />,
            skills: [
                { name: "Node.js", level: "Advanced", progress: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", level: "Advanced", progress: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
                { name: "MySQL", level: "Intermediate", progress: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "REST APIs", level: "Advanced", progress: 92, lucide: Code2, color: "text-emerald-400" },
            ]
        },
        {
            title: "Tools & DevOps",
            icon: <Settings className="text-gray-400" />,
            skills: [
                { name: "Git", level: "Advanced", progress: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Postman", level: "Advanced", progress: 90, icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
                { name: "Vercel", level: "Advanced", progress: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
                { name: "GitHub", level: "Advanced", progress: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true }
            ]
        },
        {
            title: "Soft Skills",
            icon: <Terminal className="text-blue-400" />,
            skills: [
                { name: "Problem Solving", level: "Advanced", progress: 95, lucide: Cpu, color: "text-rose-400" },
                { name: "Teamwork", level: "Advanced", progress: 90, lucide: Users, color: "text-sky-400" },
                { name: "Communication", level: "Advanced", progress: 88, lucide: MessageSquare, color: "text-orange-400" },
                { name: "Adaptability", level: "Advanced", progress: 90, lucide: RefreshCw, color: "text-green-400" }
            ]
        }
    ];

    const SkillIcon = ({ skill }) => {
        if (skill.lucide) {
            const Icon = skill.lucide;
            return <Icon size={24} className={`${skill.color} shrink-0`} />;
        }
        return (
            <img
                src={skill.icon}
                alt={skill.name}
                className={`w-7 h-7 shrink-0 object-contain ${skill.invert ? 'brightness-0 invert' : ''}`}
            />
        );
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return 'text-electricBlue';
            case 'Intermediate': return 'text-softViolet';
            case 'Basic': return 'text-softWhite/50';
            default: return 'text-softWhite/70';
        }
    };

    return (
        <section id="skills" className="section-padding overflow-hidden">
            <div className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 gradient-text py-2"
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-softWhite/60 text-lg max-w-2xl mx-auto"
                >
                    A comprehensive overview of my technical stack and proficiency levels across different domains.
                </motion.p>
                <div className="h-1.5 w-24 bg-electricBlue mx-auto rounded-full mt-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 md:p-8"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                        </div>

                        <div className="space-y-6">
                            {category.skills.map((skill, sIdx) => (
                                <div key={skill.name} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <SkillIcon skill={skill} />
                                            <span className="text-softWhite/90 font-medium text-lg">{skill.name}</span>
                                        </div>
                                        <span className={`font-bold text-xs uppercase tracking-widest ${getLevelColor(skill.level)}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (sIdx * 0.1) }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-electricBlue to-softViolet"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
