import Header from "./components/containers/Header"
import { TopNews } from "./components/pages/TopNews"
import { Categories } from "./components/pages/Categories"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  useContext } from 'react';
import { LanguageContext, LanguageContextType } from "./components/store/languageContext";

function App() {
  const language = useContext<LanguageContextType>(LanguageContext);
  
  return (
    <Router>
      <LanguageContext.Provider value={language}>
      <Header />
      <Routes>
        <Route path='/' element={<TopNews />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
      </LanguageContext.Provider>
    </Router>
  )
}

export default App
