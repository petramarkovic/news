import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { UsaIcon } from '../Icons/UsaIcon';
import { FranceIcon } from '../Icons/FranceIcon';
import { SpanishIcon } from '../Icons/SpanishIcon';
import { GermanIcon } from '../Icons/GermanIcon';

interface Translations {
	nativeName: string;
	icon: React.ReactNode;
}

const lngs: Record<string, Translations> = {
	en: { nativeName: 'English', icon: <UsaIcon /> },
	fr: { nativeName: 'French', icon: <FranceIcon /> },
	es: { nativeName: 'Spanish', icon: <SpanishIcon /> },
	de: { nativeName: 'German', icon: <GermanIcon /> }
  };

export const Translations = () => {
	const [showTranslations, setShowTranslations] = useState(false);
	const { i18n } = useTranslation();

	const showTranslationsHandler = () => {
		setShowTranslations(prevState => !prevState);
	}

	return (
		<div className='relative flex justify-center items-center ml-2'>
			<button onClick={showTranslationsHandler} className='transition hover:opacity-80'>
				<GlobeAltIcon className='w-6 h-6'/>
			</button>
			<ul className={twMerge('absolute top-5 shadow-lg max-w-min p-3 mt-2 rounded-md transition', !showTranslations ? 'opacity-0 hidden' : 'opacity-100')}>
				{Object.keys(lngs).map(lng => (
					<li key={lng}>
						<button onClick={() => {
						i18n.changeLanguage(lng)
						setShowTranslations(false)}}>
						{lngs[lng].icon}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
