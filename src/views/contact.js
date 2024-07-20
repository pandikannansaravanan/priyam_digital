import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./navigation";
import $ from "jquery";
import emailjs from "@emailjs/browser";

function Outdoor() {
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
    $("html, body").scrollTop($("body").offset().top);
    localStorage.setItem("initial_loader", 1);
      setTimeout(() => {
        // Toggle();
      }, 2000);
  }, []);
    		setTimeout(() => {
          $(window).on("resize load", function () {
            
            if ($(window).width() >= 768) {
              $(".js-colorlib-nav-toggle").removeClass("active");
              $(".body").removeClass("offcanvas");
            }
          });
        }, 2000);
  
   const handleSubmit = async (e) => {
    const serviceId = "service_33i65kg";
     const templateId = "template_gvenf0n";
     var params = {
       from_name: $("#name").val(),
       email: $("#mail").val(),
       message: $("#message").val(),
     };
    try {
      await emailjs.send(serviceId, templateId, params);
    } catch (error) {
      console.log(error);
    } finally {
      $(".emailsuccess").removeClass("d-none");
      setTimeout(function () {
        $(".emailsuccess").addClass("d-none");
        $("#name").val("");
        $("#mail").val("");
        $("#message").val("");
      }, 2000);
    }
  };

    return (
      <>
      <div id="colorlib-page">
      <a className="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={() => Toggle()}><i></i></a>
      <Navigation />
        <div id="colorlib-main">
        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4 font-weight-bold">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div className="col-md-3">
                <p><span>Address : </span> <a href="">V. Karisalkulam Bhuman Complex Velangudi, Madurai.</a></p>
              </div>
              <div className="col-md-3">
                <p><span>Phone : </span><a href="">+91 9894044479 ,<br/> +91 7558152914</a></p>
              </div>
              <div className="col-md-6">
                <p><span>Email : </span><a href="">priyamdigitalstilllifestudio@gmail.com</a></p>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <input type="text" id="name" className="form-control" placeholder="Your Name"/>
                  </div>
                  <div className="form-group">
                    <input type="text" id="mail" className="form-control" placeholder="Your Email"/>
                  </div>
                  {/* <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject"/>
                  </div> */}
                  <div className="form-group">
                    <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="button" id="submit" onClick={() => handleSubmit()} value="Send Message" className="btn btn-primary py-3 px-5"/>
                  </div>
                </form>
                  <h6 className="emailsuccess d-none"><b>Email Send Successfully.</b></h6>
              </div>

              <div className="col-md-6">
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe width="430" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=priyam%20digital%20madurai&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                    </div>
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
