import { BrowserRouter, Routes } from 'react-router-dom'
import ExternalRoutes from './routers/ExternalRoutes'
import InternalRoutes from './routers/InternalRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {ExternalRoutes()}
        {InternalRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App
