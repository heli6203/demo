import { useState } from "react";
import lgtv from "./Allimage/lgtv.jpeg";


// import mitv from "./Allimage/mitv.webp";
 function Var(){

const [image, setImage]= useState(lgtv);
const [h, setH]=useState("250px");
const [w, setW]=useState("250px");

function chage(){
    setImage(lgtv);
    setH("500px");
    setW("500px");
}
return(
    <div>
       <img src={image} alt="img" height={h}
       width={w}/>
        <button onClick={chage}>click</button>
  
  </div>
);
 }
 export default Var;