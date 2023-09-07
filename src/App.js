import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOUt/Main";
import Men from "./component/Men/Men";
import Women from "./component/Women/Women";
import Unisex from "./component/Unisex/Unisex";
import Home from "./component/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/men",
          element: <Men></Men>,
        },
        {
          path: "/women",
          element: <Women></Women>,
        },
        {
          path: "/unisex",
          element: <Unisex></Unisex>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
