import * as reactRouterDom from 'react-router-dom'
import { Wrap } from '../ui/Wrap'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export const Article = () => {
	const { state } = reactRouterDom.useLocation()
	const articleData = state

	return (
		<div className=''>
			<Wrap>
				<article className='text-black pt-20'>
					<h1 className='text-4xl text-violet-400 font-bold text-center mb-5'>
						{articleData.title}
					</h1>
					<img
						className='object-cover max-w-md w-full m-auto'
						src={articleData.urlToImage}
						alt={articleData.description}
					/>
					<p className='text-black font-bold text-xl max-w-2xl text-center py-10 w-full m-auto'>
						{articleData.content ?? 'Text unavailable.'}
					</p>
				</article>
				<div className='flex items-center justify-center mb-6'>
					<Link
						to='/'
						className='link link--purple inline-flex items-center justify-center'>
						<ChevronLeftIcon className='h-6 w-5 hover:stroke-violet-500 mr-2' />
						Go back to the list
					</Link>
				</div>
			</Wrap>
		</div>
	)
}
