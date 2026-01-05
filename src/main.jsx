import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Home from './Componants/Home.jsx'
import AddBooks from './Pages/AddBooks.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
import Register from './Auth/Register.jsx'
import LogIn from './Auth/LogIn.jsx'
import AllBooks from './Pages/AllBooks.jsx'
import BookDetails from './Pages/BookDetails.jsx'
import UpdateBooks from './Pages/UpdateBooks.jsx'

import PrivateRoute from './Auth/PrivateRoute.jsx'

import MyBook from './Pages/MyBook.jsx'
import ErrorPage from './Componants/ErrorPage.jsx'
import { Toaster } from 'react-hot-toast'
import DeleteBook from './Pages/DeleteBook.jsx'
import About from './Componants/About.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Dashboard from './Componants/Dashboard/Dashboard.jsx'
import DashHome from './Componants/Dashboard/DashHome.jsx'
import UserMgts from './Componants/Dashboard/UserMgts.jsx'
import ManageBooks from './Componants/Dashboard/ManageBooks.jsx'
import Profiles from './Componants/Dashboard/Profiles.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
const queryClient = new QueryClient()
const router = createBrowserRouter([
  
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home
      },
   
      {
        path: '/register',
        Component: Register
      },
       {
        path: '/logIn',
        Component: LogIn
      },
      {
        path: '/all-books',
        Component: AllBooks
      },
      {
        path:'/about',
        Component: About
      },
    
      {
        path:'/book-details/:id',
       element: <PrivateRoute>
        <BookDetails></BookDetails>
       </PrivateRoute>
      },
      {
        path: '/update-book/:id',
       element: 
        <PrivateRoute>
          <UpdateBooks></UpdateBooks>
        </PrivateRoute>
    
      },
  
      {
        path: '/delete-book/:id',
       
         element: <PrivateRoute>
          <DeleteBook></DeleteBook>
         </PrivateRoute>
      },
      {
        path:'/privacy-policy',
        Component: PrivacyPolicy
      }

    ]
  },
  {
    path: '/dashboard',
    element:<PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children:[
      {
        index:true,
        Component: DashHome
      },
      {
        path: 'user-management',
        element: <UserMgts></UserMgts>
      },
      {
        path:'manage-books',
        element:<ManageBooks></ManageBooks>
      },
      {
        path:'add-book',
        Component:AddBooks
      },
      {
        path:'myBooks',
        Component:MyBook
      },
      {
        path: 'profile',
        Component:Profiles
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
<AuthProvider>
  <RouterProvider router={router}></RouterProvider>
       <Toaster />
</AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
