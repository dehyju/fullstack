import { Route } from 'react-router-dom'
import ExternalLayout from '../layouts/ExternalLayout'

import Home from '../pages/external/Home'
import Login from '../pages/external/Login'
import Portfolio from '../pages/external/Portfolio'

const ExternalRoutes = () => {
  return (
    <>
    <Route path='/' element={<ExternalLayout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
    </Route>
    <Route path='/login' element={<Login />} />
    </>
  )
}

export default ExternalRoutes