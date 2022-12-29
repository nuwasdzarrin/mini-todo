import {createBrowserRouter,RouterProvider} from "react-router-dom";
import TodoLayout from './layouts/TodoLayout';
import ErrorLayout from "./layouts/ErrorLayout";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./assets/styles/todo.scss";

const router = createBrowserRouter([
  {
      path: "/",
      element: <TodoLayout />,
      errorElement: <ErrorLayout />,
      children: [
        {
          path: "/",
          element: <TodoPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        }
      ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
