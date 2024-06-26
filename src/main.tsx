import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// async function deferRender() {
// 	if (process.env.NODE_ENV !== 'development') {
// 		return;
// 	}

// 	const { worker } = await import('./mocks/browser');

// 	return worker.start();
// }

// deferRender().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
// });
