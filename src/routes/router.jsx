import { createBrowserRouter, Navigate } from "react-router-dom";

// Auth
import Login from "../pages/Auth/Login/Login";
import Recovery from "../pages/Auth/Recovery/Recovery";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";

// Layouts
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Filhos de MainLayout
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  // Auth
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
]);
