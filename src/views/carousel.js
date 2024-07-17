import React, { useState, useEffect } from "react";
import $ from "jquery";
import AOS from "aos";
import "../css/carousel.css";
function Carousel({ caro }) {

  function shuffleArray(array) {
        if (localStorage.getItem("wedding_shuffle") == "null" && array.length!=0) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          localStorage.setItem("wedding_shuffle", 1);
          return array;
        } else {
          localStorage.setItem("wedding_shuffle", 1);
          return array;
        }
  }
     useEffect(() => {
      $("html, body").scrollTop($("body").offset().top);
       AOS.init();
      localStorage.setItem("wedding_shuffle", null);
     }, []);
     
     setTimeout(()=>{
        const images = document.querySelectorAll(".item");
        
        function clearActiveImage() {
          images.forEach(function (image) {
            image.classList.remove("active");
          });
        }

        images.forEach(function (image, index) {
          image.onclick = function (event) {
            event.stopPropagation();
            if (images[index].classList.contains("active")) {
              images[index].classList.remove("active");
            } else {
              clearActiveImage(index);
              images[index].classList.add("active");
            }
          };
        });

        window.addEventListener("click", () => {
          clearActiveImage();
        });
     },3000)
  return (
    <>
      {/* only 10 */}
          <div className="items">
          {shuffleArray(caro)?.map((element, index) => (    
            <img key={index} className="item" src={"https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000"} alt=""></img>
          // <div key={index} className="item" tabIndex="0" style={{backgroundImage:"url('https://drive.google.com/thumbnail?id=" +`${element.id}` +"&sz=w1000')",}}></div>
            ))}
        </div>
    </>
  );
}

export default Carousel;