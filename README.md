# Pratik Mehta - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website for **Pratik Mehta** (B.Tech Student at JECRC University, AI & Technology Enthusiast).

Built with **React**, **Vite**, and **Tailwind CSS**. Designed for effortless deployment to **Vercel**.

---

## 🌟 Features

- **Hero Section**: Personal branding, dynamic tagline, status pill, quick call-to-actions, and interactive tech stats.
- **About Me**: Student-friendly narrative, core interest pillars (AI, Web Dev, Productivity), and quick facts.
- **Education**: Detailed degree timeline for **B.Tech at JECRC University (Class of 2026)** with semester learning areas and coursework breakdown.
- **Skills**: Interactive category-filtered cards for HTML, CSS, JavaScript, Python, Artificial Intelligence, Generative AI, Web Development, and Digital Productivity.
- **Projects**: Showcase cards for:
  1. *Personal Portfolio Website*
  2. *AI Website Project*
  3. *Student Productivity Project*
  Each includes full descriptions, technology tags, and interactive detail modals.
- **Achievements**: Expandable, categorized milestone tracking for Certifications, Hackathons, Courses, Awards, and Other achievements.
- **Contact**: Email copy-to-clipboard, direct email dispatch, verified LinkedIn and GitHub profile links, and an interactive contact form with confetti celebration.
- **Design & UX**: Sleek glassmorphism dark aesthetic, custom scrollbars, responsive hamburger menu, and floating back-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: Canvas Confetti

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have Node.js (version 18 or newer) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete modern portfolio website for Pratik Mehta"
   git branch -M main
   git remote add origin https://github.com/Pratik14581/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** as the framework preset (`npm run build`, output directory `dist`).
6. Click **Deploy**!

---

## ✏️ Customizing Portfolio Data

All personal details, skills, projects, and achievements are organized in a single file:
`src/data/portfolioData.js`

To update projects, email, or add new certifications, simply edit this file!
