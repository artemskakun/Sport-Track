// Подключаем библиотеку Express
const express = require('express');

// Создаем объект router, который будет использоваться для определения маршрутов
const router = express.Router();

// Подключаем контроллер пользователя, который содержит логику обработки запросов
const userController = require('../controllers/userController');



// Определяем маршруты и указываем соответствующие методы обработки в контроллере

// POST-запрос на эндпоинт '/register', обрабатываемый методом registerUser из контроллера
router.post('/register', userController.registerUser);

// POST-запрос на эндпоинт '/login', обрабатываемый методом loginUser из контроллера
router.post('/login', userController.loginUser);

// POST-запрос на эндпоинт '/saveUserData', обрабатываемый методом saveUserData из контроллера
router.post('/saveUserData', userController.saveUserData);

// Экспортируем объект router для использования в других частях приложения
module.exports = router;