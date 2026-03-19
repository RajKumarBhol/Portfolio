# 🌌 Midnight Glass Pro - Premium Full Stack Portfolio

A state-of-the-art, recruiter-ready professional portfolio website built with the **MERN Stack** (MongoDB, Express, React, Node.js) and styled with high-performance animations using **Framer Motion** and **Tailwind CSS**.

---

## ✨ Features
- **Modern UI/UX**: Premium "Midnight Glass" theme with glassmorphism and soft glow effects.
- **Fully Responsive**: Mobile-first design that looks stunning on every device.
- **Dynamic Content**: Projects are fetched from the backend API and managed via an Admin Panel.
- **Secure Admin Dashboard**: JWT-protected dashboard to add, edit, and delete projects.
- **Functional Contact Form**: Direct integration with MongoDB to store inquiries.
- **Performance Optimized**: Built with Vite for ultra-fast loading times and SEO friendliness.

---

## 🛠️ Tech Stack
| Frontend | Backend | Database | Tools |
| :--- | :--- | :--- | :--- |
| React.js (Vite) | Node.js | MongoDB | Git |
| Tailwind CSS | Express.js | Mongoose | Postman |
| Framer Motion | JWT | | Multer |
| Lucide React | Bcrypt.js | | |

---

## 📂 Project Structure
```text
portfolio-website/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page views (Home, Admin, Dashboard)
│   │   ├── App.jsx      # Main application entry
│   │   └── index.css    # Global styles & Tailwind
├── server/              # Node.js backend
│   ├── src/
│   │   ├── models/      # Mongoose schemas (Project, Contact, User)
│   │   ├── controllers/ # Logic for API endpoints
│   │   ├── routes/      # REST API route definitions
│   │   └── middleware/  # Auth & Security middleware
│   ├── index.js         # Entry point
│   └── seed.js          # Database seeding script
└── .env                 # Environment variables (server side)
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. Setup Backend
```bash
cd server
npm install
```
- Create a `.env` file in the `server` directory and paste the contents from the `.env.example` (or provided in the code).
- **Seed the database** (Creates default admin and sample projects):
```bash
npm run seed  # Note: Requires node seed.js in package.json
```

### 3. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

---

## 🛡️ Admin Access
- **Path**: `/admin`
- **Default Username**: `admin`
- **Default Password**: `admin123`
*(Change these in your .env file before seeding)*

---

## 🌍 Deployment Guide

### Frontend (Vercel)
1. Push your code to GitHub.
2. Link the repository to your Vercel account.
3. Set the Root Directory to `client`.
4. Add environment variables if needed.

### Backend (Render / Railway)
1. Create a new Web Service.
2. Link the repository.
3. Set the Root Directory to `server`.
4. Set Build Command: `npm install`.
5. Set Start Command: `node index.js`.
6. Add your MongoDB URI and JWT secrets in the "Environment" tab.

---

## 👤 Author
**Raj Kumar Bhol**  
Full Stack Developer  
[LinkedIn](https://linkedin.com) | [GitHub](https://github.com) | [YouTube](https://youtube.com)

---
*If you like this project, feel free to give it a ⭐!*
