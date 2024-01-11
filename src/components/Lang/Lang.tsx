import { useLocation } from 'react-router-dom';
import { LanguageType, useLanguageContext } from '../../store/languageContext';
import { Button } from '../UI/Button/Button';
import { twMerge } from 'tailwind-merge';

export const Lang = () => {
	const { lang, setLang } = useLanguageContext();
	const location = useLocation();

	const handleLanguageChange = (newLang: LanguageType) => {
		setLang(newLang);
	};

	const shouldDisableLanguageToggle = () => {
		return location.pathname.startsWith('/article');
	};

	return (
		<div className='flex'>
			<Button
				className={twMerge(
					`text-white px-4 py-4 enabled:hover:text-rose-300 font-medium ${
						lang === 'GB'
							? 'bg-rose-300 text-stone-900 pointer-events-none'
							: 'opacity-80'
					}${
						shouldDisableLanguageToggle() === true
							? `bg-stone-800 opacity-50 text-stone-400`
							: ''
					}`
				)}
				onClick={() => handleLanguageChange('GB')}
				disabled={shouldDisableLanguageToggle()}
			>
				GB
			</Button>
			<Button
				className={twMerge(
					`text-white px-4 py-4 enabled:hover:text-rose-300 font-medium ${
						lang === 'US'
							? 'bg-rose-300 text-stone-900 pointer-events-none'
							: 'opacity-80'
					}${
						shouldDisableLanguageToggle() === true
							? `bg-stone-800 opacity-50 text-stone-400`
							: ''
					}`
				)}
				onClick={() => handleLanguageChange('US')}
				disabled={shouldDisableLanguageToggle()}
			>
				US
			</Button>
		</div>
	);
};
