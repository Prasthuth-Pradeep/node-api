import express from "express";
import user from "./src/routes/user.js"; // User routes

const app = express(); // Express app
app.use(express.json()); // JSON handling for POST 

// Use the user for /users path ( http://localhost:3000/user )
app.use("/user", user);

// Centralized error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
