import React from 'react';

const Button = (props) => {
    return (
        <button style={{background: "black"}} onClick={props.handleClick} data-leagueid={props.leagueId}>
            {props.text}
        </button>
    );
};

export default Button;