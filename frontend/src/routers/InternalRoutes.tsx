import { Route } from 'react-router-dom'
import InternalLayout from '../layouts/InternalLayout'

import Home from '../pages/internal/Home'

const InternalRoutes = () => {
  return (
    <>
    <Route path='/in' element={<InternalLayout />}>
        <Route index element={<Home />} />
    </Route>
    </>
  )
}

export default InternalRoutes