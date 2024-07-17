import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import $ from "jquery";
import AOS from "aos";
import Footer from "./footer";
import Carousel from "./carousel";

function Outdoor({ out, out1, caros }) {
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
    $("body").addClass("loading-full");
    $("html, body").scrollTop($("body").offset().top);
    AOS.init();
    // localStorage.setItem("wedding_shuffle", null);
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

  return (
      <>
    <div id="colorlib-page">
		<a className="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={() => Toggle()}><i></i></a>
      <Navigation />
        <div id="colorlib-main">
        <Carousel caro={caros}/> 
        <section className="ftco-section-2">
          <div className="photograhy">
            <div className="row row-grid">
              <div className="grid-div">
              {out?.map((element, index) => (
                      <img key={index} src={"https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000"} data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"/>
              ))}
                </div>
                <div className="grid-div">
              {out1?.map((element, index) => (
                      <img key={index} src={"https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000"} data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"/>
              ))}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
      </div>
    </>
  );
}

export default Outdoor;
