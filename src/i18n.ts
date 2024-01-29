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
					searchInputLabel:
						'Commencez à taper pour rechercher des actualités ..',
					allNewsFrom: 'Toutes les nouvelles de',
					byTerm: 'par terme',
					somethingWentWrong: "Une erreur s'est produite. Veuillez réessayer.",
					noSearchResults: "Il n'y a aucun résultat de recherche pour",
					clearButton: 'Clair'
				}
			},
			es: {
				translation: {
					logo: 'Noticias',
					navigation: {
						topNews: 'noticias principales',
						categories: 'categorías',
						search: 'búsqueda'
					},
					mainHeadline: 'Noticias principales de',
					categoriesHeadline: 'Top 5 noticias por categorías en',
					greatBritain: 'Gran Bretaña',
					unitedStates: 'Estados Unidos',
					removed: 'Eliminado',
					goBackButtonCategories: 'Volver a las categorías',
					errorFetchingData: 'Error al obtener datos',
					seeAllNewsFromCategory: 'Ver todas las noticias de',
					writtenBy: 'Escrito por',
					goBackToTheList: 'Volver a la lista',
					searchHeadline: 'Buscar las principales noticias de',
					searchInputLabel: 'Comience a escribir para buscar noticias...',
					allNewsFrom: 'Todas las noticias de',
					byTerm: 'por término',
					somethingWentWrong:
						'Algo salió mal... Por favor, inténtelo de nuevo.',
					noSearchResults: 'No hay resultados de búsqueda para',
					clearButton: 'Limpiar'
				}
			},
			de: {
				translation: {
					logo: 'Nachrichten',
					navigation: {
						topNews: 'Top-Nachrichten',
						categories: 'Kategorien',
						search: 'Suche'
					},
					mainHeadline: 'Top-Nachrichten aus',
					categoriesHeadline: 'Top 5 Nachrichten nach Kategorien in',
					greatBritain: 'Großbritannien',
					unitedStates: 'Vereinigte Staaten',
					removed: 'Entfernt',
					goBackButtonCategories: 'Zurück zu den Kategorien',
					errorFetchingData: 'Fehler beim Abrufen der Daten',
					seeAllNewsFromCategory: 'Alle Nachrichten anzeigen von',
					writtenBy: 'Verfasst von',
					goBackToTheList: 'Zurück zur Liste',
					searchHeadline: 'Suche Top-Nachrichten aus',
					searchInputLabel: 'Geben Sie ein, um Nachrichten zu suchen...',
					allNewsFrom: 'Alle Nachrichten aus',
					byTerm: 'nach Begriff',
					somethingWentWrong:
						'Etwas ist schief gelaufen... Bitte versuchen Sie es erneut.',
					noSearchResults: 'Es gibt keine Suchergebnisse für',
					clearButton: 'Löschen'
				}
			}
		}
	});

export default i18next;
