import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

//include images into your bundle
//create your first component
//
	
 

const TrafficLight = () => {

	const [ color, setColor] = useState("");

 
	return(
    <div className="traffic-light-box col col-1 display-flex">
		
		<button onClick={() => setColor("red")} className="redLight btn btn-danger" id="mybutton"
	 aria-pressed="mixed" data-bs-toggle="button"></button>
		
		<button onClick={() => setColor("yellow")} className="yellowLight btn btn-warning" id="mybutton"
		 aria-pressed="mixed" data-bs-togggle="button"></button>
		
		<button onClick={() => setColor("green")} className="greenLight btn btn-success" id="mybutton"
		aria-pressed="mixed" data-bs-toggle="button"></button>
		</div>

	
	);	
	};

export default TrafficLight;
