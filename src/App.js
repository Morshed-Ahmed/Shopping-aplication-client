import './App.css';
import { Routes, Route, Link } from "react-router-dom";
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



function App() {
  return (
    < /* className="App" */>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="cart" element={<Cart />} />
        <Route path="accountDashboard" element={<AccountDashboard />} >

          <Route path="accountInformation" element={<AccountInformation />} />
          <Route path="addressBook" element={<AddressBook />} />
          <Route path="myOrder" element={<MyOrders />} />
          <Route path="myFavorites" element={<MyFavorites />} />

        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
