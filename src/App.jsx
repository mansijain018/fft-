import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Founders_letter from "./pages/Founders_letter";
import Ceo_letter from "./pages/Ceo_letter";
import WhatWeDo from "./pages/WhatWeDo"; 
import Impact from "./pages/Impact" 

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founders-letter" element={<Founders_letter />} />
        <Route path="/ceo-letter" element={<Ceo_letter />} />
        <Route path="/What-we-do" element={<WhatWeDo />} />
        <Route path="/Impact" element={<Impact />} />
        

      </Route>
    </Routes>
  );
}

export default App;