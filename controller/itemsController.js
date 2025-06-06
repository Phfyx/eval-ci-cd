const items = [];

// Get all items
export const getAllItems = async (req, res) => {
    res.json(items);
};

// Get item by ID
export const getItemById = async (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
};

// Create new item
export const createItem = async (req, res) => {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });
    const newItem = { id: Date.now().toString(), name, description };
    items.push(newItem);
    res.status(201).json(newItem);
};

// Update item
export const updateItem = async (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    const { name, description } = req.body;
    if (name) item.name = name;
    if (description) item.description = description;
    res.json(item);
};

// Delete item
export const deleteItem = async (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Item not found' });
    items.splice(index, 1);
    res.status(204).send();
};