import { Route } from 'react-router-dom'
import ExternalLayout from '../layouts/ExternalLayout'

import Home from '../pages/external/Home'

const ExternalRoutes = () => {
  return (
    <>
    <Route path='/' element={<ExternalLayout />}>
        <Route index element={<Home />} />
    </Route>
    </>
  )
}

export default ExternalRoutes