import db from '../database/connection.js';

class CoursesController {
    // Controller methods will be implemented here
    constructor() {
        // Initialization code if needed
    }
    
    async create(req, res) {
        res.status(200).json({msg: "Create a new course"});
    }

    async getAll(req, res) {
        res.status(200).json({msg: "Get all courses"});
    }

    async getById(req, res) {
        res.status(200).json({msg: "Get course by ID" + req.params.id});
    }

    async update(req, res) {
        res.status(200).json({msg: "update a course"});
    }

    async delete(req, res) {
        res.status(200).json({msg: "Delete a course"});
    }

}

export default new CoursesController();