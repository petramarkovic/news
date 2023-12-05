import Header from "./components/containers/Header";
import { Home } from "./components/pages/Home";
import { Categories } from "./components/pages/Categories";
import { Article } from "./components/pages/Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./store/languageContext";
import { DataProvider } from "./store/dataContext";

function App() {
  return (
    <Router>
      <DataProvider>
        <LanguageProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </LanguageProvider>
      </DataProvider>
    </Router>
  );
}

export default App;
