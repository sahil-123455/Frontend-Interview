CA Monk – Frontend Assignment

This project is a frontend web application built as part of the CA Monk Frontend Assignment.

The goal was to design and implement a modern, scalable, and user-friendly interface for reading and managing articles while maintaining clean code and good UX practices.

✨ Key Features

Modern dark & light theme with smooth transitions

Dashboard with article preview and reading panel

Dedicated Articles page with grid layout

Read full articles inside a large modal (no page reload)

Create, edit, and delete articles

Image support using direct image URLs

Responsive design for all screen sizes

Smooth hover effects and subtle animations

🛠 Tech Stack

React + TypeScript

Tailwind CSS

React Router

TanStack React Query

JSON Server (mock backend)

shadcn/ui components

📁 Project Structure

src/

│── components/

│── feature/

├── ui/

│── hooks/

│── layouts/

│── pages/

│── services/

│── lib/

│── types.ts


components/ – Reusable UI & feature components

pages/ – Route-based pages (Dashboard, Articles, Communities)

hooks/ – Custom hooks using React Query

services/ – API layer for blogs

layouts/ – Shared layout (Navbar, Footer)

▶️ Running the Project Locally

1️⃣ Install dependencies

npm install

2️⃣ Start frontend

npm run dev

3️⃣ Start mock backend (JSON Server)

npm run server


Frontend: http://localhost:5173

Backend API: http://localhost:3001

📝 Notes

Articles are fetched using React Query for better state management

Reading an article opens a modal, not a separate page

Image URLs can be directly provided while creating a blog

UI design follows a clean, professional, and minimal approach inspired by modern platforms

👤 Author

Sahil Gupta

Frontend Developer

Built with attention to detail for the CA Monk team.
