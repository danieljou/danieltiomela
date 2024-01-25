/** @format */

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Software Engineer",
					"Freelancer",
					"MERN Stack Developer",
					"Django and DRF Developer",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
