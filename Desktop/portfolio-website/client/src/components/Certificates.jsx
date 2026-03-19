import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'

const Certificates = () => {
    const certificates = [
        {
            title: "Prompt engineering:ChatGPT, Gen AI & LLM",
            issuer: "Certification",
            date: "Aug 2025",
            description: "Comprehensive study of Generative AI, LLMs, and advanced prompt engineering techniques.",
            icon: <ShieldCheck className="text-electricBlue" />,
            link: cert1
        },
        {
            title: "Data Structures and Algorithms in C++",
            issuer: "CipherSchools",
            date: "July 2025",
            description: "Comprehensive training in Data Structures and Algorithms using C++.",
            icon: <ShieldCheck className="text-softViolet" />,
            link: cert2
        },
        {
            title: "C++ Data Structures & Algorithms",
            issuer: "Apna College",
            date: "2025",
            description: "In-depth learning of core C++ concepts, problem-solving, and complete DSA methodologies.",
            icon: <ShieldCheck className="text-blue-400" />,
            link: cert3
        }
    ];

    const achievements = [
        {
            title: "Real-Time Voting Application",
            event: "Project Development",
            description: "Developed a real-time voting application enabling instant vote updates using modern web technologies; implemented dynamic data synchronization to ensure accurate and live result tracking, enhancing user engagement and system responsiveness.",
            icon: <Award className="text-amber-400" />,
            link: "https://github.com/RajKumarBhol/Polling"
        },
        {
            title: "Web Developer",
            event: "AWS Cloud Club LPU",
            description: "Worked as a Web Developer at the AWS Cloud Club LPU, contributing to the planning and execution of technical webinars attended by 400+ students; collaborated with cross-functional teams to ensure smooth event operations and enhanced digital engagement.",
            icon: <Award className="text-emerald-400" />
        }
    ];

    return (
        <section id="certificates" className="section-padding">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 gradient-text py-2"
                >
                    Achievements & Certificates
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-softWhite/60 text-lg max-w-2xl mx-auto"
                >
                    Recognition of my continuous learning journey and milestones achieved in the field of technology.
                </motion.p>
                <div className="h-1.5 w-24 bg-electricBlue mx-auto rounded-full mt-8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Certificates Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <ShieldCheck className="text-electricBlue" /> Professional Certifications
                    </h3>
                    <div className="space-y-6">
                        {certificates.map((cert, idx) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 flex gap-4 hover:scale-[1.02] transition-transform cursor-pointer group"
                            >
                                <div className="mt-1">{cert.icon}</div>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold group-hover:text-electricBlue transition-colors">{cert.title}</h4>
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-white/5 rounded-full transition-colors relative z-20">
                                                <ExternalLink size={16} className="text-softWhite/50 hover:text-white" />
                                            </a>
                                        ) : (
                                            <ExternalLink size={16} className="text-softWhite/30 group-hover:text-white" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-softWhite/50 mb-3">
                                        <span className="flex items-center gap-1"><ShieldCheck size={14} /> {cert.issuer}</span>
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {cert.date}</span>
                                    </div>
                                    <p className="text-softWhite/70 text-sm leading-relaxed">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Award className="text-amber-400" /> Key Achievements
                    </h3>
                    <div className="space-y-6">
                        {achievements.map((achieve, idx) => (
                            <motion.div
                                key={achieve.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electricBlue/10 to-transparent rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                                        {achieve.icon}
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-2xl font-bold">{achieve.title}</h4>
                                        {achieve.link && (
                                            <a href={achieve.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors relative z-20">
                                                <ExternalLink size={20} className="text-softWhite/50 hover:text-white" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-amber-400 font-medium text-sm mb-4">{achieve.event}</p>
                                    <p className="text-softWhite/70 leading-relaxed">{achieve.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
