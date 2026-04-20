# MiniCore – Sistema de Gestión de Comisiones y Ventas

Este proyecto es una aplicación web full-stack desarrollada con **Laravel (backend)** y **React (frontend)**. El sistema permite gestionar vendedores, ventas y el cálculo de comisiones en base a reglas predefinidas y rangos de fechas.

Actualmente el proyecto se encuentra en una fase de **despliegue híbrido**:

- Frontend desplegado en Vercel  
- Backend en ejecución local (Laravel API)  
- Base de datos MySQL en entorno local  

---

## 🚀 Funcionalidades principales

- Registro y gestión de vendedores.
- Registro de ventas asociadas a cada vendedor.
- Definición de reglas de comisión dinámicas.
- Cálculo automático de comisiones por rango de fechas.
- Filtrado de datos mediante API REST.
- Interfaz moderna desarrollada en React.
- Comunicación frontend–backend mediante consumo de API.

---

## 🧱 Arquitectura del sistema

Frontend (React - Vercel)  
&nbsp;&nbsp;&nbsp;&nbsp;↓ consumo API REST  
Backend (Laravel API - Localhost)  
&nbsp;&nbsp;&nbsp;&nbsp;↓  
Base de datos (MySQL local)

---

## ⚠️ Nota sobre el entorno actual

El sistema se encuentra en modo de desarrollo híbrido:

- El frontend está disponible públicamente en Vercel.
- El backend debe estar ejecutándose localmente para que el sistema funcione correctamente.
- La base de datos MySQL también se ejecuta en entorno local.

Esto es temporal hasta el despliegue completo del backend en producción.

---

## 📦 Requerimientos

### Backend (Laravel)
- PHP 8.1 o superior
- Composer
- MySQL
- Extensiones: pdo, mbstring, openssl

### Frontend (React)
- Node.js 16+
- npm o yarn

---

## ⚙️ Instalación

### 🔧 Backend (Laravel)
bash
git clone https://github.com/Pablofvb07/laravel-react-comisionesminicore-pablovargas.git
cd backend
composer install

Copiar archivo .env:
cp .env.example .env
Configurar base de datos en .env:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=minicore
DB_USERNAME=root
DB_PASSWORD=

Generar key de la aplicación:
php artisan key:generate
Ejecutar migraciones y seeders:
php artisan migrate --seed
Levantar servidor backend:
php artisan serve

## 💻 Frontend (React)
cd frontend
npm install
npm run dev
🌐 Variables de entorno (Frontend)
VITE_API_URL=http://127.0.0.1:8000/api
📊 Uso del sistema
Iniciar backend con:
php artisan serve

Iniciar frontend con:

npm run dev
Abrir la aplicación en el navegador.
Gestionar vendedores, ventas y reglas de comisión.
Visualizar cálculo automático de comisiones por rango de fechas.
🔮 Estado del proyecto
Frontend desplegado en Vercel
Backend en entorno local (modo desarrollo)
Base de datos MySQL local
En proceso de despliegue completo a producción

## 📺 Enlaces
Deploy: https://laravelcomisionespablovargas.vercel.app/
Video demostrativo: https://youtu.be/UG7Zd0S0HNA
Documentación Laravel: https://laravel.com/docs
## 👨‍💻 Autor
Pablo Vargas
Estudiante de Ingeniería de Software

## 📞Contacto
correo: pablovargas44@gmail.com
Linkedin: https://www.linkedin.com/in/pablo-francisco-vargas-barriga-09198b335/
