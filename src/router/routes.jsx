import { createBrowserRouter, RouterProvider } from 'react-router'
import WebPage from '../pages/webPage'
import WebsiteProjects from '../pages/websiteProjects'

export const Route = () => {
  const Routes = createBrowserRouter([
  {
    path: '/',
    element: <WebPage />
    }, 
    {
      path:'websites/projects',
      element: <WebsiteProjects />
    }
  ])
  return (
    <RouterProvider router={Routes} />
  )
}