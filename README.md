# 🧑‍💼 DevJobs Web App

A responsive, pixel-perfect job listing application built with **React**, **Vite**, and **Tailwind CSS**, powered by **Shadcn UI**, **TanStack Router**, and mock API data.

---

## 📦 Tech Stack

- **React + Vite** – Fast and modern frontend framework
- **Tailwind CSS** – Utility-first styling
- **Shadcn UI** – Beautiful pre-built components
- **TanStack Router** – Type-safe routing and file-based structure
- **TypeScript** – Safer development
- **Lucide Icons** – Icon set for UI elements
- **Mock API** – Static `data.json` simulating job listings

---

## 🚀 Features

- 🔍 Filter jobs by **title**, **location**, and **full-time only**
- 📱 Fully **responsive**: mobile-first with filter popup on small screens
- 🌙 **Dark mode** toggle with persistent state
- 🔗 Dynamic job **details page** via route parameters
- 🖼️ Real logos using [Clearbit Logo API](https://clearbit.com/logo)

---

## 📁 Project Structure

```bash
src/
├── components/           # Reusable UI components (e.g. Navbar, JobCard, Filters)
├── routes/               # Page routes using TanStack file routing
│   ├── index.tsx         # Homepage with filters
│   └── jobs/$jobId.tsx   # Job detail route
├── mock-data/jobs.ts     # Static mock job listings
├── lib/utils.ts          # Utility functions (e.g. filtering logic)
├── assets/               # (Optional) Local images or icons

🧪 Getting Started

1. Clone the repo
   git clone https://github.com/your-username/devjobs-web-app.git
   cd devjobs-web-app
2. Install dependencies
   npm install
3. Run the development server
   npm run dev
Open your browser at http://localhost:5173

🛠️ Build for Production
npm run build
npm run preview
🧰 Customization

🧑‍💻 Author
Tanya – @Tanya22bose
```
