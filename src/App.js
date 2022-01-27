import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Clothes from './components/Clothes/Clothes';
import Accessories from './components/Accessories/Accessories';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';
import AccountDashboard from './components/AccountDashboard/AccountDashboard';
import AddressBook from './components/AccountDashboard/AddressBook/AddressBook';
import MyOrders from './components/AccountDashboard/MyOrders/MyOrders';
import MyFavorites from './components/AccountDashboard/MyFavorites/MyFavorites';
import AccountInformation from './components/AccountDashboard/AccountInformation/AccountInformation';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddProduct from './components/AdminDashboard/AddProduct/AddProduct';
import ProductDtls from './components/ProductDtls/ProductDtls';
import ProductList from './components/AdminDashboard/ProductList/ProductList';



function App() {
  return (
    < /* className="App" */>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="productDtls" element={<ProductDtls />} />
          <Route path="cart" element={<Cart />} />
          <Route path="accountDashboard" element={<PrivateRoute><AccountDashboard /></PrivateRoute>} >

            <Route path="accountInformation" element={<AccountInformation />} />
            <Route path="addressBook" element={<AddressBook />} />
            <Route path="myOrder" element={<MyOrders />} />
            <Route path="myFavorites" element={<MyFavorites />} />

          </Route>
          <Route path="adminDashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} >

            <Route path="addProduct" element={<AddProduct />} />
            <Route path="productList" element={<ProductList />} />

          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
