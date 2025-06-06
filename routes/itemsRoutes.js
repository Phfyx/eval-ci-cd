import { Router } from "express";
import { getAllItems, getItemById, createItem, updateItem, deleteItem } from "../controller/itemsController.js";

const router = Router();

// Define routes for items
router.get("/", getAllItems); // Get all items
router.get("/:id", getItemById); // Get item by ID
router.post("/", createItem); // Create new item
router.put("/:id", updateItem); // Update item by ID
router.delete("/:id", deleteItem); // Delete item by ID

// Export the router
export default router;