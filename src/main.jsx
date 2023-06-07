import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/index"></Navigate>,
	},
	{
		path: '/index',
		element: <Navigate to="/index/1"></Navigate>,
	},
	{
		path: '/index/:mapIndex',
		element: <App />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
