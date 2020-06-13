import React from 'react';
import './NavBar.css'

const NavBar = props => {
    return (
        <nav className="navBar navbar-expand-lg">
            <div className=""> Bugs Bunny Clicky Game</div>
            <div>{props.scores.topMessage} </div>
            <div>Score: {props.scores.score} |
             Top Score: {props.scores.topScore} </div>
        </nav>
    );
};

export default NavBar;