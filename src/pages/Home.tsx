import { Wrap } from '../components/UI/Wrap/Wrap';
import { Articles } from '../components/Articles';

export const Home = () => {
	return (
		<div className='min-h-screen'>
			<Wrap>
				<Articles />
			</Wrap>
		</div>
	);
};
