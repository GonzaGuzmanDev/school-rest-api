import db from '../database/connection.js';

class TeachersController {
    // Controller methods will be implemented here
    constructor() {
        // Initialization code if needed
    }
    
    async create(req, res) {
        res.status(200).json({msg: "Create a new teacher"});
    }

    async getAll(req, res) {
        res.status(200).json({msg: "Get all teacher"});
    }

    async getById(req, res) {
        res.status(200).json({msg: "Get teacher by ID" + req.params.id});
    }

    async update(req, res) {
        res.status(200).json({msg: "update a teacher"});
    }

    async delete(req, res) {
        res.status(200).json({msg: "Delete a teacher"});
    }

}

export default new TeachersController();