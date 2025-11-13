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
        path: '/add-book',
      element: <PrivateRoute>
        <AddBooks></AddBooks>
      </PrivateRoute>
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
        path: '/myBooks',
        element: <PrivateRoute>
          <MyBook></MyBook>
        </PrivateRoute>
      },
      {
        path: '/delete-book/:id',
       
         element: <PrivateRoute>
          <DeleteBook></DeleteBook>
         </PrivateRoute>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
  <RouterProvider router={router}></RouterProvider>
       <Toaster />
</AuthProvider>
  </StrictMode>,
)
