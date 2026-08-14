# 🚀 Full-Stack Laravel 11 + React (Inertia.js) Deployable Portfolio

A state-of-the-art, high-performance web portfolio featuring a **Laravel 11 PHP backend**, **Inertia.js bridge**, **React frontend**, **Vite bundler**, **Tailwind CSS Glassmorphism styling**, and a **Protected Admin CMS Dashboard**.

---

## ✨ Features

- 🎨 **Glassmorphism Design & Interactive Particle Canvas**: Dynamic particle background with interactive physics cursor attraction.
- 💼 **Project Showcase**: Filterable categories, tech stack badges, and deep-dive detail modal dialogs.
- ⚡ **Skills Radar & Proficiency Metrics**: Categorized frontend, backend, AI/ML, and DevOps skill bars.
- 📜 **Career Timeline**: Interactive milestone roadmap.
- 📬 **Visitor Contact Inbox**: Real-time validated contact form persisting messages directly to SQLite/MySQL.
- 🔐 **Admin Control Center (`/dashboard`)**: Full CRUD management for projects & contact inbox with authentication.
- 🌗 **Multi-Theme Engine**: Cyber Dark, Midnight Purple, Emerald Luxe, and Minimal Light.

---

## 🛠️ Tech Stack

- **Backend**: Laravel 11, PHP 8.2+, SQLite / MySQL, Eloquent ORM.
- **Frontend**: React 18, Inertia.js 1.0, Tailwind CSS 3, Lucide Icons, Vite 5.
- **Deployment**: Docker, Railway, Render, Fly.io, VPS (Nginx + PHP-FPM).

---

## 💻 Local Development Setup

1. **Clone & Navigate into the project**:
   ```bash
   cd C:\Users\vlp\.gemini\antigravity-ide\scratch\laravel-react-portfolio
   ```

2. **Install PHP & Node Dependencies**:
   ```bash
   php composer.phar install
   npm.cmd install
   ```

3. **Database Options (Choose One)**:
   
   - **Option A: Supabase (Recommended Free Cloud Database)**
     1. Create a free project at [Supabase.com](https://supabase.com).
     2. Go to **Project Settings -> Database** to copy host, port, username, and password.
     3. Update your `.env`:
        ```ini
        DB_CONNECTION=pgsql
        DB_HOST=aws-0-ap-southeast-1.pooler.supabase.com
        DB_PORT=6543
        DB_DATABASE=postgres
        DB_USERNAME=postgres.your_project_id
        DB_PASSWORD=your_supabase_password
        ```

   - **Option B: MySQL (Railway, Render, or Local MySQL)**
     ```ini
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=portfolio
     DB_USERNAME=root
     DB_PASSWORD=secret
     ```

   - **Option C: SQLite (Default Zero-Config File Database)**
     ```powershell
     New-Item -ItemType File -Path "database/database.sqlite" -Force
     ```

   Run migrations and seed default data for any database choice:
   ```bash
   php artisan migrate:fresh --seed
   ```

4. **Launch Local Servers**:
   In two terminal windows:
   ```bash
   # Window 1: Laravel Backend Server
   php artisan serve

   # Window 2: Vite Hot-Reload Frontend Server
   npm.cmd run dev
   ```

5. Open [http://localhost:8000](http://localhost:8000) in your browser!

### 🔑 Admin Credentials
- **URL**: [http://localhost:8000/login](http://localhost:8000/login)
- **Email**: `admin@portfolio.com`
- **Password**: `password`

---

## ☁️ 1-Click Deployment Guide

### Option 1: Railway (Recommended)
1. Push this repository to GitHub.
2. Go to [Railway.app](https://railway.app) -> **New Project** -> **Deploy from GitHub repo**.
3. Railway automatically detects the included `Dockerfile`.
4. Add environment variables:
   - `APP_KEY`: Generate via `php artisan key:generate --show`
   - `APP_ENV`: `production`
   - `APP_DEBUG`: `false`
5. Click **Deploy**!

### Option 2: Render.com
1. Go to [Render.com](https://render.com) -> **Blueprints**.
2. Connect your GitHub repository (Render will automatically detect `render.yaml`).
3. Click **Apply**.

### Option 3: Fly.io
1. Install `flyctl` CLI.
2. Run:
   ```bash
   fly launch
   fly deploy
   ```

---

## 📄 License
MIT License. Built for high performance and effortless deployment.
