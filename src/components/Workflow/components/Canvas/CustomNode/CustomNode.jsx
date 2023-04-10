import React from "react";
import "./customnode.css";

const CustomNode = ({ data }) => {
	console.log(data);
	return (
		<div className='node'>
			<div className='node-input'>A</div>
			<div className='node-name'>{data?.label}</div>
			<div className='node-output'>B</div>
		</div>
	);
};

export default CustomNode;
