import { Router } from "express";
import studentsController from "../controllers/studentsController.js";

const router = Router();

router.post("/", studentsController.create);

router.get("/", studentsController.getAll);

router.route("/:id")
    .get(studentsController.getById)
    .put(studentsController.update)
    .delete(studentsController.delete);

export default router;