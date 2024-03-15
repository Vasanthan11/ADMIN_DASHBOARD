import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import User from './pages/user/User';
import Product from './pages/product/Product';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  // Outlet is used for making the content pages in Dashboard dinamic. (able switch faster on pages).
  Outlet,
} from "react-router-dom";

function App() {
  // This is for Components in the webpages are fixed or will be in all the pages of websites (Example line menubar,footer or userprofile etc...).
  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        {/* inbetween this two section there is menu and content section it is kept inside a divcontainer */}
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContsiner">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  //  page wise reloading the content with different server names.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
