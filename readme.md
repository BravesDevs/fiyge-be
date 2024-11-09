# Form Builder Backend

This is the backend service for a form builder application. It uses **Node.js**, **Express**, and **MongoDB** (with Mongoose) to handle and store form data, supporting API endpoints for saving and retrieving form configurations.

## 📂 Project Structure

```
.
├── config          # Configuration files (e.g., database setup)
├── controllers     # Controllers for handling API requests
├── models          # Mongoose models for MongoDB collections
├── routes          # API route definitions
├── app.js          # Main app file, where Express is configured
└── README.md       # Project README
```

## Prerequisites

- **Node.js**: >= v14.x
- **MongoDB**: A running MongoDB instance (local or hosted)

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/BravesDevs/fiyge-be.git
   cd fiyge-be
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/form-builder
   ```

   Replace the `MONGODB_URI` value with your MongoDB connection string.

4. **Start the server**:

   ```bash

   npm start
   ```

   The server should now be running at `http://localhost:3000`.

## Sample ENV

```env
PORT=3000
MONGODB_ATLAS_URL=mongodb://localhost:27017/form-builder -- Replace with your MongoDB connection string
APP_NAME=Form Builder
```
