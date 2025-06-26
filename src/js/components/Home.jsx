import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [lightColor, setLightColor] = useState("yellow");

	return (

		<div className="text-center">

			<div className="cable"> </div>

				<div className="trafficLight">

					<div className={"luz red " + (lightColor=="red"? "on" : "" )}onClick={()=>setLightColor("red")}></div>
					<div className={"luz yellow " + (lightColor=="yellow"? "on" : "" )} onClick={()=>setLightColor("yellow")}></div>
					<div className={"luz green " + (lightColor=="green"? "on" : "" )} onClick={()=>setLightColor("green")}></div>

				</div>
		</div>

	);
};

export default Home;