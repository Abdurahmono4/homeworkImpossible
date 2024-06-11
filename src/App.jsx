import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
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
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
