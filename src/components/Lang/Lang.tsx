import { useLocation } from 'react-router-dom';
import { LanguageType, useLanguageContext } from '../../store/languageContext';
import { Button } from '../UI/Button/Button';
import { twMerge } from 'tailwind-merge';
import { UkIcon } from '../Icons/UkIcon';
import { UsaIcon } from '../Icons/UsaIcon';

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
					`text-black px-2 py-4 enabled:hover:text-dark font-medium flex items-center gap-2 hover:opacity-100 transition-all`, lang === 'GB' ? 'pointer-events-none' : 'opacity-70' , shouldDisableLanguageToggle() === true ? 'opacity-50 text-stone-400' : ''
				)}
				onClick={() => handleLanguageChange('GB')}
				disabled={shouldDisableLanguageToggle()}
			>
				GB
				<UkIcon />
			</Button>
			<Button
				className={twMerge(
					`text-black px-2 py-4 enabled:hover:text-dark font-medium flex items-center gap-2 hover:opacity-100 transition-all`, lang === 'US' ? 'pointer-events-none' : 'opacity-70' , shouldDisableLanguageToggle() === true ? 'opacity-50 text-stone-400' : ''
				)}
				onClick={() => handleLanguageChange('US')}
				disabled={shouldDisableLanguageToggle()}
			>
				US
				<UsaIcon />
			</Button>
		</div>
	);
};
