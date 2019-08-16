import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Header></Header>
                <Navigation ></Navigation>
                <h1>Home</h1>
                <Footer></Footer>
            </div>
        )
    }
}