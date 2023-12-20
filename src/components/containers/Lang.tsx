import { useLocation } from 'react-router-dom'
import { useLanguageContext } from '../../store/languageContext'
import { Button } from '../ui/Button'

export const Lang = () => {
	const { lang, setLang } = useLanguageContext()
	const location = useLocation()

	const handleLanguageChange = (newLang: string) => {
		setLang(newLang)
	}

	const shouldDisableLanguageToggle = () => {
		return location.pathname.startsWith('/article')
	}

	return (
		<div className='flex'>
			<Button
				className={`btn ${lang === 'GB' ? 'active' : 'inactive'}${
					shouldDisableLanguageToggle() === true ? ` disabled` : ''
				}`}
				onClick={() => handleLanguageChange('GB')}
				disabled={shouldDisableLanguageToggle()}>
				GB
			</Button>
			<Button
				className={`btn ${lang === 'US' ? 'active' : 'inactive'}${
					shouldDisableLanguageToggle() === true ? ` disabled` : ''
				}`}
				onClick={() => handleLanguageChange('US')}
				disabled={shouldDisableLanguageToggle()}>
				US
			</Button>
		</div>
	)
}
