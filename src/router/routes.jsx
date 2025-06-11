import { createBrowserRouter, RouterProvider } from 'react-router'
import WebPage from '../pages/webPage'

export const Route = () => {
  const Routes = createBrowserRouter([
  {
    path: '/',
    element: <WebPage />
  }
  ])
  return (
    <RouterProvider router={Routes} />
  )
}