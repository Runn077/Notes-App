// App.js
import './styles/App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import Home from './page/Home';
import Note from './page/Note';
import Registration from './page/Registration';
import Navbar from './components/Navbar';
import Login from './page/Login';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<><Navbar username={username} setUsername={setUsername} /><Outlet /></>}>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

