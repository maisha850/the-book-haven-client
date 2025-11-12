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
import About from './Componants/About.jsx'
import MyBook from './Pages/MyBook.jsx'
import ErrorPage from './Componants/ErrorPage.jsx'
import { Toaster } from 'react-hot-toast'
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
        path: '/addBooks',
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
        path: '/allBooks',
        Component: AllBooks
      },
    
      {
        path:'/books/:id',
       element: <PrivateRoute>
        <BookDetails></BookDetails>
       </PrivateRoute>
      },
      {
        path: '/updateBooks/:id',
        loader: ({params})=>fetch(`http://localhost:3000/updateBooks/${params.id}`),
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
