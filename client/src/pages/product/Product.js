import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './Product.css';

export default class Product extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="product-page">
                    <Header></Header>
                    <Navigation ></Navigation>
                    <h1>Product</h1>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}