import { Wrap } from '../ui/Wrap'
import { useLanguageContext } from '../../store/languageContext'
import { useState, useEffect } from 'react'
import { Category } from '../containers/Category'

type MyDataType = {
	articles: {
		title: string
		content: string
		author: string
		urlToImage: string
		description: string
	}[]
}

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

	const [categoryData, setCategoryData] = useState<MyDataType[]>([])

	useEffect(() => {
		const fetchDataForCategories = async () => {
			const dataForCategories: MyDataType[] = []

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
		}

		fetchDataForCategories()
	}, [lang])

	return (
		<div>
			<Wrap>
				<h1 className='font-extrabold p-2 my-8 text-5xl text-slate-900'>
					Top 5 news by categories in {lang}:
				</h1>
				{categoryData.map((data, index) => (
					<Category
						data={data}
						key={index}
						title={categories[index]}
					/>
				))}
			</Wrap>
		</div>
	)
}
