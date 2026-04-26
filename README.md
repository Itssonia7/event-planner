

# Event Planner Application

[cite_start]A high-fidelity, full-stack event management system built to fulfill **Problem Statement 5** of the Web Design and Development Laboratory (2025-26)[cite: 32, 33]. [cite_start]This application features a modern **Neumorphic UI**, secure **JWT Authentication**, and automated **Email Notifications**[cite: 37, 39, 40].

## 🚀 Features

* [cite_start]**User Authentication**: Secure Login and Registration using JSON Web Tokens (JWT)[cite: 37].
* [cite_start]**Role-Based Access Control (RBAC)**: Distinct permissions for `Admin` and `User` roles[cite: 37].
    * [cite_start]**Admins**: Can create, edit, and delete events[cite: 38].
    * [cite_start]**Users**: Can view events and register for them[cite: 38, 39].
* [cite_start]**Event Registration**: One-click registration logic that links users to events in a MySQL database[cite: 39].
* [cite_start]**Email Notifications**: Automated confirmation emails sent via **Nodemailer** (integrated with Ethereal SMTP) upon successful registration[cite: 40].
* **Modern UI/UX**: Professional Neumorphic design language with soft shadows and intuitive navigation.

## 🛠️ Tech Stack

* [cite_start]**Frontend**: React.js, Bootstrap (for layout), and Custom CSS (Neumorphism)[cite: 4].
* [cite_start]**Backend**: Node.js, Express.js[cite: 4, 5].
* [cite_start]**Database**: MySQL[cite: 4].
* [cite_start]**Authentication**: JWT (jsonwebtoken)[cite: 37].
* [cite_start]**Email Service**: Nodemailer[cite: 40].

## 📂 Project Structure

```text
event-planner/
├── client/           # React Frontend
│   ├── src/
│   │   ├── Login.js      # JWT Login Component
│   │   ├── Register.js   # User Signup Component
│   │   ├── EventList.js  # Event Fetching & Registration Logic
│   │   └── App.js        # Routing & Neumorphic Styling
├── server/           # Node.js Backend
│   ├── config/       # Database connection
│   ├── controllers/  # Logic for Auth and Events
│   ├── middleware/   # JWT & Admin verification
│   ├── routes/       # API Endpoint definitions
│   └── .env          # Environment variables (DB, JWT, Email)
```

## ⚙️ Setup Instructions

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Itssonia7/event-planner.git
    cd event-planner
    ```

2.  **Database Configuration**:
    * Create a MySQL database named `event_planner_db`.
    * Run the provided schema to create `users`, `events`, and `registrations` tables.

3.  **Environment Variables**:
    * Create a `.env` file in the `server` folder.
    * Add your `DB_USER`, `DB_PASS`, `JWT_SECRET`, and Ethereal email credentials.

4.  **Install Dependencies & Run**:
    * **Backend**: `cd server && npm install && node index.js`
    * **Frontend**: `cd client && npm install && npm start`

## 📝 Problem Statement 5 Compliance
[cite_start]This project implements the following requirements from the WCE CSE Department[cite: 35]:
* [cite_start]Event details management (Name, Date, Location, Description)[cite: 36].
* [cite_start]Admin-only CRUD operations[cite: 38].
* [cite_start]Public event display and user registration[cite: 38, 39].
* [cite_start]Automated email notification system[cite: 40].

---

**Developed by**: Sonia  
[cite_start]**Course**: B.Tech CSE (Year 2) - WCE Sangli [cite: 1, 2, 33]
