// import React from 'react';

const Button = ({value,onClick, disabled}) => {

	return (
		<button className="Button" onClick={onClick} disabled={disabled}>
            {value}
		</button>
	)
}

export default Button;
