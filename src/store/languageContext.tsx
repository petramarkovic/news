import { useState } from 'react'
import { createContext, useContext } from 'react'
export interface LanguageContextInterface {
	lang: string
	setLang(value: string): void
}

export interface childrenProps {
	children: React.ReactNode
}

const LanguageInitialState = {
	lang: 'GB',
	setLang: () => {},
}

export const LanguageContext =
	createContext<LanguageContextInterface>(LanguageInitialState)

export const LanguageProvider: React.FC<childrenProps> = (props) => {
	const [lang, setLang] = useState('GB')

	const contextValue: LanguageContextInterface = {
		lang,
		setLang,
	}

	return (
		<LanguageContext.Provider value={contextValue}>
			{props.children}
		</LanguageContext.Provider>
	)
}

export const useLanguageContext = (): LanguageContextInterface => {
	const context = useContext(LanguageContext)
	const { lang, setLang } = context

	return {
		lang,
		setLang,
	}
}
