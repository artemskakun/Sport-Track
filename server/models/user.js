// Подключаем библиотеку Mongoose
const mongoose = require('mongoose');

// Определяем схему пользователя с использованием mongoose.Schema
const userSchema = new mongoose.Schema({
  // Поля схемы пользователя
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  entries: [
    {
      date: Date,
      exercises: [
        {
          type: String,
          name: String,
          category: String,
          repeats: Number,
          sets: Number,
          weight: Number,
          location: String,
          feeling: String,
          comment: String,
          time: String,
          photo: String,
        },
      ],
      meals: [
        {
          name: String,
          items: [
            {
              food: String,
              calories: Number,
              protein: Number,
              carbs: Number,
              fat: Number,
            },
          ],
        },
      ],
    },
  ],
});

// Создаем модель User на основе схемы userSchema
const User = mongoose.model('User', userSchema);

// Экспортируем модель для использования в других частях приложения
module.exports = User;