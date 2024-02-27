import { renderHook, fireEvent, waitFor } from "@testing-library/react";
import { useMedia } from "./useMedia";

describe('useMedia hook', () => {
	it('should return true if the media query matches', () => {
		const query = '(min-width: 600px)';
		const { result } = renderHook(() => useMedia(query));

		expect(result.current).toBe(false);

		window.innerWidth = 700;

		fireEvent(window, new Event('resize'))

		waitFor(() => {
			expect(result.current).toBe(true);
		});

	});

	it('should return false if the media query doesn\'t match', () => {
		const query = '(max-width: 768px)';
		const { result } = renderHook(() => useMedia(query));

		expect(result.current).toBe(false);

		window.innerWidth = 992;

		fireEvent(window, new Event('resize'));

		waitFor(() => {
			expect(result.current).toBe(false);
		})
	});
});