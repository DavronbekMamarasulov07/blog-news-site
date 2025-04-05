import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'


const Home = lazy(() => import('./home'))
const RoutesController = () => {
  return (
      useRoutes([
          {
            path: '/',
            element: <Home />
        }
    ])
  )
}

export default RoutesController