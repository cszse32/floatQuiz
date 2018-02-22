/* This component displays a link that takes the user to the quiz
*
*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Start = () => {
	return(
		<Link to={'/quiz'} className="startLink">Take the Cash Flow Quiz</Link>
	);
}

export default Start;
