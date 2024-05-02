import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

// Define a function to render your app
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  );
};

// Call the function to render the app initially
renderApp();

// Warn if ReactDOM.render is used in React 18
if (React.version.startsWith("18")) {
  console.warn(
    "ReactDOM.render is used in React 18. Consider migrating to createRoot. Learn more: https://reactjs.org/link/switch-to-createroot"
  );
}
