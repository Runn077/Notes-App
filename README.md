# Really Cool Notes App

A full-stack MERN (MySQL, Express, React, Node.js) web application for creating, reading, updating, and deleting personal notes with user authentication.

## Features

- **User Authentication**: Secure registration and login with JWT tokens stored in HTTP-only cookies
- **Protected Routes**: Notes are tied to authenticated users; only logged-in users can create, view, edit, or delete notes
- **Note Management**: Create, view, update, and delete personal notes with title and body content
- **Persistent Sessions**: Users remain logged in across page reloads thanks to HTTP-only cookie-based authentication
- **Welcome Message**: Personalized greeting in navbar showing the logged-in username
- **Responsive UI**: Clean, styled interface with navigation, forms, and modals for note creation

## Tech Stack

### Backend
- **Node.js** with **Express.js** for REST API
- **MySQL** database with **Sequelize** ORM
- **JWT (JSON Web Tokens)** for authentication
- **bcrypt** for password hashing
- **HTTP-only Cookies** for secure session management

### Frontend
- **React** for UI components
- **Vite** for fast development and build
- **axios** for API requests with credentials
- **React Router** for client-side routing
- **React Hook Form** + **Zod** for form validation

## Project Structure

```
Notes-App-MERN/
├── backend/
│   ├── config/          # Database configuration
│   ├── controller/      # Request handlers (auth, notes)
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Database models (Users, Notes)
│   ├── routes/          # API endpoints (Auth, Notes)
│   ├── server.js        # Express app setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (Navbar)
│   │   ├── page/        # Page components (Home, Login, Registration, Note)
│   │   ├── styles/      # CSS files
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx     # React entry point
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MySQL** (running locally or remote connection string in `.env`)

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Notes-App-MERN
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` folder with:
   ```env
   PORT=3000
   DB_USER=root
   DB_PASS=your_mysql_password
   DB_NAME=notes_db
   DB_HOST=localhost
   JWT_KEY=your_jwt_secret_key
   ```

   Start the backend:
   ```bash
   npm start
   ```
   Server will run on `http://localhost:3000`

3. **Setup Frontend**:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   Frontend will run on `http://localhost:3010`

4. **Open in Browser**:
   Navigate to `http://localhost:3010` and start using the app!

## Usage

1. **Register**: Create a new account with a username and password
2. **Login**: Sign in with your credentials
3. **Create Notes**: Click the "Create" button to add a new note with a title
4. **View Notes**: See all your notes displayed as cards on the home page
5. **Edit Notes**: Click a note card to open it in detail view and edit the content
6. **Delete Notes**: Click the delete button on a note card to remove it
7. **Logout**: Click the "Logout" button in the navbar to end your session

## API Endpoints

### Authentication Routes
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and receive JWT cookie
- `GET /auth/me` - Get current logged-in user (protected)
- `GET /auth/logout` - Clear authentication cookie

### Notes Routes (all protected)
- `GET /notes` - Get all notes for the logged-in user
- `GET /notes/:id` - Get a specific note
- `POST /notes` - Create a new note
- `PUT /notes/:id` - Update a note
- `DELETE /notes/:id` - Delete a note

## Security Features

- **HTTP-Only Cookies**: JWT tokens are stored in secure HTTP-only cookies, preventing XSS attacks
- **CORS Configuration**: Backend allows credentials from the frontend origin only
- **Password Hashing**: User passwords are hashed with bcrypt before storage
- **Protected Routes**: All note operations require valid JWT authentication
- **Token Expiry**: JWT tokens expire after 1 hour; refresh mechanism can be implemented

## Available Scripts

### Backend
- `npm start` - Start server with auto-reload (nodemon)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Troubleshooting

**Cookies not persisting?**
- Ensure backend CORS allows credentials: `credentials: true`
- Verify frontend axios requests use `withCredentials: true`
- Check that frontend and backend ports match the CORS origin configuration


**401 Unauthorized on protected routes?**
- Make sure you're logged in and have a valid JWT cookie
- Check if token has expired (currently 1 hour expiry)
- Clear browser cookies and re-login

## License

ISC

## Author

Created as a learning project for full-stack MERN development.
