import React from "react";
import {BrowserRouter as Router,Route,Routes,Link,NavLink,useNavigate } from 'react-router-dom';
function Footer() {
    var history = useNavigate();
    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container px-md-5">
            <div className="row mb-5">
            <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Category</h2>
                <ul className="list-unstyled categories">
                    <li><a onClick={ () =>  history('/wedding') }>Wedding </a></li>
                    <li><a onClick={ () =>  history('/outdoor') }>Treditional Outdoor </a></li>
                    <li><a onClick={ () =>  history('/fashion') }>Fashion Outdoor </a></li>
                    <li><a onClick={ () =>  history('/about') }>About </a></li>
                    <li><a onClick={ () =>  history('/contact') }>Contact </a></li>
                </ul>
                </div>
            </div>
            <div className="col-md">
                {/* <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Archives</h2>
                <ul className="list-unstyled categories">
                    <li><a href="#">October 2018 <span>(6)</span></a></li>
                    <li><a href="#">September 2018 <span>(6)</span></a></li>
                    <li><a href="#">August 2018 <span>(8)</span></a></li>
                    <li><a href="#">July 2018 <span>(2)</span></a></li>
                    <li><a href="#">June 2018 <span>(7)</span></a></li>
                </ul>
                </div> */}
            </div>
            <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Have a Questions?</h2>
                    <div className="block-23 mb-3">
                    <ul>
                        <li><span className="icon icon-map-marker"></span><span className="text">V. Karisalkulam Bhuman Complex Velangudi, Madurai.</span></li>
                        <li><a ><span className="icon icon-phone"></span><span className="text">+91 9894044479 ,<br/> +91 7558152914</span></a></li>
                        <li><a ><span className="icon icon-envelope"></span> <span className="text">priyamdigitalstilllifestudio@gmail.com</span></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://spk-portfolio.netlify.app/" target="_blank">Devpk</a>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
