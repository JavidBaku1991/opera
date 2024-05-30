import ReactDOM from "react-dom/client";
import React, { Suspense }from 'react';
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

// Import pages
// import Participants from './pages/Participants';
import Preloader from "./components/Preloader.js";
import PageNotFound from "./pages/PageNotFound.js";



const Home = React.lazy(() => import("./pages/Home.js"));
const Photo = React.lazy(() => import("./components/Photos.js"));
const Participants = React.lazy(() => import("./pages/Participants.js"));
const Festival = React.lazy(() => import("./pages/Festival.js"));
const Videos = React.lazy(() => import("./pages/Videos.js"));
const Karmen =React.lazy(()=>import("./components/events/Karmen.js"))
const OperaUlduzlari =React.lazy(()=>import("./components/events/OperaUlduzlari.js"))
const GeleceyinUlduzlari =React.lazy(()=>import("./components/events/GeleceyinUlduzlari.js"))
const SenetVarisleri =React.lazy(()=>import("./components/events/SenetVarisleri.js"))
const KlassikMusiqiAxshami =React.lazy(()=>import("./components/events/Klassik.js"))
const Final =React.lazy(()=>import("./components/events/Final.js"))
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>


  <Suspense fallback={<Preloader />}>
        <Routes>
          
          <Route path="/" element={<Home />}exact />
          <Route path="/participants" element={<Participants />}exact />
          <Route path="/festival" element={<Festival />} exact/>


          <Route path="/photos" element={<Photo />} exact>
          </Route>
            <Route path="/photos/karmen" element={<Karmen />} exact/>
            <Route path="/photos/genculduzlar" element={<OperaUlduzlari />} exact/>
            <Route path="/photos/geleceyinulduzlari" element={<GeleceyinUlduzlari />} exact/>
            <Route path="/photos/senetvarisleri" element={<SenetVarisleri />} exact/>
            <Route path="/photos/klassikmusiqiaxshami" element={<KlassikMusiqiAxshami />} exact/>
            <Route path="/photos/final" element={<Final />} exact/>


          <Route path="/videos" element={<Videos />} exact/>
          <Route path="*" element={<PageNotFound />} exact/>

        </Routes>
    </Suspense>
  </HashRouter>
);
