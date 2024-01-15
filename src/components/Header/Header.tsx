import { Link } from 'react-router-dom';
import { Lang } from '../Lang';
import { Navbar } from '../Navbar';
import { Wrap } from '../UI/Wrap/Wrap';

export const Header = () => {
	return (
		<header className='py-3'>
			<Wrap>
				<div className='flex items-center justify-between'>
					<Link to="/" className='font-bold text-2xl text-dark hover:text-ternaryLight transition-colors'>News</Link>
					<Navbar />
					<Lang />
				</div>
			</Wrap>
		</header>
	);
};
