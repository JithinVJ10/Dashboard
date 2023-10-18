import {createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import ErrorPage from '../Page/ErrorPage'
import Dashboard from '../Page/Dashboard'

const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/' element={<Dashboard />}>
        <Route index={true} path='/' element={<Home />} />
        <Route path='/Admins' element={<div>Hello Admin</div>}/>
      </Route>
      </>
    )
)

export default router
  