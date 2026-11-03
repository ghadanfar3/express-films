import express from "express";
import Genre from "../models/Genre.js";
import createCrudController from "../controllers/createCrudController.js";

const router = express.Router();
const controller = createCrudController(Genre);

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
