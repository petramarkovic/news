import { Link } from 'react-router-dom';
import { Lang } from '../Lang';
import { Navbar } from '../Navbar';
import { Translations } from '../Translations';
import { Wrap } from '../UI/Wrap/Wrap';
import { useTranslation } from 'react-i18next';

export const Header = () => {
	const { t } = useTranslation();

	return (
		<header className='py-3 px-2'>
			<Wrap>
				<div className='flex items-center justify-between'>
					<Link
						to='/'
						className='font-bold text-xl text-dark hover:text-ternaryLight transition-colors'>
						{t('logo')}
					</Link>
					<Navbar />
					<Lang />
					<Translations />
				</div>
			</Wrap>
		</header>
	);
};
