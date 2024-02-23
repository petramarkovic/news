import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import {
	LanguageContextInterface,
	childrenProps,
	LanguageType
} from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageInitialState: LanguageContextInterface = {
	lang: 'GB',
	setLang: () => {}
};

export const LanguageContext =
	createContext<LanguageContextInterface>(LanguageInitialState);

export const LanguageProvider: React.FC<childrenProps> = (props) => {
	const { setItem, getItem } = useLocalStorage('selectedLanguage');
	const storedLang = getItem();
	const initialLang: LanguageType = storedLang ? (storedLang as LanguageType) : 'GB';
	const [lang, setLang] = useState<LanguageType>(initialLang);

	const contextValue: LanguageContextInterface = {
		lang,
		setLang
	};

	useEffect(() => {
		setItem(lang);
	}, [lang]);

	return (
		<LanguageContext.Provider value={contextValue}>
			{props.children}
		</LanguageContext.Provider>
	);
};

export const useLanguageContext = (): LanguageContextInterface => {
	const context = useContext(LanguageContext);
	const { lang, setLang } = context;

	return {
		lang,
		setLang
	};
};
