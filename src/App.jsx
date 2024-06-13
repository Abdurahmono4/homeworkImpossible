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
import { useEffect } from "react";
import { login } from "./features/userSlice";
import { authReady } from "./features/userSlice";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
function App() {
  const user = null;
  const dispatch = useDispatch();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectdetRoutes user={user}>
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
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(login(user));
        dispatch(authReady());
      }
    });
  }, [user]);

  return authReady && <RouterProvider router={routes} />;
}

export default App;
