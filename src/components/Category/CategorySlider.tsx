import { ArticlesArrayInterface } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from '../Card';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider: React.FC<ArticlesArrayInterface> = ({ articles }) => {
	const { t } = useTranslation();
	const removedArticle = t('removed');

	const breakpoints = {
		400: {
			slidesPerView: 1,
			spaceBetween: 16
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	};

	return (
		<Swiper
			breakpoints={breakpoints}
			slidesPerView={3}
			spaceBetween={30}
			navigation
			modules={[Navigation]}
			className='pb-10 px-1'
			title='slider'>
			{articles
				.filter((article) => !article.title.includes(removedArticle))
				.map((article, index) => (
					<SwiperSlide
						key={index}
						className='self-stretch h-auto flex flex-col shadow-md rounded-lg'>
						<Card
							title={article.title}
							description={article.description}
							urlToImage={article.urlToImage}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	);
};
