/* Component to render the welcome screen of the quiz
*
*/
import React from 'react';

const Welcome = () => {
	return(
			<div className="welcomePage">
				<h2>Welcome to the Cash Flow Quiz!</h2> <br/>
				<p>What is your name?</p> <br/>

				<input type="text" className="nameField" placeholder="Name" /> <br/><br/>
				<button type="button" className="nextButton" id="nextButton">Next</button>

			</div>
		);
}



export default Welcome;
