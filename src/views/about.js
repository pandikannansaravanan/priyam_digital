import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Routes,Link,NavLink,useNavigate } from 'react-router-dom';
import Navigation from "./navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import $ from "jquery"; 
import background from "../images/frame.jpg";
import logo from "../images/logoi.png";	
import Footer from "./footer";
function About() {
	var history = useNavigate();
    	const [isOnline, setIsOnline] = useState(navigator.onLine);
	
	var Toggle = () => {
      if ($(".js-colorlib-nav-toggle").hasClass("active")) {
        $(".js-colorlib-nav-toggle").removeClass("active");
        $(".body").removeClass("offcanvas");
      } else {
        $(".js-colorlib-nav-toggle").addClass("active");
        $(".body").addClass("offcanvas");
      }
		useEffect(() => {
			if (isOnline) {
            $("body").removeClass("loading");
          }
        $("html, body").scrollTop($("body").offset().top);
        localStorage.setItem("initial_loader", 1);
        setTimeout(() => {
          // Toggle();
        }, 2000);
      });
    };
  		setTimeout(() => {
        $(window).on("resize load", function () {
          
          if ($(window).width() >= 768) {
            $(".js-colorlib-nav-toggle").removeClass("active");
            $(".body").removeClass("offcanvas");
          }
        });
      }, 2000);
  return (
   <div id="colorlib-page">
		<a className="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={() => Toggle()}><i></i></a>
		<Navigation />
		<div id="colorlib-main">
		<section className="ftco-section-2">
			<div className="hero-wrap js-fullheight" style={{ backgroundImage: `url(${background})`}} data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
			<div className="js-fullheight d-flex justify-content-center align-items-center">
				<div className="col-md-8 text text-center" style={{marginTop:"30px"}}>
					<div className="img mb-4" style={{backgroundImage: `url(${logo})`}}></div>
					{/* <div className="img mb-4" style={{backgroundImage: "url('https://drive.google.com/thumbnail?id=1gnahcTtLMgnqEVUaNE-TutbZdUOm67l-&sz=w1000')"}}></div> */}
					<div className="desc">
						<h2 className="subheading">Hello It's</h2>
						<h1 className="mb-4" style={{color:"rgb(140 14 34)"}}>Priyam Studio</h1>
						<p className="mb-4" style={{color:"black"}}>Adjust your focus when life gets blurry !... The Still Life Studio... for Photography like Wedding, Birthday, Indoor & Outdoor Photo Shoot etc.</p>
              <ul className="ftco-social mt-3">
                <li><a href="https://youtube.com/@still_life_studio?si=e-IVw55DUqQTA8hw" target="_blank"><span className="icon"><i className="bi bi-youtube"></i></span></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61551804249707" target="_blank"><span className="icon-facebook"></span></a></li>
                <li><a href="https://www.instagram.com/priyam__still_life_studio?igsh=MWhtYTZqdXh2bGN2OQ==" target="_blank"><span className="icon-instagram"></span></a></li>
              </ul>
					</div>
				</div>
			</div>
			</div>
		</section>
		<Footer/>
			</div>
		</div>
  );
}

export default About;
