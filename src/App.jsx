import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import RoomsPage from './Pages/RoomsPage'
import RoomDetailPage from './Pages/RoomsDetails'
import HeritageComfortPage from './Pages/Heritage'
import EliteHomestayPage from './Pages/Elite'
import BookingPage from './Pages/Booking'
import BarPage from './Pages/BarPage'
import ContactPage from './Pages/ContactPage'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<AboutPage/>
        },
        {
          path:"/rooms",
          element:<RoomsPage/>
        },
        {
          path:"/rooms/royal-nest",
          element:<RoomDetailPage/>
        },
        {
          path:"/rooms/heritage-comfort",
          element:<HeritageComfortPage/>
        },
        {
          path:"/rooms/elite-homestay",
          element:<EliteHomestayPage/>
        },
        {
          path:"/book",
          element:<BookingPage/>
        },
        {
          path:"/bar",
          element:<BarPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App