import { pool } from "../database/config.js";
import * as query from "../database/query.js";

// Handler for listing all users
export const handleListUsers = async (req, res, next) => {
  try {
    const [users] = await pool.query(query.listUserQuery);
    res.send(users);
  } catch (error) {
    next(error);
  }
};

// Handler for getting a user by ID
export const handleGetUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [user] = await pool.query(query.listUserByIdQuery, [id]);

    if (!user || user.length == 0) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send(user);
  } catch (error) {
    next(error);
  }
};

// Handler for creating a new user
export const handleCreateNewUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const [newUser] = await pool.query(query.createuserQuery, [name, email, age ]);
    const id = newUser.insertId;

    if (!id) {
      return res.status(404).send({ error: "User not found" });
    }

    const [user] = await pool.query(query.listUserByIdQuery, [id]);

    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

// Handler for updating a user by ID
export const handleUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const [result] = await pool.query(query.updateUserQuery, [name, email, age, id]);

    if (result.affectedRows == 0) {
      return res.status(404).send({ error: "User not found" });
    }

    const [updatedUser] = await pool.query(query.listUserByIdQuery, [id]);
    res.send(updatedUser); 
  } catch (error) {
    next(error);
  }
};

// Handler for deleting a user by ID
export const handleDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(query.deleteUserQuery, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
