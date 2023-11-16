import Header from './components/containers/Header';
import { TopNews } from './components/pages/TopNews';
import { Categories } from './components/pages/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './store/languageContext';

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
				</Routes>
			</LanguageProvider>
		</Router>
	);
}

export default App;
