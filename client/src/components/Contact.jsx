import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, Linkedin, Github, Instagram } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // API call to backend
            // await axios.post('http://localhost:5000/api/contact', formData);

            // Mock success for now
            setTimeout(() => {
                toast.success('Message sent! I will get back to you soon.', {
                    icon: '🚀',
                    duration: 4000
                });
                setFormData({ name: '', email: '', message: '' });
                setLoading(false);
            }, 1500);

        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="grid lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl mb-6">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="text-softWhite/60 text-lg mb-10 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-8 mb-12">
                        <ContactInfoItem icon={<Mail size={24} />} label="Email" value="rajkumarbhol29@gmail.com" />
                        <ContactInfoItem icon={<Phone size={24} />} label="Phone" value="+91 9508351042" />
                        <ContactInfoItem icon={<MapPin size={24} />} label="Location" value="Punjab, India" />
                    </div>

                    <div className="flex gap-4">
                        <SocialIcon icon={<Linkedin size={24} />} href="https://linkedin.com" />
                        <SocialIcon icon={<Github size={24} />} href="https://github.com" />
                        <SocialIcon icon={<Instagram size={24} />} href="https://www.instagram.com/raj_kumar_bhol/" />
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-softWhite/70 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-electricBlue transition-colors outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-softWhite/70 ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-electricBlue transition-colors outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-softWhite/70 ml-1">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="How can I help you?"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-electricBlue transition-colors outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg group"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const ContactInfoItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-6 group">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-electricBlue group-hover:bg-electricBlue group-hover:text-white transition-all duration-500">
            {icon}
        </div>
        <div>
            <p className="text-sm text-softWhite/40 uppercase tracking-wider font-bold mb-1">{label}</p>
            <p className="text-lg font-medium">{value}</p>
        </div>
    </div>
);

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        className="w-12 h-12 glass-card flex items-center justify-center text-softWhite/60 hover:text-electricBlue hover:border-electricBlue/50 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Contact;
