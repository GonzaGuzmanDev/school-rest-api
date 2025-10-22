import db from '../database/connection.js';

class TeachersController {
    // Controller methods will be implemented here
    constructor() {
        // Initialization code if needed
    }
    
     async create(req, res) {
            try{
                const { dni, name, lastName, email } = req.body;
                const query = 'INSERT INTO teachers (dni, name, last_name, email) VALUES (?, ?, ?, ?)';
                const values = [dni, name, lastName, email];
                const [rows] = await db.execute(query, values);
                res.status(200).json({msg: "Insert OK", rows});
            }catch(error){
                console.error('Error creating teacher:', error);
                res.status(500).json({msg: "Internal server error"});
            }
        }
    
        async getAll(req, res) {
            try{
                const [rows] = await db.execute('SELECT * FROM teachers');
                res.status(200).json(rows);
            }catch(error){
                console.error('Error fetching teachers:', error);
            }
        }
    
        async getById(req, res) {
            try{
                const { id } = req.params;
                const [rows] = await db.execute(
                    'Select * FROM teachers WHERE id = ?',
                    [id]
                )
                res.status(200).json(rows);
            }catch(e){
                console.error('Error fetching teachers by ID:', e);
            }
        }
    
        async update(req, res) {
            try{
                const { id } = req.params;
                const { dni, name, lastName, email } = req.body;
                console.log('Updating teachers with ID:', id);
                console.log('New data:', req.body);
                const query = 'UPDATE teachers SET dni = ?, name = ?, last_name = ?, email = ? WHERE id = ?';
                const values = [dni, name, lastName, email, id];
                const [rows] = await db.execute(query, values);
                res.status(200).json({msg: "Update OK", rows});
            }catch(error){
                console.error('Error updating teachers:', error);
                res.status(500).json({msg: "Internal server error"});
            }
        }
    
        async delete(req, res) {
            try{
                const id = req.params.id;
                const query = 'DELETE FROM teachers WHERE id = ?';
                const [rows] = await db.execute(query, [id]);
                res.status(200).json({msg: "Delete OK", rows});
            }catch(error){
                console.error('Error deleting teachers:', error);
                res.status(500).json({msg: "Internal server error"});
            }
        }
}

export default new TeachersController();