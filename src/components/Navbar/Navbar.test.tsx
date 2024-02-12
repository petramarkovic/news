import '@testing-library/jest-dom';
import { expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '.';

const MockedNavbar = () => {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	)
}

describe('Navbar', () => {
	it('should render Navbar correctly', () => {
		render(<MockedNavbar />);
		
		expect(screen.getByTestId('nav')).toBeInTheDocument();
	});

	it('should navigate to the correct paths when links are clicked', () => {
		render(<MockedNavbar />);

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
});
