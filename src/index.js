import React from 'react'
import { ReactDOM } from 'react'
import { createRoot } from 'react'
import App from './components/app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
