
# 📚 The Book Haven – Client Side

A simple and user-friendly online book management web application.  
Users can browse books, read details, and manage their own book list after logging in.

🔗 **Live Site:** https://book-haven-c3608.web.app/  

---
## 📖 Project Overview

**The Book Haven** is built to help book lovers explore different books in a smooth and modern interface.  
The frontend is created using **React**, styled with **Tailwind CSS**, and connected to Firebase for authentication.  
This client-side application communicates with a backend API to fetch and manage book data.

---


## 🛠️ Technology Stack

### **Frontend**
- React.js (Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI
- Axios
- React Icons

### **Tools & Services**
- Firebase Authentication  
- Firebase Hosting  

---

## ⭐ Core Features

- 🔐 Secure Login & Register (Firebase)
- 📚 Browse Books by category
- 📘 Detailed Book View
- ➕ Add new book
- ✏️ Update existing book
- ❌ Delete book
- ⭐ Rating & category support
- 👤 User-specific book list
- 📱 Fully responsive UI

---
## 🖼️ Screenshot



![The Book Haven Screenshot](assets/book-haven.png)
---

## 📦 Dependencies (Client-Side)


*(Versions will come from package.json.)*

---

## 🧑‍💻 How to Run Locally

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/maisha850/the-book-haven-client.git
cd the-book-haven-client
npm install
```
### **2️⃣ Create environment variables**

*Create a `.env.local` file in the root directory and add your Firebase configuration:*
```bash
VITE_apiKey=your_api_key  
VITE_authDomain=your_auth_domain  
VITE_projectId=your_project_id  
VITE_storageBucket=your_storage_bucket  
VITE_messagingSenderId=your_sender_id  
VITE_appId=your_app_id
```

### **3️⃣ Start the development server**
```bash
npm run dev
