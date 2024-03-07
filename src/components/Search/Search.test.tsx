import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';
import {
	render,
	screen,
	waitFor,
	renderHook
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Search } from '.';
import { useSearch } from '../../hooks/useSearch';
import { ReactNode } from 'react';

const MockSearch = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Search />
			</BrowserRouter>
		</QueryClientProvider>
	);
};

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Search', () => {
	it('should render correctly on inital load', () => {
		render(<MockSearch />);

		const createWrapper = () => {
			const queryClient = new QueryClient();
			return ({ children }: { children: ReactNode }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			);
		};

		const lang = 'GB';
		const query = '';
		const { result } = renderHook(() => useSearch(query, lang), {
			wrapper: createWrapper()
		});

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Search ...')).toBeInTheDocument();
		expect(result.current.data).toBeUndefined();
		expect(result.current.isLoading).toBe(false);
		expect(result.current.error).toBeNull();
	});

	it('should display articles about corona when search query is corona', async () => {
		render(<MockSearch />);
	
		await waitFor(() => {
			const coronaTitle = screen.queryByText('Corona virus title');
			expect(coronaTitle).toBeInTheDocument();
			if (!coronaTitle) {
				console.error("Corona title not found in the rendered component.");
				console.log("Rendered component:", screen.debug());
			}
		});
	});
});
