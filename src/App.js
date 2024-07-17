import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Routes,Link,NavLink,useNavigate } from 'react-router-dom';
import Home from './views/home';
import Wedding from './views/wedding';
import Outdoor from './views/outdoor';
import Fashion from './views/fashion';
import About from './views/about';
import Contact from './views/contact';
import $ from "jquery";
import emailjs from "@emailjs/browser";
import { gapi } from "gapi-script";

function App() {
  localStorage.setItem("initial_loader", null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  //home
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  //wedding
  const [wedd, setWedding] = useState([]);
  const [wedd1, setWedding1] = useState([]);
  //outdoor
  const [out, setOutdoor] = useState([]);
  const [out1, setOutdoor1] = useState([]);
  //fashion
  const [fash, setFashion] = useState([]);
  const [fash1, setFashion1] = useState([]);
  //carousel
  const [caro, setCarousel] = useState([]);

	const fileIds = [
    "1RmGiO9h4Fz1-JlUXL3PLp9THM91vtHpX",
    "16sAaYS0kXkhUl86pzXbKpH5JoVBSs8KN",
    "13zinQOrMX49KcXoLPZVnPDRhVwPQklDm",
    "137KdiOj-DpL5oUn52FtnDBKTTgVkQ5K_", //wedding
    "13pOFpY6ng6ZjdZVzZ00C2lL7jhGm2Snf", //outdoor
    "1oxObzebYZx90kbdovd28x_mDL9CAywJ0", //fashion
    "1b8yWurpdCpQknt8xN0f9yMs146gJTd6I", //carousel
  ];

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (!isOnline) {
      $("body").addClass("loading");
      localStorage.setItem("reloader", null);
    } else {
      localStorage.setItem("reloader", 1);  
      $("body").removeClass("loading");
      setTimeout(() => {
        emailjs.init("Afuqegbh70nDbZG2y");
      }, 2000);

      function start() {
        gapi.client.init({
          apiKey: " AIzaSyDBb49h2QCASANiJ2RNOz29cTLPzLjmzvg",
          clientId:
            " 625783650865-4t1kkrvn5hcnsc9cj7r9d3veguvu0ugq.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/drive",
        });
        fileIds.map((element, index) => {
          gapi.client.load("drive", "v3").then(() => {
            try {
              gapi.client.drive.files
                .list(
                  {
                    includeRemoved: false,
                    spaces: "drive",
                    fileId: element,
                    fields:
                      "nextPageToken, files(id, name, parents, mimeType, modifiedTime)",
                    q: `'${element}' in parents`,
                  },
                  { mode: "cors" }
                )
                .then((response) => {
                  var fileContent = [];
                  fileContent = response.result;
                  if (index == 0) {
                    setData(fileContent);
                  } else if (index == 1) {
                    setData1(fileContent);
                  } else if (index == 2) {
                    setData2(fileContent);
                  } else if (index == 3) {
                    var center = Math.round(fileContent.files.length / 2);
                    var first = fileContent.files.slice(0, center);
                    var second = fileContent.files.slice(center);
                    setWedding(first);
                    setWedding1(second);
                  } else if (index == 4) {
                    var center = Math.round(fileContent.files.length / 2);
                    var first = fileContent.files.slice(0, center);
                    var second = fileContent.files.slice(center);
                    setOutdoor(first);
                    setOutdoor1(second);
                  } else if (index == 5) {
                    var center = Math.round(fileContent.files.length / 2);
                    var first = fileContent.files.slice(0, center);
                    var second = fileContent.files.slice(center);
                    setFashion(first);
                    setFashion1(second);
                  } else if (index == 6) {
                    setCarousel(fileContent.files);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } catch (error) {
              console.log(error);
            }
          });
        });
      }
      gapi.load("client:auth2", start);
    }
     localStorage.setItem("wedding_shuffle", null);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

  }, []);
  
  return (
    <>
      {isOnline ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home data={data} data1={data1} data2={data2} />}></Route>
            <Route exact path="/wedding" element={<Wedding wed={wedd} wed1={wedd1} caros={ caro } />}></Route>
            <Route exact path="/outdoor" element={<Outdoor out={out} out1={out1} caros={ caro } />}></Route>
            <Route exact path="/fashion" element={<Fashion fash={fash} fash1={fash1} caros={ caro }/>}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      ) : ( 
        <div id="offline_page">
          <div className="wrapper">
            <h1 id="offline_h1">OFFLINE</h1>
            <h4 id="offline_h4">Please check your internet connection</h4>

            {/* <a id="offline_btn" onClick={() => history("/")} class="button">
              RETRY
            </a> */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
