📚 Book Tracker API
Book Tracker — це backend‑сервіс для відстеження книг та статей.
Побудований на NestJS + PostgreSQL + TypeORM.
Дозволяє створювати матеріали (книги/статті) та вести прогрес їх читання.

🛠️ Технології
Node.js

NestJS

TypeScript

PostgreSQL

TypeORM

REST API

📦 Сутності
User
Користувач системи.

id

email

password

Item
Книга або стаття.

id

title

author

description

type — "book" або "article"

Tracking
Запис прогресу читання.

id

progress

updatedAt

user

item

🔗 API Endpoints
📘 Items
➕ Створити книгу або статтю
POST /items

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "Книга про чистий код",
  "type": "book"
}
📄 Отримати всі items
GET /items

🗑️ Видалити item
DELETE /items/:id

📊 Tracking
➕ Додати / оновити прогрес
POST /tracking

{
  "userId": 1,
  "itemId": 1,
  "progress": 60
}
📄 Отримати прогрес користувача
GET /tracking/user/:userId

▶️ Запуск проєкту
npm install
npm run start:dev
Сервер за замовчуванням:

🧪 База даних
PostgreSQL

Назва БД: book_tracker

Таблиці генеруються автоматично через TypeORM (synchronize: true)

📌 Примітки
Проєкт створено з навчальною метою

Архітектура модульна: Users, Items, Tracking

Легко розширити (Swagger, авторизація, ролі, JWT)