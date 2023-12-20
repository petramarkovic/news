import Header from "./components/containers/Header";
import { Home } from "./components/pages/Home";
import { Categories } from "./components/pages/Categories";
import { Article } from "./components/pages/Article";
import { Search } from "./components/pages/Search";
// import { Articles } from "./components/containers/Articles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./store/languageContext";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/article" element={<Article />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/categories/:category" element={<Articles />} /> */}
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
