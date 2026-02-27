<div align="center">

# 🍅 Tomato: Full-Stack Food Delivery App

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.JS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-5433FF?style=for-the-badge&logo=stripe&logoColor=white)

<p align="center">
    A premium MERN stack application featuring a seamless food ordering experience, secure payments, and a powerful administration dashboard.
    <br />
    <a href="https://github.com/thehouseofballoons/tomato-app"><strong>Explore the docs »</strong></a>
</p>
</div>

---

## 🏗️ Project Structure

The project is divided into three main specialized directories:

* **`frontend/`** – The user-facing store built with **React** and **Vite**. Features the menu, cart, and checkout.
* **`backend/`** – **Node.js** and **Express** server handling API requests, authentication, and database logic.
* **`admin/`** – A separate **React** dashboard for restaurant owners to manage food items and track orders.

---

## ✨ Key Features

### 🛒 Customer Experience
* **Interactive Menu:** Filterable categories with smooth UI transitions.
* **Shopping Cart:** Real-time quantity updates and persistent storage.
* **Secure Payments:** Full **Stripe API** integration for credit card processing.
* **User Accounts:** Secure Login/Signup with **JWT** (JSON Web Tokens).

### 🛠️ Administration Panel
* **Inventory Control:** Effortlessly add, update, or remove food items.
* **Order Management:** Real-time status updates (Food Processing -> Out for Delivery -> Delivered).
* **Image Uploads:** Automated handling of product images for the menu.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React 18, Vite, Axios, React-Router-DOM |
| **Backend** | Node.js, Express.js, Mongoose |
| **Database** | MongoDB Atlas |
| **Payments** | Stripe Gateway |
| **UI/UX** | CSS3, React-Toastify (Notifications) |

---

## 🚀 Getting Started

### 1. Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* A [Stripe](https://stripe.com/) account for API keys
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster

### 2. Installation
```bash
# Clone the repository
git clone [https://github.com/thehouseofballoons/tomato-app.git](https://github.com/thehouseofballoons/tomato-app.git)

# Navigate to the project
cd tomato-app
