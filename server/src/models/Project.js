const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a project title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    techStack: {
        type: [String],
        required: [true, 'Please add tech stack']
    },
    githubLink: {
        type: String,
        required: [true, 'Please add GitHub link']
    },
    liveLink: {
        type: String
    },
    image: {
        type: String,
        required: [true, 'Please add an image URL or path']
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
