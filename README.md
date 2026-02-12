<p align="center"> 
  <img src="https://img.shields.io/badge/Node.js-Backend-green" />
  <img src="https://img.shields.io/badge/Express-5.2.1-black" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-brightgreen" />
  <img src="https://img.shields.io/badge/React-19-blue" />
  <img src="https://img.shields.io/badge/MUI-7.3.6-purple" />
  <img src="https://img.shields.io/badge/Cashfree-Payment-orange" />
</p>

# 📈 Investix – Stock Trading & Portfolio Management System

Investix is a **full-stack stock trading simulation platform** inspired by modern fintech dashboards like Zerodha.

The project is built using **Node.js, Express, MongoDB, React, Material UI, and Chart.js**, and includes **authentication, portfolio tracking, stock visualization, and Cashfree payment integration**.

It addresses the challenge of understanding stock portfolio management and fintech dashboard design by providing a structured, modern, and scalable trading system with secure authentication and payment handling.

---

## 🚀 Features

- 🔐 Secure User Registration & Login (Passport.js)
- 📊 Interactive Portfolio Dashboard
- 📈 Stock Price Visualization using Chart.js
- 💼 Buy/Sell Stock Simulation Interface
- 💳 Cashfree Payment Gateway Integration
- 🧠 RESTful API using Express 5
- 🗄 MongoDB Database with Mongoose ODM
- 🎨 Modern UI built with React 19 & Material UI
- 🔄 Axios-based frontend-backend communication
- 🌐 Routing using React Router v7

---

## 🎥 Project Demo Video

[![Watch the demo](https://img.youtube.com/vi/52eSnVM5234/hqdefault.jpg)](https://youtu.be/52eSnVM5234)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express 5.2.1 |
| Database | MongoDB, Mongoose 9.1.1 |
| Authentication | Passport.js, passport-local-mongoose |
| Payment Gateway | Cashfree PG (v5.1.0) |
| Dashboard | React 19.2.3 |
| UI Framework | Material UI 7.3.6 |
| Charts | Chart.js 4.5.1, react-chartjs-2 |
| Routing | React Router DOM 7.11.0 |
| API Communication | Axios |
| Environment | dotenv |
| Dev Tools | Nodemon |

---

## 📁 File Structure

```
📦 Investix/
├─ 📁 backend/
│ ├─ index.js
│ ├─ 📁models/
│ ├─ 📁routes/
│ ├─ 📁controllers/
│ └─ package.json
│
├─ 📁 dashboard/
│ ├─ 📁src/
│ │ ├─ 📁components/
│ │ ├─ 📁pages/
│ │ ├─ 📁services/
│ │ └─ App.js
│ └─ package.json
│
├─ 📁 frontend/
│ ├─ 📁src/
│ └─ package.json
│
└─ README.md
```


---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (Local or MongoDB Atlas)
- npm
- Git

---

### 1️⃣ Backend Setup

```
cd backend
npm install
npm start
```

### Create a .env file:

```
MONGO_URI=your_mongodb_connection_string
CASHFREE_APP_ID=your_cashfree_app_id
CASHFREE_SECRET_KEY=your_cashfree_secret_key
```

### 2️⃣ Dashboard Setup

```
cd dashboard
npm install
npm start
```

### 2️ Frontend Setup
```
cd frontend
npm install
npm start
```

## 🚀 Future Enhancements

- 🔄 Live stock market API integration (Alpha Vantage / Finnhub)
- 📊 Advanced analytics with technical indicators
- 🔐 JWT-based authentication
- ☁️ Cloud deployment (Render + Vercel + MongoDB Atlas)

## 🤝 Connect with Me

Feel free to reach out for feedback, collaborations, or discussions about fintech systems!

LinkedIn: https://www.linkedin.com/in/aditya-deshmukh14/

Twitter: https://x.com/Aadi_deshmukh14

GitHub: https://github.com/Aditya-deshmukh-1410



