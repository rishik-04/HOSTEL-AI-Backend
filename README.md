# 🏠 HOSTEL AI

# AI-Powered Hostel Grievance Redressal System

HOSTEL AI is an AI-powered grievance management system designed for hostels and campuses. The platform enables students to report maintenance, food, Wi-Fi, security, and cleanliness issues through a centralized system. Using Artificial Intelligence, complaints are automatically analyzed, categorized, prioritized, and checked for duplicates before being routed to the appropriate hostel authorities.

---

## 🎯 Problem Statement

Students in hostels frequently report issues such as broken lights, water leakage, Wi-Fi outages, food quality problems, and security concerns through scattered channels like WhatsApp, phone calls, or paper forms. This often leads to duplicate complaints, delayed responses, and poor accountability.

HOSTEL AI solves this problem by providing a centralized AI-powered grievance management system that automates complaint analysis, prioritization, and tracking.

---

## 📖 Project Description

HOSTEL AI is a smart complaint management platform developed for hostels and educational campuses. It helps students raise complaints digitally while enabling hostel management to efficiently monitor, assign, and resolve issues.

The system integrates Artificial Intelligence to:

- Analyze complaint content
- Detect duplicate complaints
- Predict complaint priority
- Categorize complaints automatically
- Improve complaint resolution efficiency

---

## 🚀 Features

- 👨‍🎓 Student Login & Registration
- 👨‍💼 Admin/Owner Login
- 📝 Raise Hostel Complaints
- 🤖 AI Complaint Analysis
- 🔍 Duplicate Complaint Detection
- ⚡ Complaint Priority Prediction
- 📊 Student Dashboard
- 📋 Admin Dashboard
- 📈 Complaint Tracking
- 💬 Feedback System
- 🔐 Secure JWT Authentication
- 📱 Responsive User Interface

---

## 🎯 Objectives

- Build a centralized hostel complaint management platform.
- Reduce duplicate complaints using AI.
- Automatically prioritize complaints based on urgency.
- Improve communication between students and hostel authorities.
- Enable complaint tracking and transparency.
- Provide an efficient digital grievance redressal system.

---

## 🌟 Key Highlights

- 🤖 AI-powered complaint analysis using Groq API
- 🔍 Duplicate complaint detection
- ⚡ Automatic priority prediction
- 📊 Complaint management dashboard
- 🔐 JWT-based secure authentication
- 💻 Modern React + Vite frontend
- 🚀 FastAPI AI microservice
- 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React + Vite | Frontend |
| Express.js | Backend |
| Node.js | Runtime Environment |
| MongoDB | Database |
| FastAPI | AI Service |
| Groq API | AI Complaint Analysis |
| JWT | Authentication |
| Axios | API Communication |

---

## 📂 Folder Structure

```text
HOSTEL-AI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
├── ai-service/
│   ├── main.py
│   ├── groq_ai.py
│   ├── duplicate_ai.py
│   └── requirements.txt
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/rishik-04/HOSTEL-AI-Backend.git
```

### Navigate to Project

```bash
cd HOSTEL-AI-Backend
```

---

## 🚀 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🚀 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## 🤖 AI Service Setup

```bash
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on:

```
http://localhost:8000
```

---

## 🔑 Environment Variables

### Backend

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### AI Service

Create a `.env` file inside the ai-service folder.

```env
GROQ_API_KEY=your_groq_api_key
```

⚠️ Never commit your `.env` files to GitHub.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |
| POST | /complaints | Raise Complaint |
| GET | /complaints | View Complaints |
| PUT | /complaints/:id | Update Complaint |
| DELETE | /complaints/:id | Delete Complaint |
| POST | /analyze | AI Complaint Analysis |

---

## 🧠 System Architecture

```text
                    Student

                       │

                       ▼

              React Frontend

                       │

                       ▼

             Express.js Backend

                │           │

                │           ▼

                │      MongoDB Database

                │

                ▼

         FastAPI AI Service

                │

                ▼

             Groq AI Model

                │

                ▼

 Priority Prediction + Duplicate Detection

                │

                ▼

      Response Returned to Frontend
```

---

## 🤖 AI Workflow

1. Student submits a complaint.
2. Frontend sends the complaint to the Express backend.
3. Backend stores complaint information.
4. Backend forwards complaint text to the FastAPI AI service.
5. AI service communicates with the Groq API.
6. AI predicts category and priority.
7. Duplicate complaints are detected.
8. Results are stored in MongoDB.
9. Student and Admin dashboards display the updated complaint status.

---

## 📸 Screenshots

Add screenshots of the application here.

- Login Page
- Student Dashboard
- Raise Complaint Page
- Admin Dashboard
- AI Analysis Result

---

## 🌱 Future Enhancements

- Mobile Application
- Push Notifications
- Email Alerts
- SMS Notifications
- Voice Complaint Submission
- QR Code Complaint Registration
- Analytics Dashboard
- Real-Time Complaint Updates

---

## 👥 Team

| Team Member | Responsibility |
|-------------|----------------|
| **Kotagiri Rishik** | Backend Development & Database Integration |
| **A Jathin Rao** | Frontend Development (React + Vite) |
| **Yamjala Dileep** | AI Service Development (FastAPI + Groq AI) |

---

## 📜 License

This project was developed for educational and hackathon purposes.

---

## 🙏 Acknowledgements

Special thanks to the following technologies and communities:

- React
- Vite
- Express.js
- FastAPI
- MongoDB
- Groq AI
- Node.js
- Open Source Community

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

# ❤️ Developed by Team HOSTEL AI
