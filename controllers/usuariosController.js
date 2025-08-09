const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/usuarios.json');

function leerUsuarios() {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
}

function guardarUsuarios(usuarios) {
    fs.writeFileSync(dataPath, JSON.stringify(usuarios, null, 4));
}

exports.obtenerUsuarios = (req, res) => {
    const usuarios = leerUsuarios();
    res.json(usuarios);
};

exports.obtenerUsuario = (req, res) => {
    const usuarios = leerUsuarios();
    const usuario = usuarios.find(u => u.id == parseInt(req.params.id));
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
};

exports.crearUsuario = (req, res) => {
    const usuarios = leerUsuarios();
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const nuevoUsuarios = {
        id: usuarios.length ? usuarios[usuarios.length -1].id + 1 : 1,
        user,
        password
    };

    usuarios.push(nuevoUsuarios);
    guardarUsuarios(usuarios);
    res.status(201).json(nuevoUsuarios);
};

exports.actualizarUsuario = (req, res) => {
    const usuarios = leerUsuarios();
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    usuarios[index] = { ...usuarios[index], ...req.body };
    guardarUsuarios(usuarios);
    res.json(usuarios[index]);
};

exports.eliminarUsuario = (req, res) => {
    let usuarios = leerUsuarios();
    const nuevoArray = usuarios.filter(u => u.id !== parseInt(req.params.id));

    if(usuarios.length === nuevoArray.length) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    guardarUsuarios(nuevoArray);
    res.json({ message: 'Usuario eliminado'});
}