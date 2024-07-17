import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Routes,Link,NavLink,useNavigate } from 'react-router-dom';
import Navigation from "./navigation";
import $ from "jquery"; 
import background from "../images/frame.jpg";
import logo from "../images/logoi.png";
import AOS from 'aos';
import Footer from "./footer";
import Grid from "./grid";

function Home({ data, data1, data2 }) {
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
	};	
	
	useEffect(() => {
	if (isOnline) {
		$("body").removeClass("loading");
	}
	if (localStorage.getItem("reloader") == "null") {
		window.location.reload();
	}
	$("body").addClass("loading-full");
	$("html, body").scrollTop($("body").offset().top);
	AOS.init();
		setTimeout(() => {
      Toggle();
		if (localStorage.getItem("initial_loader") != "null") {
        $("body").removeClass("loading-full");
      } else {
        setTimeout(() => {
          $("body").removeClass("loading-full");
          localStorage.setItem("initial_loader", 1);
        },5000);
      }
	}, 2000);
	}, []);
		setTimeout(() => {
          $(window).on("resize load", function () {
            console.log($(window).width());
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
						<h2 className="subheading">Welcome To</h2>
						<h1 className="mb-4" style={{color:"rgb(140 14 34)"}}>Priyam Studio</h1>
						<p className="mb-4" style={{color:"black"}}>Adjust your focus when life gets blurry !... The Still Life Studio... for Photography like Wedding, Birthday, Indoor & Outdoor Photo Shoot etc.</p>
						<p><a onClick={ () =>  history('/about') } className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>
					</div>
				</div>
			</div>
			</div>
			<Grid />
		<section className="ftco-section">
		<div className="container">
		<div className="row justify-content-center mb-5 pb-2">
		<div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
		<h2 className="mb-4">Wedding</h2>
		<p>“I love being married. It's so great to find that one special person you want to annoy for the rest of your life.”</p>
		</div>
		</div>
		<div className="row">
			{data?.files?.map((element, index) => (
			<div key={index} className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="blog-entry">
				<a className="new-a img img-2" style={{backgroundImage:  "url('https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000')"}}></a>
				<div className="text text-2 pt-2 mt-3">
			</div>
			</div>
			</div>
			))}
		</div>
		<p className="blog-end text-center" data-aos="fade-up" data-aos-duration="1000"><a onClick={ () =>  history('/wedding') } className="btn-custom new-a">Show Further (wedding ceremony) <span className="ion-ios-arrow-forward"></span></a></p>
		<div className="row justify-content-center mb-5 pb-2">
		<div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
		<h2 className="mb-4">Treditional Outdoor</h2>
		<p>A photograph keeps a moment from running away. A photograph is the pause button of life. Hard to forget such strong memories with the best people.</p>
		</div>
		</div>
		<div className="row">
			{data1?.files?.map((element, index) => (
			<div key={index} className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="blog-entry">
				<a className="new-a img img-2" style={{backgroundImage:  "url('https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000')"}}></a>
				<div className="text text-2 pt-2 mt-3">
			</div>
			</div>
			</div>
			))}
		</div>
		<p className="blog-end text-center" data-aos="fade-up" data-aos-duration="1000"><a onClick={ () =>  history('/outdoor') } className="btn-custom new-a">Show Further (treditional outdoor) <span className="ion-ios-arrow-forward"></span></a></p>
		<div className="row justify-content-center mb-5 pb-2">
		<div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
		<h2 className="mb-4">Fashion Outdoor</h2>
		<p>A photograph keeps a moment from running away. A photograph is the pause button of life. Hard to forget such strong memories with the best people.</p>
		</div>
		</div>
		<div className="row">
			{data2?.files?.map((element, index) => (
			<div key={index} className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="blog-entry">
				<a className="new-a img img-2" style={{backgroundImage:  "url('https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000')"}}></a>
				<div className="text text-2 pt-2 mt-3">
			</div>
			</div>
			</div>
			))}
		</div>
		<p className="blog-end text-center" data-aos="fade-up" data-aos-duration="1000"><a onClick={ () =>  history('/fashion') } className="btn-custom new-a">Show Further ( fashion outdoor) <span className="ion-ios-arrow-forward"></span></a></p>
		</div>
		</section>
		</section>
		<Footer/>
			</div>
		</div>
    );
}

export default Home;
