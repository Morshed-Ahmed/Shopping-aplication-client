import React from 'react';
import Accessories from '../../Accessories/Accessories';
import Cart from '../../Cart/Cart';
import Clothes from '../../Clothes/Clothes';
import ClothesProDtls from '../../Clothes/ClothesProDtls/ClothesProDtls';
import Login from '../../Login/Login/Login';
import ProductDtls from '../../ProductDtls/ProductDtls';
import Shoes from '../../Shoes/Shoes';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ShopStyle from '../ShopStyle/ShopStyle';
import Checkout from '../../Checkout/Checkout';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ShopStyle />
            <Footer />
        </div>
    );
};

export default Home;