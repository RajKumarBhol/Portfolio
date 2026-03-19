import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, Edit3, Save, X, ExternalLink, Github, LayoutGrid, MessageSquare, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);
    const [activeTab, setActiveTab] = useState('projects');
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const navigate = useNavigate();

    // Check auth
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin');
        }
    }, [navigate]);

    // Mock data for demo
    useEffect(() => {
        setProjects([
            { id: 1, title: 'E-Commerce Pro', description: 'Full featured shop', techStack: ['React', 'Node'], github: '#', live: '#', image: 'https://images.unsplash.com/photo-1557821552-17105176677c' },
            { id: 2, title: 'AI Chat', description: 'OpenAI integration', techStack: ['Next.js', 'Express'], github: '#', live: '#', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995' }
        ]);
        setMessages([
            { id: 1, name: 'Alice Smith', email: 'alice@example.com', message: 'I loved your portfolio!', date: '2024-03-20' },
            { id: 2, name: 'Bob Johnson', email: 'bob@tech.com', message: 'Are you available for freelance?', date: '2024-03-19' }
        ]);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logged out successfully');
        navigate('/admin');
    };

    return (
        <div className="pt-24 min-h-screen section-padding">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                    <p className="text-softWhite/50">Manage your portfolio content and messages</p>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
                <TabButton
                    active={activeTab === 'projects'}
                    onClick={() => setActiveTab('projects')}
                    icon={<LayoutGrid size={18} />}
                    label="Projects"
                />
                <TabButton
                    active={activeTab === 'messages'}
                    onClick={() => setActiveTab('messages')}
                    icon={<MessageSquare size={18} />}
                    label="Messages"
                />
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'projects' ? (
                    <motion.div
                        key="projects"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* Add Project Card */}
                        <button
                            onClick={() => { setEditingProject(null); setShowModal(true); }}
                            className="glass-card flex flex-col items-center justify-center p-8 border-dashed border-2 border-white/10 hover:border-electricBlue hover:bg-electricBlue/5 transition-all group min-h-[300px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Plus className="text-softWhite group-hover:text-electricBlue" size={32} />
                            </div>
                            <span className="font-bold text-lg">Add New Project</span>
                        </button>

                        {projects.map(project => (
                            <div key={project.id} className="glass-card overflow-hidden group">
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <button className="p-2 bg-midnight/80 rounded-lg text-softWhite hover:text-electricBlue backdrop-blur-md">
                                            <Edit3 size={16} />
                                        </button>
                                        <button className="p-2 bg-midnight/80 rounded-lg text-softWhite hover:text-red-500 backdrop-blur-md">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(s => <span key={s} className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10">{s}</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="messages"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        {messages.map(msg => (
                            <div key={msg.id} className="glass-card p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-bold text-lg">{msg.name}</h3>
                                        <span className="text-xs bg-electricBlue/10 text-electricBlue px-2 py-0.5 rounded-full">{msg.date}</span>
                                    </div>
                                    <p className="text-softWhite/50 text-sm mb-1">{msg.email}</p>
                                    <p className="text-softWhite/80">{msg.message}</p>
                                </div>
                                <button className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all self-start md:self-center">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Basic Modal for Adding Project */}
            {showModal && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-midnight/80 backdrop-blur-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card w-full max-w-2xl overflow-hidden shadow-2xl relative"
                    >
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <h2 className="text-2xl font-bold">Add Project</h2>
                            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X />
                            </button>
                        </div>

                        <div className="p-8 max-h-[70vh] overflow-y-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup label="Project Title" placeholder="E.g. Portfolio" />
                                <InputGroup label="Tech Stack (comma separated)" placeholder="React, Node, etc" />
                                <InputGroup label="GitHub URL" placeholder="https://..." />
                                <InputGroup label="Live URL" placeholder="https://..." />
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-softWhite/70">Description</label>
                                    <textarea rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-electricBlue outline-none"></textarea>
                                </div>
                                <InputGroup label="Image URL" placeholder="https://..." />
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/5 bg-white/5 flex justify-end gap-4">
                            <button onClick={() => setShowModal(false)} className="px-6 py-2 text-softWhite/60 hover:text-white">Cancel</button>
                            <button onClick={() => { setShowModal(false); toast.success('Project added!'); }} className="btn-primary py-2 flex items-center gap-2">
                                <Save size={18} />
                                Save Project
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium ${active
                ? 'bg-electricBlue text-white shadow-lg shadow-electricBlue/20 scale-105'
                : 'bg-white/5 border border-white/10 text-softWhite/50 hover:bg-white/10'
            }`}
    >
        {icon}
        {label}
    </button>
);

const InputGroup = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-2">
        <label className="text-sm font-semibold text-softWhite/70">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electricBlue transition-colors outline-none"
        />
    </div>
)

export default Dashboard;
