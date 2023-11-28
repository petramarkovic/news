import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type ArticleType = {
	title: string
	urlToImage: string
	description: string
}

interface CardProps {
	data: {
		articles: ArticleType[]
	}
}

export const Card = ({ data }: CardProps) => {
	const removedArticle = 'Removed'
	const maxArticlesToShow = 5

	const breakpoints = {
		400: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}

	return (
		<Swiper
			breakpoints={breakpoints}
			slidesPerView={3}
			spaceBetween={30}
			navigation
			modules={[Navigation]}
			className='py-6'>
			{data.articles
				.filter((article) => !article.title.includes(removedArticle))
				.slice(0, maxArticlesToShow)
				.map((article, index) => (
					<SwiperSlide
						key={index}
						className='self-stretch h-auto flex flex-col'>
						<h3 className='mb-4 text-black font-bold'>
							{article.title}
						</h3>
						<div className='relative pb-56-25 mt-auto'>
							<img
								src={
									article.urlToImage ??
									'placeholder-image.jpg'
								}
								alt={article.description}
								className='absolute top-0 left-0 w-full h-full object-cover'
							/>
						</div>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
