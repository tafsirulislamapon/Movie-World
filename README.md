# 🎬 Movie World - Demo Website

Movie World is a modern movie information demo website built using **Next.js**, featuring dynamic routes for movie details. This project demonstrates how to structure a Next.js application with dynamic routing, reusable components, and simulated movie data to build an engaging movie browsing experience.

## 🚀 Features

- ✅ Built with **Next.js** (App Router / File-based routing)
- 🔁 **Dynamic ID routing** for individual movie pages (`/movies/[id]`)
- 🧩 Component-based structure for easy scalability
- 💡 Featured movies section
- 📄 Detailed movie pages with ratings and comment lists
- 🖼️ Styled using **Tailwind CSS** (optional: customize your style system)
- ⚙️ Dummy movie data for demo purposes (can be connected to an API or database later)

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-world-demo.git
cd movie-world-demo

### 2. install dependencies
npm install
# or
yarn install

## example data format
{
  id: "1",
  title: "Inception",
  comments: 3,
  rating: 4.7,
  description: "A mind-bending thriller by Christopher Nolan.",
  isFeatured: true,
  commentsList: [
    "Amazing movie!",
    "What a plot twist!",
    "Nolan never disappoints."
  ]
}
