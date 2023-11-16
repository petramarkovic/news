import { createContext, useContext } from 'react';
import { ReactNode, useState } from 'react';

interface LanguageContextType {
	lang: string;
	setLang(value: string): void;
}

interface LanguageContextProps {
	children: ReactNode;
}

const LanguageInitialState = {
	lang: 'GB',
	setLang: () => {}
};

export const LanguageContext =
	createContext<LanguageContextType>(LanguageInitialState);

export function LanguageProvider({ children }: LanguageContextProps) {
	const [lang, setLang] = useState('GB');

	const contextValue: LanguageContextType = {
		lang,
		setLang
	};

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguageContext = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	const { lang, setLang } = context;

	return {
		lang,
		setLang
	};
};
