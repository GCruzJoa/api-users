const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', usuariosRoutes);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});