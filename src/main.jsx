import React from "react";
import { Provider } from "react-redux";
import reduxStore from "../redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/termsofservice",
    element: <TermsOfService />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </Provider>
);
