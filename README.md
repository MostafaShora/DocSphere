# 🩺 DocSphere

> A Full-Stack Medical Appointment Booking System built using the MEAN Stack.

DocSphere is a modern healthcare platform that allows patients to book appointments with doctors online, manage payments securely, and interact through dedicated dashboards for patients, doctors, and admins.

The system was designed to simplify appointment management and improve communication between patients and healthcare providers through a clean and responsive user experience.

---

# 🚀 Features

## 🔐 Authentication & Security
- User Registration & Login
- JWT Authentication
- Role-Based Authorization
- OTP Email Verification
- Forgot & Reset Password
- Change Password Functionality
- Protected Routes & APIs

---

# 👨‍⚕️ Patient Features
- Browse doctors and services
- Book appointments online
- Cancel appointments
- Accept/Reject reschedule requests
- Pay using:
  - 💵 Cash
  - 💳 Stripe
- Submit ratings & reviews
- Manage personal dashboard

---

# 🩺 Doctor Features
- Doctor Dashboard
- Manage appointments
- Confirm or reject bookings
- Send reschedule proposals
- View patient reviews
- Update profile information

---

# 🛠️ Admin Features
- Admin Dashboard
- Manage doctors
- Manage services
- Monitor appointments
- Track platform activity

---

# 💳 Payment System

Integrated with **Stripe Payment Gateway** for secure online payments.

### 🔄 Payment Flow
1. Patient books appointment
2. Doctor confirms appointment
3. Patient selects payment method
4. Stripe PaymentIntent is created
5. Payment verified from backend
6. Appointment marked as paid
7. Patient can leave a review

---

# 🧰 Tech Stack

## 🎨 Frontend
- Angular
- TypeScript
- HTML5
- CSS3
- RxJS

## ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Nodemailer
- Stripe API

---

# 📁 Project Structure

```bash
DocSphere/
│
├── Front-End/
│
├── Back-End/
│
└── README.md
```

---

# 🧱 Frontend Architecture

```bash
src/app/
│
├── core/
├── features/
│   ├── admin/
│   ├── auth/
│   ├── doctor/
│   ├── patient/
│   └── public/
│
└── shared/
```

### 📌 Architecture Includes
- Feature-Based Structure
- Route Guards
- Interceptors
- Shared Components
- Reactive Forms
- Lazy Loading
- Standalone Components

---

# 🗄️ Backend Architecture

```bash
Back-End/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
└── server.js
```

### 📌 Backend Includes
- REST APIs
- JWT Authentication
- Stripe Integration
- Email Verification
- Error Handling
- Role Authorization

---

# ⚡ Installation

## 📥 Clone Repository

```bash
git clone https://github.com/MostafaShora/DocSphere.git
cd DocSphere
```

---

# ▶️ Frontend Setup

```bash
cd Front-End
npm install
ng serve
```

Frontend runs on:

```bash
http://localhost:4200
```

---

# ▶️ Backend Setup

```bash
cd Back-End
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside `Back-End/`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

STRIPE_SECRET_KEY=your_secret_key
STRIPE_PUBLISHABLE_KEY=your_publishable_key

CLIENT_URL=http://localhost:4200
```

---

# 🧩 Main Modules

## 📅 Appointment System
- Booking appointments
- Appointment status management
- Rescheduling system
- Payment-linked validation

---

## 💳 Stripe Integration
- Stripe Elements
- PaymentIntent API
- Backend payment verification
- Secure payment workflow

---

## ⭐ Reviews System
- Patients can review only paid appointments
- Rating system from 1 → 5
- Doctor reviews display

---

# 🔒 Security
- JWT Authentication
- Route Protection
- Role-Based Access Control
- Secure Backend Validation
- Protected APIs

---

# 🎯 Challenges Faced
- Handling Stripe payment states
- Synchronizing frontend & backend payment status
- Managing appointment rescheduling logic
- Dynamic dashboard rendering
- Payment verification edge cases

---

# 📈 Future Improvements
- Video Consultation
- Real-Time Notifications
- Chat System
- Medical Records Management
- Analytics Dashboard

---

# 👥 Team Project
This project was built as a team project using the **MEAN Stack**.
 hythamhanii
---

# 🌐 Repository

🔗 GitHub Repository:
https://github.com/MostafaShora/DocSphere
