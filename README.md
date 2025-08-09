# 📌 Convertidor de Excel a JSON + API de Usuarios

Este proyecto incluye:
- Un script en Node.js para convertir un archivo **Excel** con datos de clientes a un **JSON** listo para usarse en pruebas con **Cypress**.
- Una **API REST** simple para gestionar usuarios (CRUD), almacenados en un archivo JSON.
- Ejemplos de pruebas con **Postman**.

---

## 🚀 Tecnologías utilizadas
- Node.js
- Express.js
- XLSX (para leer archivos Excel)
- Nodemon (para desarrollo)
- Cypress (para pruebas automatizadas)

---

## ⚙️ Instalación
# Clonar repositorio
```
git clone https://github.com/tu-usuario/tu-repo.git
```

# Entrar al directorio
```
cd tu-repo
```

# Instalar dependencias
```
npm install
```

▶️ Ejecución
Para levantar el servidor en desarrollo:
```
npm run dev
```

📬 Endpoints de la API

| Método | Endpoint        | Descripción              |
| ------ | --------------- | ------------------------ |
| GET    | `/usuarios`     | Lista todos los usuarios |
| GET    | `/usuarios/:id` | Obtiene usuario por ID   |
| POST   | `/usuarios`     | Crea un nuevo usuario    |
| PUT    | `/usuarios/:id` | Actualiza un usuario     |
| DELETE | `/usuarios/:id` | Elimina un usuario       |

