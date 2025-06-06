import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mohamed',
    database: 'items'
}).promise();

// Function to get a connection from the pool

export const getAllItemsFromDB = async () => {
    const [rows] = await pool.query('SELECT * FROM item');
    return rows;
};

export const getItemByIdFromDB = async (id) => {
    const [rows] = await pool.query('SELECT * FROM item WHERE id = ?', [id]);
    return rows[0];
};

export const createItemInDB = async (name, description) => {
    const [result] = await pool.query('INSERT INTO item (name, description) VALUES (?, ?)', [name, description]);
    return { id: result.insertId, name, description };
}

export const updateItemInDB = async (id, name, description) => {
    await pool.query('UPDATE item SET name = ?, description = ? WHERE id = ?', [name, description, id]);
    return { id, name, description };
};

export const deleteItemInDB = async (id) => {
    const [result] = await pool.query('DELETE FROM item WHERE id = ?', [id]);
    return result.affectedRows > 0;
}