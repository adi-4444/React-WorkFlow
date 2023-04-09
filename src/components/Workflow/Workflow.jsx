import React, { useEffect, useState } from "react";
import "./workflow.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Workflow = () => {
	const { id } = useParams();
	const [flowList, setFlowList] = useState();
	const [flowNodes, setFlowNodes] = useState();
	const fetchFlowNodes = () => {
		axios(
			`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${id}`
		).then((data) => setFlowList(data.data));
		axios(
			`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5`
		).then((data) => setFlowNodes(data.data));
	};
	useEffect(() => {
		fetchFlowNodes();
	}, []);
	console.log(flowNodes);
	return (
		<div className='workflow-div'>
			<h1>Work Flow Name : {flowList?.name}</h1>
			<div className='worklflow'>
				<h1>Name: asdasd</h1>
				<div className='flow-content'>
					<div className='modules'>
						<h2>Modules</h2>
						<div className='single-module'>Module</div>
					</div>
					<div className='canvas-flow'>Flow</div>
				</div>
			</div>
		</div>
	);
};

export default Workflow;
