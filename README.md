# 30 Days MERN Challenge

This repository contains my 30-day journey learning and building projects using the **MERN stack**, focusing on backend APIs, frontend apps, and full-stack projects.

---

## Tech Stack

- **MongoDB** – NoSQL database for storing data
- **Express.js** – Backend framework for building APIs
- **React.js** – Frontend library for building UIs
- **Node.js** – Backend runtime environment
- **Tailwind CSS** – Utility-first CSS framework for styling

---

## Progress / Projects

| Day | Project                           | Description                                  |
| --- | --------------------------------- | -------------------------------------------- |
| 1   | Server Setup & Basic API          | Setup Node.js server and Express routes      |
| 2   | Express Server with Routing       | Created structured routes for APIs           |
| 3   | Notes CRUD API                    | Built Notes API with full CRUD functionality |
| 4   | Notes API + Database Integration  | Integrated MongoDB for persistent storage    |
| 5   | Todo API (Production Level)       | Full-featured Todo API with validation       |
| 6   | Clean & Scalable API Architecture | Refactored APIs for maintainability          |
| 7   | Todo API Documentation            | Wrote professional README & API docs         |

---

## Day 7 — Todo API Documentation

## How to Test

- Use Postman or Thunder Client to test API endpoints.  
- Make sure your backend server is running on http://localhost:5000

### ➤ Create Todo
**POST** `/api/todos`

**Request Body:**
```json
{
  "title": "Learn Backend"
}

Response:

{
  "_id": "123",
  "title": "Learn Backend",
  "completed": false
}

Error Response:

{
  "error": "Title is required"
}


➤ Get All Todos

GET /api/todos

Response:

[
  {
    "_id": "123",
    "title": "Learn Backend",
    "completed": false
  },
  {
    "_id": "124",
    "title": "Learn MERN",
    "completed": true
  }
]


➤ Update Todo

PUT /api/todos/:id

Request Body:

{
  "title": "Learn MERN",
  "completed": true
}

Response:

{
  "_id": "123",
  "title": "Learn MERN",
  "completed": true
}

Error Response:

{
  "error": "Todo not found"
}


➤ Delete Todo

DELETE /api/todos/:id

Response:

{
  "message": "Todo deleted successfully"
}

Error Response:

{
  "error": "Todo not found"
}

