import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Article } from './pages/Article';
import { SearchPage } from './pages/SearchPage';
import { Articles } from './components/Articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './store/languageContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * (60 * 1000)
		}
	}
});

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
						<Route path='/search' element={<SearchPage />} />
						<Route path='/categories/:category' element={<Articles />} />
					</Routes>
				</LanguageProvider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Router>
	);
}

export default App;
