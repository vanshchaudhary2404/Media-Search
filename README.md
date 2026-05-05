# 🚀 MediaSearch

A multi-source media search application that allows users to explore **GIFs, Images, and Videos** from different platforms in one place and manage them using a collection system powered by Redux.

---

## 🌐 Live Demo

👉 https://mediaearch.netlify.app/

---

## 📌 Features

* 🔍 Search **GIFs (Tenor API)**
* 🖼️ Search **Images (Unsplash API)**
* 🎥 Search **Videos (Pexels API)**
* 📁 Add media to **Collection**
* ❌ Remove individual items from collection
* 🧹 Clear entire collection
* ⚡ Global state management using **Redux**
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **State Management:** Redux
* **APIs:** Tenor, Unsplash, Pexels
* **Deployment:** Netlify

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/Media-Search.git

# Navigate to project
cd Media-Search

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in root and add:

```env
VITE_TENOR_API_KEY=your_key
VITE_UNSPLASH_API_KEY=your_key
VITE_PEXELS_API_KEY=your_key
```

⚠️ Do NOT commit `.env` file.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📂 Project Structure

```
Media-Search/
│── public/
│── src/
│   ├── components/
│   ├── redux/
│   ├── pages/
│   └── App.jsx
│── .gitignore
│── package.json
│── vite.config.js
```

---

## 🚀 Deployment

Deployed using **Netlify**

* Build Command: `npm run build`
* Publish Directory: `dist`

---

## 🧠 Learning Objective

The main goal of this project is to **implement and understand Redux** for efficient global state management, including:

* Actions & Reducers
* Centralized Store
* Predictable State Flow

---

## 🔥 Future Improvements

* 🔐 Add backend (Node.js) to secure API keys
* 💾 Persist collection using database
* 🔎 Add filters & sorting
* ⚡ Improve performance with caching & debouncing

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📧 Contact

Vansh Chaudhary
GitHub: https://github.com/vanshchaudhary2404
