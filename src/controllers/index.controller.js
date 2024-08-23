const e = require('express');
const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'firstapi',
    port: 5432
});

const ObtenerUsuario = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const ObtenerUsuarioporID = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows);
}

const CrearUsuario = async (req, res) => {
    const {nombre, email} = req.body;
    
    const response = await pool.query('INSERT INTO users (nombre, email) VALUES ($1, $2)', [nombre, email])
    console.log(response);
    res.json({
        message: 'User created successfully',
        body:{
            user: {nombre,email}
        }
    })
}

const ActualizarUsuario = async (req, res) => {
    const id = req.params.id
    const {nombre, email} = req.body;
    console.log(id,nombre,email)
    const response = await pool.query('UPDATE users SET nombre = $1, email = $2 WHERE id = $3', [
        nombre,
        email,
        id
    ])
    console.log(response)
    res.json('El usuario se ha actualizado')

}

const EliminarUsuario = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response)
    res.json(`Usuario ${id} se ha eliminado`)
}

module.exports = {
    ObtenerUsuario,
    ObtenerUsuarioporID,
    CrearUsuario,
    EliminarUsuario,
    ActualizarUsuario
}