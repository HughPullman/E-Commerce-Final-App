import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"
import CreateAccount from "./components/CreateAccount/CreateAccount";
import "./app.scss"
import "./fonts/Prompt-Regular.ttf"


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    basename: "/hughstore/",
    element:<Layout/>,
    children:[
      {
      path: "/hughstore/",
      element: <Home />
      },
      {
        path:"/hughstore/products/:id",
        element:<Products />
      },
      {
        path:"/hughstore/product/:id",
        element: <Product />
      },
      {
        path:"/hughstore/login-page",
        element: <Login/>
      },
      {
        path:"/hughstore/create-account",
        element: <CreateAccount/>
      }
    ]
  }  
]);

function App(){
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
