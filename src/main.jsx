import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalContextComp from "./context/GlobalContext.jsx";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextComp>
      <App />
    </GlobalContextComp>
  </React.StrictMode>
);
