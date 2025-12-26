# Trip Sync

Trip Sync is an AI-powered trip planning and navigation assistant designed to make your journey smoother and smarter. It combines intelligent route planning, real-time navigation, and personalized recommendations for stays and attractions.

## Features

- **AI Assistant ("Sakha")**: Chat with an AI companion to plan your trips, get advice, and find locations.
- **Smart Navigation**: Real-time turn-by-turn navigation using Google Maps.
- **Trip Planner**: Plan multi-stop trips, find hotels ("Stays"), and discover tourist attractions.
- **Add Stops**: Easily add intermediate stops (Petrol, Food, etc.) or search for specific places along your route.
- **User Accounts**: Secure login/signup to save your favorite routes and trip history.

## Tech Stack

### Client (Frontend)
-   **Framework**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   **Maps**: [Google Maps Platform](https://developers.google.com/maps) (`@react-google-maps/api`)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS (presumed) / CSS

### Server (Backend)
-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: MongoDB (via [Mongoose](https://mongoosejs.com/))
-   **Authentication**: JWT & Bcrypt

## Setup & Installation

### Prerequisites
-   Node.js (v16+)
-   MongoDB (Local or Atlas URI)
-   Google Maps API Key (Enabled APIs: Maps JavaScript, Places, Directions, Geocoding)

### 1. Clone the Repository
```bash
git clone https://github.com/pushpam2404/Trip_Sync.git
cd Trip_Sync
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_SERVER_URL=http://localhost:3000
```

Start the frontend development server:
```bash
npm run dev
```

## Usage

1.  Open the frontend URL (usually `http://localhost:5173`).
2.  Sign up or Log in.
3.  Use **My Planner** to create a trip (Origin -> Destination).
4.  Use **Sakha** to ask for travel tips.
5.  Start **Navigation** to see the map and route.
6.  Use **Add Stop** to find amenities on the way.

## Deploying

This project is configured for deployment on platforms like Vercel (Frontend) and Render/Heroku (Backend).
-   **Frontend**: Connect your GitHub repo to Vercel. Ensure `VITE_GOOGLE_MAPS_API_KEY` is set in the Vercel Environment Variables.
-   **Backend**: Deploy the `server` folder to a Node.js host.
