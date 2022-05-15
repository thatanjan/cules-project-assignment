import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'

import { store } from 'redux/store'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
