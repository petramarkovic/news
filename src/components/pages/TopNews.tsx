import { Wrap } from "../ui/Wrap"
import useFetch from "../../hooks/useFetch"
import { useLanguageContext } from "../../store/languageContext";

type MyDataType = {
    articles: {
        id: number;
        title: string;
        content: string;
        author: string;
        urlToImage: string;
		description: string;
    }[];
};

export const TopNews = () => {
    const { lang } = useLanguageContext();
    const { data, isPending, error } = useFetch<MyDataType>(`https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=0db13269a0aa4baab350e830f634fd15`);
    
    const GBTitle = 'Great Britain';
    const USTitle = 'United States';

    return (
        <div>
            <Wrap>
                <h1 className="font-extrabold p-2 my-8 text-5xl text-slate-900">Top News from {lang === 'GB' ? GBTitle : USTitle}:</h1>
                <div>
                    {isPending && <p>Loading..</p>}
                    {error && <p>Error fetching data</p>}
                    {data && (
                        <div className="flex flex-wrap">
                        {data.articles.map((article) => (
                            <div key={article.title} className="sm:w-full md:w-1/2 lg:w-1/3 p-2 self-stretch">
                                <a className="p-4 border-solid border-2 border-slate-100 rounded-lg h-full flex flex-col hover:border-violet-500 hover:cursor-pointer transition">
                                    <h2 className="text-slate-600 font-bold mb-2 text-lg">{article.title}</h2>
                                    {article.description && <p className="my-2 font-medium text-slate-500">{article.description}</p>}
                                    <div className="relative pb-56-25 mt-auto w-full">
                                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={article.urlToImage ?? 'placeholder-image.jpg'} alt={article.description ?? 'Placeholder image'} />
                                    </div>
                                </a>
                            </div>
                        ))}
                        </div>
                    )}
                </div>
            </Wrap>
        </div>
    )
}