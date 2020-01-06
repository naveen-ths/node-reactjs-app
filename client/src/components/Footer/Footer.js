import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="blog-footer">
                <p>Blog template <a href="https://getbootstrap.com/">Copyright@2020</a> by <a href="/">@naveen</a>.</p>
                <p>
                    <a href="/">Back to top</a>
                </p>
            </footer>
        )
    }
}