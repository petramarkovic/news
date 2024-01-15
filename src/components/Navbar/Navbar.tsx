import { Link, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

export const Navbar = () => {
	const [isActive, setIsActive] = useState(true);
	const location = useLocation();

	const isLinkActive = (pathname: string) => {
		return location.pathname === pathname;
	};

	const menuHandler = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<nav className={`ml-auto ${isActive ? 'nav--active' : ''}`}>
			<Button
				className='text-dark mr-3 flex items-center lg:hidden'
				onClick={menuHandler}
			>
				<Bars3Icon className='w-6 h-6' />
			</Button>

			<ul
				className={`${
					isActive
						? 'hidden lg:flex mr-2 border-r'
						: 'flex flex-col justify-center absolute top-0 left-0 z-20 h-full w-full px-5 bg-primary'
				}`}
			>
				<li className='absolute top-6 right-6 lg:hidden'>
					<Button onClick={menuHandler}>
						<XMarkIcon className='w-6 h-6 text-dark' />
					</Button>
				</li>
				<Link
					to='/'
					className={twMerge(` text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl `, isLinkActive('/') && `text-ternaryDark`)}
				>
					Top News
				</Link>
				<Link
					to='/categories'
					className={twMerge(` text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl`, isLinkActive('/categories') && `text-ternaryDark`)}
				>
					Categories
				</Link>
				<Link
					to='/search'
					className={twMerge(` text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl`, isLinkActive('/search') && `text-ternaryDark`)}
				>
					Search
					<MagnifyingGlassIcon className='lg:h-4 lg:w-4 ml-2 tex-white inline w-7 h-7' />
				</Link>
			</ul>
		</nav>
	);
};
