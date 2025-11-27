# Multi‑Tenant Demo Application

A small, functional demo showcasing a **basic multi-tenant architecture**, **JWT authentication**, **CRUD APIs**, and a **simple React frontend**.

---

## 🏗️ Overview

This project demonstrates how to build a minimal yet functional **multi‑tenant system** using:

* **Backend:** Django, PostgreSQL, JWT Auth
* **Frontend:** ReactJS
* **Deployment:** Railway

Both frontend and backend live inside a **single repository** for easy review.

---

## ✨ Features

### 🔐 Backend Features

* **JWT Authentication** (login + protected routes)
* **Simple Multi-Tenant Structure** using `tenant_id`
* **Tenant Isolation Logic** on all project APIs
* **CRUD API** for `Projects`

  * Create Project
  * List Projects
  * Get Project Details
  * Update Project
  * Delete Project
* **PostgreSQL Database** with simple schema

### 🖥️ Frontend Features

* Login Page
* Project List view (tenant-restricted)
* Create Project form
* View Project details
* Lightweight UI—focused on functionality

---

## 🗂️ Project Structure

```
root/
  backend/
    src/
      controllers/
      middleware/
      models/
      routes/
      utils/

  frontend/
    public/
    src/
      assets/
      components/
      layouts/
      pages/
      services/
      theme/
    package.json

  README.md
```

---

## 🛢️ Database Schema

### **Users Table**

```
id (pk)
username
first_name
last_name
email
password_hash
tenant_id 
```

### **Projects Table**

```
id (pk)
title
description
tenant_id (fk => user)
created_at
updated_at
```

**All queries are filtered using `tenant_id` from the authenticated user.**

---

## 🔑 Authentication Flow (JWT)

1. User logs in with username + password
2. Backend validates and returns a **JWT with `user_id` + `tenant_id`**
3. Frontend stores token (localStorage)
4. Every API request includes `Authorization: Bearer <token>`
5. Backend middleware extracts `tenant_id` → filters DB queries

---

## 🧠 Tenant Isolation Logic

Every protected route uses:

```
WHERE tenant_id = user.tenant_id
```

This ensures:

* User A from Tenant X **cannot** see projects of Tenant Y
* All CRUD operations are scoped per tenant

---

## 🚀 Installation & Setup

### Backend

```
cd backend
cp .env.example .env
npm install
npm run dev
```

Make sure PostgreSQL is running.

Run migrations if included:

```
pm run migrate
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment

* Backend deployed on: *https://samplepilotproject-production.up.railway.app*
* Frontend deployed on: *https://vercel.com/maizah-kaleems-projects/sample-pilot-project*

---

## 📦 Deliverables

### **1. GitHub Repository**

```
https://github.com/MaizahK/SamplePilotProject
```

### **2. Online Demo**

```
sample-pilot-project.vercel.app
```

### **3. Video Explanation**

In the video:

* Project structure
* DB schema
* API flow (frontend → backend → DB → backend → frontend)

Add your video link here:

```
https://www.loom.com/share/58c1d76a7e4645a0815a51191c1c3246
```

---

## 📞 Contact / Notes

If you have any questions or want to extend the demo, feel free to reach out.

---

### ✅ This demo is intentionally minimal but demonstrates all required multi‑tenant concepts.

---