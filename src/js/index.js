//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const intervalID = setInterval(myCallback, 1000);

let counter = 0;

function myCallback() {
    counter++
    ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={counter}/>);
}