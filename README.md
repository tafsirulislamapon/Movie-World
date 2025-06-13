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
https://github.com/tafsirulislamapon/Movie-World.git
cd movie-world

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

# Movie-World
🎬 Movie World is a demo movie website built with Next.js and dynamic routes. It showcases featured movies, ratings, and detailed pages using simulated data perfect for learning dynamic routing and component structuring in Next.js.
