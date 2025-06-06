import { Router } from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem } from "../controllers/itemsController.js";

const router = Router();

// Define routes for items
router.get("/", getItems); // Get all items
router.get("/:id", getItemById); // Get item by ID
router.post("/", createItem); // Create new item
router.put("/:id", updateItem); // Update item by ID
router.delete("/:id", deleteItem); // Delete item by ID

// Export the router
export default router;