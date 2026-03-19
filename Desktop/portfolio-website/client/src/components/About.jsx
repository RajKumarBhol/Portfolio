import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const About = () => {
    const stats = [
        { label: 'Projects Completed', value: 6, suffix: '+' },
        { label: 'DSA Solutions', value: 100, suffix: '+' },
        { label: 'GitHub Contributions', value: 250, suffix: '+' },
        { label: 'Years of Experience', value: 2.5, suffix: '' },
    ];

    return (
        <section id="about" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 overflow-hidden border border-white/5"
            >
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-3">
                        <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
                        <p className="text-softWhite/70 leading-relaxed text-lg mb-6">
                            I am a passionate Full Stack Developer with a knack for building scalable and maintainable web applications. My journey started with a fascination for how logic translates into interactive experiences on the web.
                        </p>
                        <p className="text-softWhite/70 leading-relaxed text-lg">
                            Currently focused on mastering the MERN stack and exploring the boundaries of AI integration in software development. I thrive in collaborative environments and love solving complex real-world problems.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-white/10 transition-colors"
                            >
                                <div className="text-3xl font-bold text-electricBlue mb-1">
                                    <CountUp start={0} end={stat.value} duration={2.5} decimals={stat.value % 1 === 0 ? 0 : 1} enableScrollSpy />{stat.suffix}
                                </div>
                                <div className="text-xs uppercase tracking-wider text-softWhite/50 group-hover:text-softWhite/80 transition-colors">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
