import { Router } from "express";
import teachersController from "../controllers/teachersController.js";

const router = Router();

router.post("/", teachersController.create);

router.get("/", teachersController.getAll);

router.route("/:id")
    .get(teachersController.getById)
    .put(teachersController.update)
    .delete(teachersController.delete);

export default router;