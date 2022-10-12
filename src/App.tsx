import { StyleProvider, ThemePicker } from "vcc-ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main/Main";
import Learn from "./pages/Learn/Learn";
import Shop from "./pages/Shop/Shop";

import "./style/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Error</div>,
  },
  {
    path: "learn/:id",
    element: <Learn />,
  },
  {
    path: "shop/:id",
    element: <Shop />,
  },
]);

const App = () => {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <RouterProvider router={router} />
      </ThemePicker>
    </StyleProvider>
  );
};

export default App;
