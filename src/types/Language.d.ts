export type LanguageType = 'GB' | 'US';

export interface LanguageContextInterface {
	lang: LanguageType;
	setLang(value: LanguageType): void;
}

export interface childrenProps {
	children: React.ReactNode;
}