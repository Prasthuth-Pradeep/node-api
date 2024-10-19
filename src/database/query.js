const listUserQuery = `SELECT * FROM users`;
const listUserByIdQuery = `SELECT * FROM users WHERE id = ?`;
const createuserQuery = `INSERT INTO users ( name, email, age ) VALUES ( ?, ?, ? )`;
const updateUserQuery = `UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?`;
const deleteUserQuery = `DELETE FROM users WHERE id = ?`;

export { listUserQuery, listUserByIdQuery, createuserQuery, updateUserQuery, deleteUserQuery };
