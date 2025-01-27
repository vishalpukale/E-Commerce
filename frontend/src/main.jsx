import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from "react-router"
import { createBrowserRouter } from 'react-router'

import { Provider } from 'react-redux'
import store from './redux/store.js'

// private routes
import PrivateRoute from './components/PrivateRoute.jsx'

// Auth
import Login from './pages/Auth/login.jsx'
import Register from './pages/Auth/Register.jsx'

//admin routes
import AdminRoutes from './pages/Admin/AdminRoutes.jsx'
import UserList from './pages/Admin/UserList.jsx'
import CategoryList from './pages/Admin/CategoryList.jsx'
import ProductList from './pages/Admin/ProductList.jsx'
import ProductUpdate from './pages/Admin/ProductUpdate.jsx'

// User routes
import Profile from './pages/User/Profile.jsx'
import AllProducts from './pages/Admin/AllProducts.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>

      <Route path='/login' element={ <Login/> } />
      <Route path='/register' element={ <Register/> } />

      {/* if logged in then only show it otherwise dont */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>

      {/* admin only routes */}
      <Route path='/admin' element={<AdminRoutes />}>
        <Route path='userlist' element={<UserList />} />
        <Route path='categorylist' element={<CategoryList />} />
        <Route path='productlist' element={<ProductList />} />
        <Route path='allproductslist' element={ <AllProducts /> } />
        <Route path='productlist/:pageNumber' element={<ProductList />} />
        <Route path='product/update/:_id' element={<ProductUpdate />} />
      </Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
