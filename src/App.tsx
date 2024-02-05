import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Article } from './pages/Article';
import { Search } from './pages/Search';
import { Articles } from './components/Articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './store/languageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<LanguageProvider>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/categories' element={<Categories />} />
						<Route path='/article' element={<Article />} />
						<Route path='/search' element={<Search />} />
						<Route path='/categories/:category' element={<Articles />} />
					</Routes>
				</LanguageProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Router>
	);
}

export default App;
