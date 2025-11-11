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
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/addBooks',
        Component: AddBooks
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
        loader: ({params})=>fetch(`http://localhost:3000/books/${params.id}`),
       element: <PrivateRoute>
        <UpdateBooks></UpdateBooks>
       </PrivateRoute>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
  <RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </StrictMode>,
)
