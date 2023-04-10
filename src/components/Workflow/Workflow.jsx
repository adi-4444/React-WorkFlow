import React, { useEffect, useState } from "react";
import "./workflow.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modules from "./components/Modules/Modules";
import Canvas from "./components/Canvas/Canvas";

const Workflow = () => {
	const { id } = useParams();
	const [flowDetails, setFlowDetails] = useState();

	const fetchFlowNodes = () => {
		axios(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${id}`)
			.then((data) => setFlowDetails(data.data))
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		fetchFlowNodes();
	}, [id]);
	console.log(flowDetails);
	return (
		<div className='workflow-div'>
			<div className='worklflow'>
				<h2 className='main-heading'>
					Work Flow Name : {flowDetails?.name}
				</h2>
				<div className='flow-content'>
					<Modules />
					<Canvas flowDetails={flowDetails} />
				</div>
			</div>
		</div>
	);
};

export default Workflow;
