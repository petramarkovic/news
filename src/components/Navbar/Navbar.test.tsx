import '@testing-library/jest-dom';
import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '.';

const MockNavbar = () => {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	)
}

describe('Navbar', () => {
	it('should render Navbar correctly', () => {
		render(<MockNavbar />);
		
		expect(screen.getByTestId('nav')).toBeInTheDocument();
	});

	it('should navigate to the correct paths when links are clicked', () => {
		render(<MockNavbar />);

		const topNewsLink = screen.getByTestId(/topNews/i);
		const categoryLink = screen.getByTestId(/categories/i);
		const searchLink = screen.getByTestId(/search/i);

		fireEvent.click(topNewsLink);
		expect(window.location.pathname).toBe('/');

		fireEvent.click(categoryLink);
		expect(window.location.pathname).toBe('/categories');

		fireEvent.click(searchLink);
		expect(window.location.pathname).toBe('/search');
	});

	it('should have active class on the link that is currently active', () => {
		render(<MockNavbar />);

		const topNewsLink = screen.getByText(/topNews/i);
		const categoryLink = screen.getByTestId(/categories/i);
		const searchLink = screen.getByTestId(/search/i);

		window.location.pathname === '/' ? expect(topNewsLink).toHaveClass('active') : expect(topNewsLink).not.toHaveClass('active');
		window.location.pathname === '/categories' ? expect(categoryLink).toHaveClass('active') : expect(categoryLink).not.toHaveClass('active');
		window.location.pathname === '/search' ? expect(searchLink).toHaveClass('active') : expect(searchLink).not.toHaveClass('active');
	});
});
