import { useLanguageContext } from '../../store/languageContext'
import { useState, useEffect } from 'react'
import { ArticlesArrayInterface } from '../../types'
import { Wrap } from '../ui/Wrap'
import { Category } from '../containers/Category'
import { CategorySkeleton } from '../skeletons/CategorySkeleton'

export const Categories = () => {
	const { lang } = useLanguageContext()
	const key = `${process.env.REACT_APP_API_KEY}`
	const categories = [
		'business',
		'entertainment',
		'general',
		'health',
		'science',
		'sports',
		'technology',
	]

	const [categoryData, setCategoryData] = useState<ArticlesArrayInterface[]>(
		[]
	)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchDataForCategories = async () => {
			const dataForCategories: ArticlesArrayInterface[] = []

			for (const category of categories) {
				const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${key}`
				)

				if (response.ok) {
					const data = await response.json()
					dataForCategories.push(data)
				}
			}

			setCategoryData(dataForCategories)
			setIsLoading(false)
		}

		fetchDataForCategories()
	}, [lang])

	const skeletonArray = Array.from({ length: 7 }, (_, index) => (
		<CategorySkeleton key={index} />
	))

	return (
		<div className='bg-stone-950 py-20 min-h-screen'>
			<Wrap>
				<h1 className='p-2 mb-8 text-4xl text-neutral-50 border-b-2 border-rose-400 border-opacity-10'>
					Top 5 news by categories in {lang}:
				</h1>
				{isLoading && skeletonArray}
				{categoryData.map((data, index) => (
					<Category
						articles={data.articles}
						key={index}
						title={categories[index]}
					/>
				))}
			</Wrap>
		</div>
	)
}
