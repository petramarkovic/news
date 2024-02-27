import '@testing-library/jest-dom';
import { expect } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Lang } from '.';

const MockLang = () => {
	return (
		<BrowserRouter>
			<Lang />
		</BrowserRouter>
	)
}

describe('Lang', () => {
	it('should render correctly', () => {
		render(<MockLang />);
		
		expect(screen.getByTestId('lang')).toBeInTheDocument();
	});

	it('should display language selector names correctly', () => {
		render(<MockLang />);
		
		const UsLink = screen.getByRole('button', {name: /US/i});
		const GbLink = screen.getByRole('button', {name: /GB/i});

		expect(UsLink).toBeInTheDocument();
		expect(GbLink).toBeInTheDocument();
	});

	it('should change to correct language when each link is clicked', () => {
		render(<MockLang />);

		
		const UsLink = screen.getByRole('button', {name: /US/i});
		const GbLink = screen.getByRole('button', {name: /GB/i});
		fireEvent.click(UsLink);

		waitFor(() => {
			expect(UsLink).toHaveClass('active');
			expect(GbLink).not.toHaveClass('active');
		});

		fireEvent.click(GbLink);

		waitFor(() => {
			expect(GbLink).toHaveClass('active');
			expect(UsLink).not.toHaveClass('active');
		});
	});

	it('should be disabled when we\'re on a single article page and enabled when we\'re on other pages', () => {
		render(<MockLang />);

		const UsLink = screen.getByRole('button', {name: /US/i});
		const GbLink = screen.getByRole('button', {name: /GB/i});

		window.location.pathname === '/article' ? expect(GbLink).toBeDisabled() : expect(GbLink).not.toBeDisabled();
		window.location.pathname === '/article' ? expect(UsLink).toBeDisabled() : expect(UsLink).not.toBeDisabled();
	});
});
