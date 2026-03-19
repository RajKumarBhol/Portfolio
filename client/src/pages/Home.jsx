import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import profilePic2 from '../assets/Profile2.jpeg'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero profilePic={profilePic2} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
        </motion.div>
    );
};

export default Home;
