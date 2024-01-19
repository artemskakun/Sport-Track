// Подключаем необходимые библиотеки
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Добавлено для обработки CORS
const userRoutes = require('./routes/userRoutes');

// Загружаем конфигурации из файла .env
dotenv.config();

// Создаем объект приложения Express
const app = express();

// Задаем порт для приложения, используя значение из переменной окружения или 3001 по умолчанию
const PORT = process.env.PORT || 3001;

// Middleware для обработки CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware для обработки данных в формате JSON
app.use(express.json());

// Подключаем маршруты, определенные в userRoutes, к пути '/api/users'
app.use('/api/users', userRoutes);

// Подключаемся к базе данных MongoDB с использованием Mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Запускаем сервер на указанном порту
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});