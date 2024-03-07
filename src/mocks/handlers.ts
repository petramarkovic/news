import { http, HttpResponse } from 'msw'
 
export const handlers = [
	http.get(`https://newsapi.org/v2/top-headlines?`, () => {
		// const url = new URL(request.url)
		// const searchTerm = url.searchParams.get('q');
		// const country = url.searchParams.get('country');
		// const apiKey = url.searchParams.get('apiKey');
		return HttpResponse.json({ articles: [
			{
				title: 'Corona virus title',
				description: 'Corona virus description',
				urlToImage: 'https://plus.unsplash.com/premium_photo-1708983589793-56673027592e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			},
			{
				title: 'Corona virus title 2',
				description: 'Corona virus description',
				urlToImage: 'https://plus.unsplash.com/premium_photo-1708983589793-56673027592e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			}
		]})
	}),
]