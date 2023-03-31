import React from "react";
import "./App.css";
import TopBanner from "./Blah";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="Podcasts"
            element={<Podcasts />}
          />
          <Route
            path="Movies"
            element={<Movies />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
