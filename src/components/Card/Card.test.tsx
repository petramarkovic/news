import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Card } from '.';

describe('Card', () => {
	it('should render correctly', () => {
		render(
			<Card
				title='Test title'
				description='This is a description'
				urlToImage='https://images.unsplash.com/photo-1707666729035-a4dc45f8fc94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8'
			/>
		);

		const heading = screen.getByRole('heading');
		const img = screen.getByRole('img');

		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('Test title');

		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('alt', 'This is a description');
		expect(img).toHaveAttribute('src', 'https://images.unsplash.com/photo-1707666729035-a4dc45f8fc94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8');
	});
});
