# Proyecto - API REST de Películas y Series 
Este es un proyecto de Backend desarrollado con **Node.js** y **Express** para la gestion de contenidos multimedia, utilizando **MongoDB Atlas** como base de datos en la nube. 
---
### Instalación y configuración:
1. **Clonar este repositorio**
    ```bash 
    git clone *url*

2. **Instalar Dependencias**
    Accede a la carpeta `backend`y ejecuta:
    ```bash
    npm install
    ```
3. **Configurar variable de entorno**
    Crear un archivo llamado `.env` y añade tu URI de conexión a MongoDB:
    ```text
    PORT=4000
    MONGO_URI=mongodb+srv://USUARIO:CONTRASEÑA@cluster0.j2rea4d.mongodb.net/NOMBRE_DB?retrywrites=true&w=majority&appName=Cluster0
    ```
----
### Como ejecutar el proyecto 
Para iniciar el servidor en modo desarrollo (con **Nodemon**)
```bash
npm run dev