import Header from './components/containers/Header'
import { TopNews } from './components/pages/TopNews'
import { Categories } from './components/pages/Categories'
import { Article } from './components/pages/Article'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './store/languageContext'

function App() {
	return (
		<Router>
			<LanguageProvider>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<TopNews />}
					/>
					<Route
						path='/categories'
						element={<Categories />}
					/>
					<Route
						path='/article'
						element={<Article />}
					/>
				</Routes>
			</LanguageProvider>
		</Router>
	)
}

export default App
