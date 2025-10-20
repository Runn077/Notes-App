import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Note from './components/Note'

const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"/note/:id", element: <Note />}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
