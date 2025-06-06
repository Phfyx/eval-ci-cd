import { getAllItemsFromDB, getItemByIdFromDB, createItemInDB, updateItemInDB } from "../database.js";

// Get all items
export const getAllItems = async (req, res) => {
    try {
        const items = await getAllItemsFromDB();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get item by ID
export const getItemById = async (req, res) => {
    const item = await getItemByIdFromDB(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
};

// Create new item
export const createItem = async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    try {
        const newItem = await createItemInDB(name, description);
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update item
export const updateItem = async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }
    try {
        const updatedItem = await updateItemInDB(req.params.id, name, description);
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete item
export const deleteItem = async (req, res) => {
    try {
        const deleted = await deleteItemInDB(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Item not found' });
        res.status(204).send(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};