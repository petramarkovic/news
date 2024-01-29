import { NavLink } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
	const { t } = useTranslation();
	const [isActive, setIsActive] = useState(true);

	const menuHandler = () => {
		setIsActive((prevState) => !prevState);
		updateOverflow();
	};

	const navLinkClickHandler = () => {
		if (window.innerWidth < 1024) {
			setIsActive((prevState) => !prevState);
			updateOverflow();
		}
	}

	const updateOverflow = () => {
		const bodyElement = document.querySelector('body');

		if (!bodyElement) return;

		if (isActive) {
			bodyElement.style.overflow = 'hidden';
		} else {
			bodyElement.style.overflow = 'visible';
		}
	}

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
				<NavLink
					to='/'
					className={({ isActive }) => twMerge('text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl', isActive && 'text-ternaryDark')}
					onClick={navLinkClickHandler}
				>
					{t('navigation.topNews')}
				</NavLink>
				<NavLink
					to='/categories'
					className={({ isActive }) => twMerge('text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl', isActive && 'text-ternaryDark')}
					onClick={navLinkClickHandler}
				>
					{t('navigation.categories')}
				</NavLink>
				<NavLink
					to='/search'
					className={({ isActive }) => twMerge('text-secondary lg:text-base lg:mb-0 lowercase font-semibold transition-all mr-5 inline-flex items-center hover:text-secondaryDark mb-4 text-3xl', isActive && 'text-ternaryDark')}
					onClick={navLinkClickHandler}
				>
					{t('navigation.search')}
					<MagnifyingGlassIcon className='lg:h-4 lg:w-4 ml-2 tex-white inline w-7 h-7' />
				</NavLink>
			</ul>
		</nav>
	);
};
