# 📌 Assignment Task: Building a Healthcare Backend

## 🎯 Objective

The goal of this assignment is to create a backend system for a healthcare application using **Node.js**, **Express.js**, and **PostgreSQL**. The system should allow users to register, log in, and manage patient and doctor records securely.

Try To add small git commits for git tracking.

---

## ⚙️ Requirements

* Use **Node.js** with **Express.js** for backend.
* Use **PostgreSQL** as the database (via Sequelize / Prisma / pg).
* Implement **JWT authentication** for user security.
* Create **RESTful API endpoints** for managing patients and doctors.
* Use **ORM (Sequelize/Prisma/TypeORM)** for database modeling.
* Implement **error handling** and **input validation**.
* Use **environment variables** for sensitive configurations (`.env`).

---

## 📡 APIs to be Implemented

### 1. Authentication APIs

* `POST /api/auth/register` → Register a new user with **name, email, and password**.
* `POST /api/auth/login` → Log in a user and return a **JWT token**.

### 2. Patient Management APIs

* `POST /api/patients/` → Add a new patient (**Authenticated users only**).
* `GET /api/patients/` → Retrieve all patients created by the authenticated user.
* `GET /api/patients/:id` → Get details of a specific patient.
* `PUT /api/patients/:id` → Update patient details.
* `DELETE /api/patients/:id` → Delete a patient record.

### 3. Doctor Management APIs

* `POST /api/doctors/` → Add a new doctor (**Authenticated users only**).
* `GET /api/doctors/` → Retrieve all doctors.
* `GET /api/doctors/:id` → Get details of a specific doctor.
* `PUT /api/doctors/:id` → Update doctor details.
* `DELETE /api/doctors/:id` → Delete a doctor record.

### 4. Patient-Doctor Mapping APIs

* `POST /api/mappings/` → Assign a doctor to a patient.
* `GET /api/mappings/` → Retrieve all patient-doctor mappings.
* `GET /api/mappings/:patient_id` → Get all doctors assigned to a specific patient.
* `DELETE /api/mappings/:id` → Remove a doctor from a patient.

---

## 🛠️ Instructions

* Set up a **Node.js project** with **Express.js**.
* Use **PostgreSQL** with ORM (Sequelize/Prisma).
* Implement authentication using **JWT**.
* Secure patient and doctor-related endpoints with **authentication middleware**.
* Follow best practices for project structure (`controllers`, `routes`, `models`, `middlewares`).
* Test all API endpoints using **Postman** or an API client.

---

## ✅ Expected Outcome

* Users should be able to **register and log in**.
* Authenticated users should be able to **add and manage patient and doctor records**.
* Patients should be **assigned to doctors**.
* Data should be stored securely in **PostgreSQL**.

---

## 📋 Developer Checklist

* [ ] Initialize Node.js project (`npm init`)
* [ ] Install dependencies: `express`, `pg`, `sequelize` (or `prisma`), `jsonwebtoken`, `bcrypt`, `dotenv`, `nodemon`
* [ ] Set up **PostgreSQL database** connection
* [ ] Create **User model** (with hashed password)
* [ ] Implement **Register API**
* [ ] Implement **Login API** (JWT generation)
* [ ] Set up **Auth middleware** to protect routes
* [ ] Create **Patient model + CRUD APIs**
* [ ] Create **Doctor model + CRUD APIs**
* [ ] Create **Mapping model + APIs** (patient-doctor relationship)
* [ ] Add **error handling middleware**
* [ ] Use **environment variables** (`.env`) for secrets and DB config
* [ ] Test all endpoints in **Postman**
* [ ] Final check before submission

---