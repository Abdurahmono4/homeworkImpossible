import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { action as loginAction } from "./pages/Login";
import Home from "./pages/Home";
import Login, { action } from "./pages/Login";
import Register from "./pages/Register";
import ProtectdetRoutes from "./components/ProtectdetRoutes";
function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectdetRoutes user={true}>
          <MainLayout />
        </ProtectdetRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: loginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
