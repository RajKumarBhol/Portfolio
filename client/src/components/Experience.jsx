import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
    const journey = [
        {
            type: 'work',
            title: 'Web Developer',
            company: 'AWS Cloud Club LPU',
            period: '2024 - Present',
            description: 'Contributed to the planning and execution of technical webinars attended by 400+ students; collaborated with cross-functional teams to ensure smooth event operations.',
            icon: <Briefcase />
        },
        {
            type: 'education',
            title: 'Computer Science and Engineering',
            company: 'Lovely Professional University',
            period: '2023 - 2027',
            description: 'Focused on algorithms, data structures, and modern web technologies.',
            icon: <GraduationCap />
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl mb-4">My Journey</h2>
                <div className="h-1.5 w-24 bg-electricBlue mx-auto rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Animated Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-electricBlue via-softViolet to-transparent transform md:-translate-x-1/2 origin-top"
                />

                <div className="space-y-12">
                    {journey.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Animated Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10 flex items-center justify-center">
                                <div className="w-4 h-4 bg-midnight border-4 border-electricBlue rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute w-8 h-8 bg-electricBlue/30 rounded-full"
                                />
                            </div>

                            {/* Content Card */}
                            <div className="ml-10 md:ml-0 md:w-1/2">
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass-card p-8 group hover:border-electricBlue/30 cursor-default"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="p-3 bg-electricBlue/10 text-electricBlue rounded-xl group-hover:bg-electricBlue group-hover:text-white transition-colors duration-300"
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-electricBlue transition-colors">{item.title}</h3>
                                            <p className="text-softViolet text-sm font-semibold">{item.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-softWhite/60 leading-relaxed mb-4 group-hover:text-softWhite/90 transition-colors">{item.description}</p>
                                    <span className="inline-block px-4 py-1 bg-white/5 rounded-full text-xs font-bold text-softWhite/40 group-hover:bg-white/10 group-hover:text-softWhite/60 transition-all">
                                        {item.period}
                                    </span>
                                </motion.div>
                            </div>

                            {/* Dummy spacing for desktop */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
