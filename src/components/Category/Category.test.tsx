import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Category } from '.';

const MockCategory = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Category category='business' />
			</BrowserRouter>
		</QueryClientProvider>
	);
};

describe('Category', () => {
	it('should render correctly', () => {
		render(<MockCategory />);

		const button = screen.getByRole('button', { name: 'business' });
		expect(button).toBeInTheDocument();
	});

	it('should render link to see all news with correct URL', () => {
		render(<MockCategory />);
		const link = screen.getByRole('link', {
			name: /see all business news from/i
		});
		expect(link).toHaveAttribute('href', '/categories/business');
	});
});
