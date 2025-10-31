import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom"
import Home from './page/Home'
import Note from './page/Note'
import Registration from './page/Registration'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<><Navbar /><Outlet /></>}>
      <Route path="/" element={<Home />} />
      <Route path="/note/:id" element={<Note />} />
      <Route path="/registration" element={<Registration />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
