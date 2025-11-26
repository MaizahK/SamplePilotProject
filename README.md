# Multi‑Tenant Demo Application

A small, functional demo showcasing a **basic multi-tenant architecture**, **JWT authentication**, **CRUD APIs**, and a **simple React/Next.js frontend**.

---

## 🏗️ Overview

This project demonstrates how to build a minimal yet functional **multi‑tenant system** using:

* **Backend:** Node.js/Express (or any framework you used), PostgreSQL, JWT Auth
* **Frontend:** React or Next.js
* **Deployment:** Your choice (Vercel, Render, Railway, etc.)

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
    .env.example
    package.json

  frontend/
    src/
      components/
      pages/ (Next.js) OR routes/ (React)
    package.json

  README.md
```

---

## 🛢️ Database Schema

### **Users Table**

```
id (pk)
email
password_hash
tenant_id (fk)
```

### **Tenants Table**

```
id (pk)
name
```

### **Projects Table**

```
id (pk)
title
description
tenant_id (fk => tenants)
created_at
updated_at
```

**All queries are filtered using `tenant_id` from the authenticated user.**

---

## 🔑 Authentication Flow (JWT)

1. User logs in with email + password
2. Backend validates and returns a **JWT with `user_id` + `tenant_id`**
3. Frontend stores token (localStorage or cookies)
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

* Backend deployed on: *<your deployment link here>*
* Frontend deployed on: *<your deployment link here>*

---

## 📦 Deliverables

### **1. GitHub Repository**

Provide the link here:

```
<your GitHub repository link>
```

### **2. Online Demo**

```
<your deployed app link>
```

### **3. Video Explanation (3–5 minutes)**

In the video, explain:

* Project structure
* Tenant isolation logic
* DB schema
* API flow (frontend → backend → DB → backend → frontend)

Add your video link here:

```
<your Loom video link>
```

---

## 📞 Contact / Notes

If you have any questions or want to extend the demo, feel free to reach out.

---

### ✅ This demo is intentionally minimal but demonstrates all required multi‑tenant concepts.
# Multi‑Tenant Demo Application

A small, functional demo showcasing a **basic multi-tenant architecture**, **JWT authentication**, **CRUD APIs**, and a **simple React/Next.js frontend**.

---

## 🏗️ Overview

This project demonstrates how to build a minimal yet functional **multi‑tenant system** using:

* **Backend:** Node.js/Express (or any framework you used), PostgreSQL, JWT Auth
* **Frontend:** React or Next.js
* **Deployment:** Your choice (Vercel, Render, Railway, etc.)

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
    .env.example
    package.json

  frontend/
    src/
      components/
      pages/ (Next.js) OR routes/ (React)
    package.json

  README.md
```

---

## 🛢️ Database Schema

### **Users Table**

```
id (pk)
email
password_hash
tenant_id (fk)
```

### **Tenants Table**

```
id (pk)
name
```

### **Projects Table**

```
id (pk)
title
description
tenant_id (fk => tenants)
created_at
updated_at
```

**All queries are filtered using `tenant_id` from the authenticated user.**

---

## 🔑 Authentication Flow (JWT)

1. User logs in with email + password
2. Backend validates and returns a **JWT with `user_id` + `tenant_id`**
3. Frontend stores token (localStorage or cookies)
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

* Backend deployed on: *<your deployment link here>*
* Frontend deployed on: *<your deployment link here>*

---

## 📦 Deliverables

### **1. GitHub Repository**

Provide the link here:

```
<your GitHub repository link>
```

### **2. Online Demo**

```
<your deployed app link>
```

### **3. Video Explanation (3–5 minutes)**

In the video, explain:

* Project structure
* Tenant isolation logic
* DB schema
* API flow (frontend → backend → DB → backend → frontend)

Add your video link here:

```
<your Loom video link>
```

---

## 📞 Contact / Notes

If you have any questions or want to extend the demo, feel free to reach out.

---

### ✅ This demo is intentionally minimal but demonstrates all required multi‑tenant concepts.
