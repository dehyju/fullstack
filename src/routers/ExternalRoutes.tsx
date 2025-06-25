import { Route } from 'react-router-dom'
import ExternalLayout from '../layouts/ExternalLayout'

import Home from '../pages/external/Home'
import Login from '../pages/external/Login'
import Portfolio from '../pages/external/Portfolio'
import Blog from '../pages/external/Blog'

const ExternalRoutes = () => {
  return (
    <>
      <Route path='/' element={<ExternalLayout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </>
  )
}

export default ExternalRoutes