# Netflix GPT

A modern, AI-powered movie recommendation web app inspired by Netflix. Built with React, TailwindCSS, Firebase, Redux, and Google Gemini API.  
**Deployed on Firebase Hosting.**

---

## 🚀 Features

- **Authentication**
  - Sign Up / Sign In with Firebase Auth
  - Profile update & sign out
  - Route protection (redirects based on auth state)

- **Browse Page**
  - Responsive Netflix-style UI with TailwindCSS
  - Main movie trailer (autoplay, mute)
  - Dynamic movie lists (Now Playing, Popular, etc.)
  - Movie cards with images from TMDB

- **AI Movie Recommendations**
  - GPT-style search bar powered by Google Gemini API (free tier)
  - Get smart movie suggestions based on your query
  - Suggestions fetched from TMDB and displayed instantly

- **State Management**
  - Redux Toolkit for user and movie state
  - Custom hooks for fetching movies and trailers

- **Other Highlights**
  - Form validation
  - Memoization for performance
  - Fully responsive design
  - Environment variables for API keys

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS
- **State Management:** Redux Toolkit
- **Authentication & Hosting:** Firebase
- **Movie Data:** TMDB API
- **AI Recommendations:** Google Gemini API (Generative Language API)

---

## 🌐 Live Demo

**[View the deployed app on Firebase](https://netflixgptnew-52b9c.web.app/)**

---

## 📦 Project Setup

1. **Clone the repository**
2. **Install dependencies**
   ```sh
   npm install