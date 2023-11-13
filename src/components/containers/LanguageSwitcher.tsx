import { Button } from "../ui/Button"
import { useState } from 'react'

export const LanguageSwitcher = () => {
    const [countryCode, setCountryCode] = useState<string>('GB');

    const setGbStateHandler = () => {
        setCountryCode('GB');
    }

    const setUsStateHandler = () => {
        setCountryCode('US');
    }

    return (
        <div className="flex">
            <Button className="bg-violet-500 text-white px-6 py-5 enabled:hover:bg-slate-50 enabled:hover:text-violet-500 border-solid border-violet-500 border-2" onClick={setGbStateHandler}>GB</Button>
            <Button className="bg-violet-500 text-white px-6 py-5 enabled:hover:bg-slate-50 enabled:hover:text-violet-500 border-solid border-violet-500 border-2" onClick={setUsStateHandler}>US</Button>
        </div>
    )
}
