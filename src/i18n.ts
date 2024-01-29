import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		},
		resources: {
			en: {
				translation: {
					logo: 'News',
					navigation: {
						topNews: 'top news',
						categories: 'categories',
						search: 'search'
					},
					mainHeadline: 'Top news from',
					categoriesHeadline: 'Top 5 news by categories in',
					greatBritain: 'Great Britain',
					unitedStates: 'United States',
					removed: 'Removed',
					goBackButtonCategories: 'Go back to the categories',
					errorFetchingData: 'Error fetching data',
					seeAllNewsFromCategory: 'See all news from',
					writtenBy: 'Written by',
					goBackToTheList: 'Go back to the list',
					searchHeadline: 'Search top news from',
					searchInputLabel: 'Start typing to search news ..',
					allNewsFrom: 'All news from',
					byTerm: 'by term',
					somethingWentWrong: 'Something went wrong.. Please try again.',
					noSearchResults: 'There are no search results for',
					clearButton: 'Clear'
				}
			},
			fr: {
				translation: {
					logo: 'Nouvelles',
					navigation: {
						topNews: 'actualité à la une',
						categories: 'catégories',
						search: 'recherche'
					},
					mainHeadline: 'Top des nouvelles de',
					categoriesHeadline: 'Top 5 des actualités par catégories dans',
					greatBritain: 'Grande Bretagne',
					unitedStates: 'États-Unis',
					removed: 'Supprimé',
					goBackButtonCategories: 'Retour aux catégories',
					errorFetchingData: 'Erreur lors de la récupération des données',
					seeAllNewsFromCategory: 'Voir toutes les actualités de',
					writtenBy: 'Écrit par',
					goBackToTheList: 'Revenir à la liste',
					searchHeadline: 'Rechercher les principales actualités de',
					searchInputLabel: 'Commencez à taper pour rechercher des actualités ..',
					allNewsFrom: 'Toutes les nouvelles de',
					byTerm: 'par terme',
					somethingWentWrong: 'Une erreur s\'est produite. Veuillez réessayer.',
					noSearchResults: 'Il n\'y a aucun résultat de recherche pour',
					clearButton: 'Clair'
				}
			}
		}
	});

export default i18next;
