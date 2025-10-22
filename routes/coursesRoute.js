import { Router } from "express";
import courseController from "../controllers/coursesController.js";

const router = Router();

router.post("/", courseController.create);

router.get("/", courseController.getAll);

router.route("/:id")
    .get(courseController.getById)
    .put(courseController.update)
    .delete(courseController.delete);

export default router;