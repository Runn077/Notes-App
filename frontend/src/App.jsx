import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/Home'
import Note from './page/Note'
import Registration from './page/Registration'

const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"/note/:id", element: <Note />},
  {path:"/registration", element: <Registration />}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
