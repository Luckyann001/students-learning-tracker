A minimal full-stack web app that helps students track their study sessions, visualize progress, and stay consistent with learning goals.
Built with React (Vite) for the frontend and JSON Server for the backend — both deployed on Vercel.

🚀 Overview

Many students struggle to stay consistent with self-study and tracking progress outside school.
This app solves that problem by allowing learners to:

Log what they studied

Rate focus or productivity

Track daily/weekly progress visually

Reflect on improvement over time

🧠 Features

✅ Add a study subject and progress entry
✅ Dashboard view with charts (Chart.js)
✅ Store and fetch data from a hosted API
✅ Responsive, minimal UI
✅ Deployed frontend and backend on Vercel

🏗️ Tech Stack
Layer	Technology
Frontend	React (Vite)
Backend	JSON Server
Styling	CSS
Hosting	Vercel (Frontend & Backend)
🌐 Live Deployment
🔹 Frontend

Deployed via Vercel from the React app folder.

Live App:
👉 https://students-learning-tracker.vercel.app

🔹 Backend

The backend (JSON Server) is in a separate folder called json-server-vercel, also deployed on Vercel.

API Endpoint:
👉https://json-server-vercel-psi-olive.vercel.app/subjects

📁 Project Structure
student-learning-tracker/
│
├── frontend/                    # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── json-server-vercel/           # Backend API deployed separately
│   ├── db.json                   # JSON data
│   ├── vercel.json               # Vercel configuration
│   └── package.json
│
└── README.md

⚙️ Local Development (Optional)

If you want to test locally before pushing updates:

1️⃣ Clone Repository
git clone https://github.com/yourusername/student-learning-tracker.git
cd student-learning-tracker

2️⃣ Run JSON Server locally
cd json-server-vercel
npm install
npx json-server --watch db.json --port 3001


Visit → http://localhost:3001/subjects

3️⃣ Run Frontend locally
cd ../frontend
npm install
npm run dev


Visit → http://localhost:5173/

🌍 Connecting Frontend to Backend

In your React code (e.g., App.jsx or Dashboard.jsx), use your hosted backend API:

fetch("https://json-server-vercel-yourname.vercel.app/subjects")
  .then(res => res.json())
  .then(data => setSubjects(data));


Or use an environment variable for cleaner setup:

VITE_API_URL=https://json-server-vercel-yourname.vercel.app


Then:

fetch(`${import.meta.env.VITE_API_URL}/subjects`)

👥 Team Collaboration (GitHub)

Each team member creates their own branch (e.g. feature-form, feature-dashboard, etc.)

After coding, push changes:

git add .
git commit -m "Added dashboard component"
git push origin feature-dashboard


Create a Pull Request on GitHub → Review → Merge into main.
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
