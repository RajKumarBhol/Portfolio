require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');
const Project = require('./src/models/Project');

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing data
        await User.deleteMany({});
        await Project.deleteMany({});

        // Create Admin User
        const admin = await User.create({
            username: process.env.ADMIN_USERNAME || 'admin',
            password: process.env.ADMIN_PASSWORD || 'admin123'
        });
        console.log('Admin user created!');

        // Create Initial Projects
        const projects = [
            {
                title: 'Midnight Glass Portfolio',
                description: 'A premium, responsive portfolio website built with the MERN stack and Framer Motion.',
                techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
                githubLink: 'https://github.com',
                liveLink: 'https://demo.com',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
                isFeatured: true
            },
            {
                title: 'TaskFlow Management System',
                description: 'Collaborative task management tool with real-time updates and team workspace.',
                techStack: ['React', 'Firebase', 'Redux', 'Material UI'],
                githubLink: 'https://github.com',
                liveLink: 'https://demo.com',
                image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
                isFeatured: false
            }
        ];

        await Project.insertMany(projects);
        console.log(`${projects.length} initial projects added!`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seed();
