import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from './pages/Home';
import Participants from './pages/Participants';
import Festival from "./pages/Festival";
import Media from "./components/Media.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/opera" element={<Home />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/festival" element={<Festival />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  </Router>
);
