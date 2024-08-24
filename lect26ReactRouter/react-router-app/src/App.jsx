import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Contact, Error, Posts, PostDetail, Log } from "./pages";
import RootLayout from "./layouts/RootLayout";
import Post from "./components/Post";
import RequireAuth from "./components/RequireAuth";
import AuthProvider, { useAuth } from "./contexts/AuthProvider";
import { loader as fetchData } from "./pages/Posts";
import { loader as fetchDataSingle } from "./pages/PostDetail";

function App() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/posts"
          loader={(args) => {
            return fetchData(args, { isLoggedIn: isLoggedIn });
          }}
          element={<Posts />}
        />
        <Route
          path="/posts/:id"
          loader={(args) => {
            return fetchDataSingle(args, { isLoggedIn: isLoggedIn });
          }}
          element={<PostDetail />}
        />
        <Route path="/Log" element={<Log />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
