import React, { useState, useEffect } from "react";
import "../css/grid.css";
function Grid() {

     useEffect(() => {
     }, []);
    
  return (
    <>
      <div className="c-heroImageGrid">
        <div className="container123">
          <div className="column1"></div>
          <div className="column1">
            <div className="row1"></div>
            <div className="row1">
              <div>
                <div className="text">
                  <h6>
                    “We are making photographs to understand what<br/>our lives mean<br/>
                    to us.”
                  </h6>
                  {/* <p>
							Lorem ipsum dolor sit amet, consectetuer
							adipiscing elit, sed diam nonummy nibh
							euismod tincidunt ut laoreet dolore magna
							aliquam erat volutpat. Ut wisi enim ad
							minim veniam, quis nostrud exerci tation
							ullamcorper suscipit lobortis nisl ut aliquip
							ex ea commodo consequat. Duis autem
						</p> */}
                </div>
              </div>
              <div></div>
            </div>
            <div className="row1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;