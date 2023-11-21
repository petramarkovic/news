import * as reactRouterDom from 'react-router-dom'
import { Wrap } from '../ui/Wrap'

export const Article = () => {
	const { state } = reactRouterDom.useLocation()
	const articleData = state

	return (
		<div className=''>
			<Wrap>
				<article>
					<h1>{articleData.title}</h1>
					<img
						src={articleData.urlToImage}
						alt={articleData.description}
					/>
					<p>{articleData.content}</p>
				</article>
			</Wrap>
		</div>
	)
}
