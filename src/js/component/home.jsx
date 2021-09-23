import React from "react";
import PropTypes from "prop-types";
import { Numb } from "./secoundCounter.jsx";

//include images into your bundle

//create your first component

const Home = props => {
	const seconds = props.seconds;
	const stringSeconds = seconds.toString().padStart(6, "000000");
	const secondsArray = stringSeconds.split("");

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="counter">
				<div className="number-container">
					<p className="number ">
						<i className="far fa-clock"></i>
					</p>
				</div>

				{secondsArray.map((item, index) => {
					return <Numb number={item} key={index} />;
				})}
			</div>
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number
};

export default Home;
