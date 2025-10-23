# React + Vite
# 🎓 Student Learning Tracker

A simple and responsive **Learning Dashboard** built with **React + Vite** for tracking subjects or skills — progress, total hours, and completion stats.

---

## 🚀 Features
- Add new learning items (title, category, progress, hours)
- View summary stats (Total Items, In Progress, Completed, Hours)
- Dynamic progress bars
- Clean Figma-inspired layout
- Uses external JSON API (MockAPI or Render)

---

## ⚙️ Setup

```bash
git clone https://github.com/<yourusername>/learning-dashboard.git
cd learning-dashboard
npm install
npm run dev
Then open: http://localhost:5173

🌐 Deployment
Frontend (Vercel)
Push your project to GitHub.

Go to https://vercel.com

Import your repo → Deploy (Vite will auto-detect).

Backend (MockAPI or Render)
🟢 Option 1: MockAPI.io
Go to https://mockapi.io

Create a resource called learning

Copy the API URL and use it in your app:

js
Copy code
const API_URL = "https://YOUR_MOCKAPI_URL/learning";
⚙️ Option 2: Render + JSON Server
Use a simple db.json and package.json:

json
Copy code
{
  "scripts": { "start": "json-server --watch db.json --port 10000" },
  "dependencies": { "json-server": "^0.17.3" }
}
Deploy it to https://render.com.

  contributors
Ramadhan Galgalo
james isaiah
luckyann kagendo


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
