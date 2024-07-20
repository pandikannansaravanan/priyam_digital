import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/open-iconic-bootstrap.min.css';
import '../css/animate.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.css';
import '../css/aos.css';
import '../css/ionicons.min.css';
import '../css/bootstrap-datepicker.css';
import '../css/jquery.timepicker.css';
import '../css/flaticon.css';
import '../css/icomoon.css';
import '../css/style.css';
import $ from "jquery"; 
// import home from "../images/home.gif";
// import wed from "../images/tre-we.gif";
// import wed_o from "../images/tr-ot.webp";
// import fa from "../images/fa.gif";
// import co from "../images/cont.png";
// import inf from "../images/info.png";

function Navigation() {
    var history = useNavigate();
  const location = useLocation();
	const { hash, pathname, search } = location;
	useEffect(() => {
		if (pathname == '/') {
        $(".1li").addClass("colorlib-active");
		} else if (pathname == '/wedding') {
		$(".2li").addClass("colorlib-active");
		} else if (pathname == '/outdoor') {
		$(".3li").addClass("colorlib-active");
		} else if (pathname == '/fashion') {
		$(".4li").addClass("colorlib-active");
		} else if (pathname == '/about') {
		$(".5li").addClass("colorlib-active");
		} else if (pathname == '/contact') {
		$(".6li").addClass("colorlib-active");
		}

	$(document).on("click", ".navi li", function () {
		if ($(window).width() <= 992) {
			$(".js-colorlib-nav-toggle").removeClass("active");
			$(".body").removeClass("offcanvas");
		}
      });
	}, [])
	            function isIOS() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }

            function isAndroid() {
                return /Android/i.test(navigator.userAgent);
            }

            function redirectToMap(latitude, longitude) {
                var url;
                if (isIOS()) {
                    // Apple Maps URL scheme
                    url = "http://maps.apple.com/?ll="+latitude+","+longitude;
                } else if (isAndroid()) {
                    // Google Maps URL scheme for Android
                    url = "geo:"+latitude+","+longitude;
                } else {
                    // Fallback to Google Maps website for non-mobile or unsupported devices
                    url = "https://www.google.com/maps?q="+latitude+","+longitude;
                }
				window.open(url, "_blank", "noopener, noreferrer");
            }

	return (
		<>
		<aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
				<h1 id="colorlib-logo"><a onClick={() => history('/')}>Priyam Digital @<br /><nav className="new-title">Still Life Studios</nav><span>˗ˏˋ 📸 ˎˊ˗</span></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul className="navi">
					<li className="1li">{/* <img src={home} height={30} width={30}/> */}<a  onClick={ () =>  history('/') }>Home</a></li>
					<li className="2li">{/* <img src={wed} height={25} width={25}/> */}<a  onClick={ () =>  history('/wedding') }>Wedding</a></li>
					<li className="3li">{/* <img src={wed_o} height={25} width={25}/> */}<a  onClick={ () =>  history('/outdoor') }>Outdoor</a></li>
					<li className="4li">{/* <img src={fa} height={30} width={30}/> */}<a  onClick={ () =>  history('/fashion') }>Fashion</a></li>
					<li className="5li">{/* <img src={inf} height={18} width={18}/> */}<a  onClick={ () =>  history('/about') }>About</a></li>
					<li className="6li">{/* <img src={co} height={18} width={18}/> */}<a  onClick={ () =>  history('/contact') }>Contact</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://spk-portfolio.netlify.app/" target="_blank">DevPK</a>
				<ul className="increase">
					<li><a href="https://www.facebook.com/profile.php?id=61551804249707" target="_blank"><i className="icon-facebook"></i></a></li>
					<li><a href="https://youtube.com/@still_life_studio?si=e-IVw55DUqQTA8hw" target="_blank"><i className="icon-youtube"></i></a></li>
					<li><a href="https://www.instagram.com/priyam__still_life_studio?igsh=MWhtYTZqdXh2bGN2OQ==" target="_blank"><i className="icon-instagram"></i></a></li>
					<li><a onClick={ () =>  redirectToMap("9.963004673527617", "78.12018252980286") }><i className="icon-pin_drop"></i></a></li>
				</ul>
			</div>
        </aside>      
    </>
  );
}

export default Navigation;
