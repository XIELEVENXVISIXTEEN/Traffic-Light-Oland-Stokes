import React, {useState} from "react";
import ReactDOM from "react-dom";

//include images into your bundle
//create your first component
//
	
 

const TrafficLight = () => {

	const [ color, setColor] = useState("");
    return (
		
    <div className="col col-1 display-flex">
		<h2>{color}</h2>
		<span onClick={() => setColor("red")}>
		   <button className="redLight btn btn-danger"></button>
		</span>
		<span onClick={() => setColor("yellow")}>
		   <button className="yellowLight btn btn-warning">Yellow Light</button>
		</span>
		<span onClick={() => setColor("green")}>
		   <button className="greenLight btn btn-success">Green Light</button>
		</span>
    </div>

	
	);
};

export default TrafficLight;
