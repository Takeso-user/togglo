# 💡 Идея: “Task & Time Tracker” (API без фронта)

## 📌 Суть проекта:

### API для трекинга задач и времени, затраченного на каждую. Аналог минимальной версии Toggl, где пользователь может:
*	Создавать задачи (task)
*	Запускать / останавливать трекинг времени по задаче (timer)
*	Смотреть отчёт по времени за день/неделю
*	Метить задачи как “в работе”, “завершено”

⸻

## 🧱 Архитектура и стек:
* Node.js + TypeScript (Express)
* MongoDB Atlas
* Docker (для локального и CI запуска)
* Jest или Vitest для тестов
* Supertest для тестирования API
* ESLint + Prettier
* GitHub Actions: lint → test → build Docker
* Swagger или Redoc (опционально): OpenAPI-документация

📦 Структура сущностей (MongoDB)
```groovy
User {
  _id: ObjectId,
  name: string,
  email: string,
  // без авторизации, но оставим задел
}

Task {
  _id: ObjectId,
  userId: ObjectId,
  title: string,
  description?: string,
  status: 'todo' | 'in_progress' | 'done',
  createdAt: Date,
  updatedAt: Date,
}

TimeLog {
  _id: ObjectId,
  taskId: ObjectId,
  startTime: Date,
  endTime?: Date,
}
```

⸻

## 🧪 Покрытие тестами
*	Unit-тесты: сервисы (например, подсчёт потраченного времени)
*	Интеграционные тесты: API через Supertest (Express + MongoMemoryServer)

⸻

## ⚙️ GitHub Actions

### Простой CI:
```yaml
name: CI

on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    services:
      mongo:
        image: mongo
        ports: [27017:27017]

    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - run: npm ci
    - run: npm run lint
    - run: npm test
```


⸻

## 🐳 Docker
* Dockerfile для приложения
* docker-compose.yml для локального запуска вместе с MongoDB

⸻

## ✅ Что ты потренируешь:
*	REST API: CRUD, фильтрация, агрегации (например, время по неделе)
*	Валидацию с Zod или Yup
*	DTO / слои контроллеров / сервисов
*	CI-пайплайн
*	Докеризация и .env
*	Локальные e2e API тесты без ручной проверки

⸻

## ⏱️ Примерный план на 3–5 дней:

|  День  |Задачи|
|:------:|--------|
|   1    |Инициализация проекта, Docker, базовая структура, User + Task CRUD|
|   2    | Добавление TimeLog и логики старта/остановки трекинга|
|   3    | Подсчёт потраченного времени, агрегации, фильтрация|
|   4    |Тесты (unit + integration), GitHub Actions|
|   5    |Swagger docs (опционально), финальный рефакторинг, README|

В CRUD-приложениях часто используются следующие HTTP-статусы: 
* **200** OK (успешное выполнение запроса), 
* **201** Created (успешное создание ресурса), 
* **204** No Content (успешное выполнение, но нет данных для отправки), 
* **400** Bad Request (некорректный запрос), 
* **401** Unauthorized (неавторизованный доступ), 
* **403** Forbidden (доступ запрещен), 
* **404** Not Found (ресурс не найден), 
* **409** Conflict (конфликт при создании или обновлении ресурса) и 
* **500** Internal Server Error (внутренняя ошибка сервера