import { Button } from "../ui/Button"
import { useLanguageContext } from "../../store/languageContext"

export const LanguageSwitcher = () => {
    const { lang, setLang } = useLanguageContext();

    const handleLanguageChange = (newLang: string) => {
        setLang(newLang);
    };

    return (
        <div className="flex">
            <Button className={`btn ${lang === 'GB' ? 'active' : 'inactive'}`} onClick={() => handleLanguageChange('GB')}>GB</Button>
            <Button className={`btn ${lang === 'US' ? 'active' : 'inactive'}`} onClick={() => handleLanguageChange('US')}>US</Button>
        </div>
    )
}
