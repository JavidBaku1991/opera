import ReactDOM from "react-dom/client";
import React, { Suspense }from 'react';
import "./index.css";
import App from "./App.js";
import { HashRouter,BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
// import Participants from './pages/Participants';
import Preloader from "./components/Preloader.js";



const Home = React.lazy(() => import("./pages/Home.js"));
const Photo = React.lazy(() => import("./components/Photos.js"));
const Participants = React.lazy(() => import("./pages/Participants.js"));
const Festival = React.lazy(() => import("./pages/Festival.js"));
const Videos = React.lazy(() => import("./pages/Videos.js"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>


  <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />}exact />
          <Route path="/participants" element={<Participants />}exact />
          <Route path="/festival" element={<Festival />} exact/>
          <Route path="/photos" element={<Photo />} exact/>
          <Route path="/videos" element={<Videos />} exact/>
        </Routes>
    </Suspense>
  </HashRouter>
);
