import express from "express";
import * as handler from "../handlers/user.js";

const router = express.Router(); // Express routes

// Define routes related to users
router.get("/", handler.handleListUsers);           // GET  /users
router.get("/:id", handler.handleGetUserById);      // GET  /users/:id
router.post("/", handler.handleCreateNewUser);      // POST /users
router.put("/:id", handler.handleUpdateUser);       // POST /users/:id
router.delete("/:id", handler.handleDeleteUser);    // POST /users/:id

export default router;
