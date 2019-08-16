import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './User.css';

export default class User extends React.Component {
    render() {
        return (
            <div className="user-page">
                <Header></Header>
                <Navigation ></Navigation>
                <h1>User</h1>
                <Footer></Footer>
            </div>
        )
    }
}