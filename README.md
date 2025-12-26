# 🗺️ Trip Sync

**Trip Sync** is your intelligent travel companion, designed to simplify trip planning and enhance your on-road experience. By combining AI-driven advice with robust real-time navigation, Trip Sync ensures every journey is smooth, memorable, and hassle-free.

---

## � Overview

Trip Sync solves the common chaos of travel planning by integrating three core pillars into one seamless application:
1.  **AI Assistance ("Sakha")**: A conversational AI that acts as your personal travel guide.
2.  **Visual Trip Planning**: A dedicated planner to discover hotels, resorts, and attractions before you even start the car.
3.  **Real-Time Navigation**: Turn-by-turn navigation that allows you to add stops (like petrol pumps or restaurants) dynamically along your route.

Whether you are planning a weekend getaway or a long road trip, Trip Sync keeps your itinerary synchronized and accessible.

---

## 🌟 Key Features

### 🤖 AI Travel Assistant (Sakha)
-   **Chat Interface**: Ask for personalized recommendations, travel tips, or local secrets.
-   **Context Aware**: Understands your destination and provides relevant advice.

### 📍 Smart Navigation
-   **Turn-by-Turn Directions**: Powered by Google Maps Platform for accurate routing.
-   **Dynamic Routing**: Real-time updates based on traffic and road conditions.
-   **Live Location**: Tracks your current position to guide you effectively.

### 🏨 Trip Planner
-   **Stays & Accommodation**: Search for top-rated hotels and resorts near your destination.
-   **Tourist Attractions**: Discover must-visit spots with photos and ratings.
-   **Visual Itinerary**: Organize your trip step-by-step.

### ⛽ Add Stops Feature
-   **Nearby Amenities**: Quickly find and add essentials like **Petrol Pumps**, **Restaurants**, **Rest Stops**, and **Cafes** to your active route.
-   **Search Along Route**: Search for specific brands (e.g., "McDonald's" or "Shell") and add them as waypoints without losing your final destination.

### 🔐 User Personalization
-   **Secure Accounts**: Sign up/Login to sync your data across devices.
-   **Trip History**: Save and review your past journeys.
-   **Saved Places**: Bookmark your favorite destinations.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, TS | Fast, modern web application built with TypeScript. |
| **Maps** | Google Maps Platform | `@react-google-maps/api` for rendering maps and routing. |
| **Backend** | Node.js, Express.js | Scalable RESTful API architecture. |
| **Database** | MongoDB + Mongoose | Flexible document storage for trips and user data. |
| **Authentication** | JWT, Bcrypt | Secure, stateless authentication. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid UI development. |

---

## 📂 Project Structure

```bash
Trip_Sync/
├── client/                 # Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Maps, Modals, etc.)
│   │   ├── contexts/       # React Context (Auth, App State)
│   │   ├── screens/        # Page views (Navigation, Planner, Sakha)
│   │   ├── services/       # API calls (MapService, BackendService)
│   │   └── utils/          # Helper functions
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
├── server/                 # Backend API
│   ├── src/
│   │   ├── config/         # Database connection logic
│   │   ├── controllers/    # Request handlers (Auth, Trips)
│   │   ├── middleware/     # Auth protection middleware
│   │   ├── models/         # Mongoose User/Trip models
│   │   └── routes/         # API Endpoint definitions
│   ├── package.json        # Backend dependencies
│   └── tsconfig.json       # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Local Development Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
1.  **Node.js** (v18 or higher recommended)
2.  **MongoDB** (Local instance or MongoDB Atlas Connection URI)
3.  **Google Maps API Key** (Enabled APIs: Maps JavaScript, Places, Directions, Geocoding)

### 1. Clone the Repository
```bash
git clone https://github.com/Pushpam-2404/Trip_Sync.git
cd Trip_Sync
```

### 2. Backend Setup
1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server` directory:
    ```env
    PORT=3000
    MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/tripsync
    JWT_SECRET=your_super_secret_jwt_key
    ```
4.  Start the server:
    ```bash
    npm run dev
    ```
    *(Runs on http://localhost:3000)*

### 3. Frontend Setup
1.  Navigate to the client directory:
    ```bash
    cd ../client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `client` directory:
    ```env
    VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    VITE_SERVER_URL=http://localhost:3000
    ```
4.  Start the application:
    ```bash
    npm run dev
    ```
    *(Runs on http://localhost:5173)*

---

## � API Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/signup` | Register a new user account. |
| **POST** | `/api/auth/login` | Authenticate existing user and receive JWT. |
| **GET** | `/api/trips` | Fetch all trips created by the logged-in user. |
| **POST** | `/api/trips` | Save a new trip itinerary. |
| **PUT** | `/api/trips/:id` | Update details of an existing trip. |
| **GET** | `/api/saved-routes` | Retrieve favorite/saved routes. |
| **POST** | `/api/saved-routes` | Bookmark a route for quick access. |

---

## 🔑 Demo Credentials

To quickly test the application, you can use these test credentials (or sign up as a new user):

-   **Email**: `demo@tripsync.com`
-   **Password**: `password123`

*(Note: If running locally with a fresh database, please **Sign Up** first to create this user!)*

---

## ☁️ Deployment Guide

### Frontend (Vercel)
1.  Push code to GitHub.
2.  Import repository in **Vercel**.
3.  Set **Root Directory** to `client`.
4.  Add Environment Variable: `VITE_GOOGLE_MAPS_API_KEY`.

### Backend (Render / Railway)
1.  Create a new Web Service.
2.  Connect GitHub repostory.
3.  Set **Root Directory** to `server`.
4.  Add Environment Variables: `MONGO_URI`, `JWT_SECRET`.

---

*Built with ❤️ by Pushpam Raj Satyarthi*