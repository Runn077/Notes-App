import './App.css'
import Home from './components/Home'
import CreateNote from './components/CreateNotes'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"/createnote", element: <CreateNote />}
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
