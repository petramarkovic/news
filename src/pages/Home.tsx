import { Wrap } from '../components/ui/Wrap'
import { Articles } from '../components/containers/Articles'

export const Home = () => {
	return (
		<div className='bg-stone-950 min-h-screen'>
			<Wrap>
				<Articles />
			</Wrap>
		</div>
	)
}
