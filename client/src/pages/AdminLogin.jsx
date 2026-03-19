import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, User, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

const AdminLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // API call to backend auth
            // const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            // localStorage.setItem('token', res.data.token);

            // Mock login for demo
            setTimeout(() => {
                if (formData.username === 'admin' && formData.password === 'admin123') {
                    localStorage.setItem('token', 'mock_token');
                    toast.success('Welcome back, Admin!');
                    navigate('/dashboard');
                } else {
                    toast.error('Invalid credentials');
                }
                setLoading(false);
            }, 1000);

        } catch (error) {
            toast.error(error.response?.data?.error || 'Login failed');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 md:p-12 w-full max-w-md relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-electricBlue to-softViolet" />

                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-electricBlue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-electricBlue">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Admin Portal</h2>
                    <p className="text-softWhite/50">Enter your credentials to manage projects</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-softWhite/70 ml-1">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-softWhite/30" size={18} />
                            <input
                                type="text"
                                required
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                placeholder="admin"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:border-electricBlue transition-colors outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-softWhite/70 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-softWhite/30" size={18} />
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:border-electricBlue transition-colors outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                Login
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
