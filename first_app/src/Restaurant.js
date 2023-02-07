import React from "react";
import re1 from './Allimage/re1.jpg';
import './App.css';
function Rest(){
    return(
      <>
        <div className="hom">
            <img style={{width:"100%",height:"800px"}}src={re1} alt=''/>
        <div className="Re1">
            <p>Reserve your table now</p>
            <h1>NAME OF YOUR RESTURENT</h1>
            <button>View More</button>
        </div>
        </div>
        
        </>
     
    );
}
export default Rest;