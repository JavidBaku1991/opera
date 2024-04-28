import ReactDOM from "react-dom/client";
import React, { Suspense }from 'react';
import "./index.css";
import App from "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
// import Participants from './pages/Participants';
import Preloader from "./components/Preloader.js";



const Home = React.lazy(() => import("./pages/Home.js"));
const Photo = React.lazy(() => import("./components/Photos.js"));
const Participants = React.lazy(() => import("./pages/Participants.js"));
const Festival = React.lazy(() => import("./pages/Festival.js"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Router>
        <Routes>
          <Route path="/opera" element={<Home />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/photos" element={<Photo />} />
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>

);
