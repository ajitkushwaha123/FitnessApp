import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider , createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Track from './components/Track.jsx'
import Workout from './components/Workout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='/track' element={<Track />} />
      <Route path='/workout' element={<Workout />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
