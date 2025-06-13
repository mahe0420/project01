



# 🔐 Auth App

A simple user authentication system built using:

- Node.js + Express (Backend)
- MongoDB + Mongoose (Database)
- HTML + CSS + JavaScript (Frontend)
- JWT (Authentication)

---

## 📌 Features

- ✅ User Registration
- ✅ User Login
- ✅ Password Hashing with Bcrypt
- ✅ JWT Token Authentication
- ✅ Protected Dashboard Page
- ✅ Logout Functionality

---

## 📁 Project Structure

```

auth.app/
├── backend/            → Backend API (Node.js + Express)
│   ├── models/         → User model
│   ├── routes/         → Auth routes (register, login, dashboard)
│   ├── middleware/     → JWT authentication middleware
│   ├── server.js       → Main Express server
│   └── .env            → Environment config
├── public/             → Frontend files (HTML, CSS, JS)
│   ├── login.html
│   ├── register.html
│   └── dashboard.html

````

---

## ⚙️ Setup Instructions

### 1. Clone the Project

```bash
git clone https://github.com/your-username/auth-app.git
cd auth-app
````

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create `.env` File in `/backend`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authapp
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Backend Server

```bash
node server.js
```

You should see:

```
MongoDB Connected
Server running at http://localhost:5000
```

---

## 🌐 How to Use

1. Open your browser and go to:

   ```
   http://localhost:5000/login.html
   ```

2. Use `register.html` to create a new user.

3. Login with your registered email and password.

4. If successful, you'll be redirected to the dashboard.

---

## 🧰 Built With

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT**
* **Bcrypt**
* **HTML / CSS / JS**

---

## 📜 License

This project is free to use. MIT License (optional).

---


[GitHub](https://github.com/mahe0420)

