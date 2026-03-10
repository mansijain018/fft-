import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Founders_letter from "./pages/Founders_letter";
import Ceo_letter from "./pages/Ceo_letter";
import WhatWeDo from "./pages/WhatWeDo"; 
import Impact from "./pages/Impact" ;
import NewsArticles from "./pages/NewsArticle";
import ArticleDetail from "./pages/Article1Detail";
import Article2Detail from "./pages/Article2Detail";
import Article3Detail from "./pages/Article3Detail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

<Route path="/article/:id" element={<ArticleDetail />} />

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
        <Route path="/news-and-articles" element={<NewsArticles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/article/2" element={<Article2Detail />} />
        <Route path="/article/3" element={<Article3Detail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />


        

      </Route>
    </Routes>
  );
}

export default App;