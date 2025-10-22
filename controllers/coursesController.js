import db from '../database/connection.js';

class CoursesController {
    // Controller methods will be implemented here
    constructor() {
        // Initialization code if needed
    }
    
    async create(req, res) {
        const [teacherRows] = await db.execute('SELECT * FROM teachers WHERE id = ?', [req.body.teacherId]);
        if (teacherRows.length === 0) {
            return res.status(400).json({ msg: "Invalid teacher ID" });
        }

        const { name, description, teacherId } = req.body;
        const query = 'INSERT INTO courses (name, description, teacher_id) VALUES (?, ?, ?)';
        const values = [name, description, teacherId];
        try {
            const [rows] = await db.execute(query, values);
            res.status(200).json({msg: "Insert course OK", rows});
        }catch(error){
            console.error('Error creating course:', error);
            res.status(500).json({msg: "Internal server error"});
        }
    }

    async getAll(req, res) {
        const query = 'SELECT * FROM courses';
        try{
            const [rows] = await db.execute(query);
            res.status(200).json(rows);
        }catch(e){
            console.error('Error fetching courses:', e);
        }
    }

    async getById(req, res) {
        const id = req.params.id;
        const query = 'SELECT * FROM courses WHERE id = ?';
        try{
            const [rows] = await db.execute(query, [id]);
            res.status(200).json(rows);
        }catch(e){
            console.error('Error fetching course by ID:', e);
        }
    }

    async update(req, res) {
        res.status(200).json({msg: "update a course"});
    }

    async delete(req, res) {
        res.status(200).json({msg: "Delete a course"});
    }

}

export default new CoursesController();