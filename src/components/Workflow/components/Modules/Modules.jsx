import React, { useState, useEffect } from "react";
import "./modules.css";
import axios from "axios";

const Modules = () => {
	const [flowModules, setFlowModules] = useState();
	const [pages, setpages] = useState(1);

	const fetchModules = () => {
		axios(
			`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${pages}&limit=5`
		)
			.then((data) => setFlowModules(data.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchModules();
	}, [pages]);

	console.log(flowModules);
	return (
		<div className='flow-modules'>
			<h2 className='heading'>Modules</h2>
			<div className='all-modules-div'>
				<div className='all-modules'>
					{flowModules?.map((item) => (
						<div className='module' key={item?.id}>
							<div className='input'>
								{item?.input_type.toUpperCase()}
							</div>
							<div className='module-name'>{item?.name}</div>
							<div className='output'>
								{item?.output_type.toUpperCase()}
							</div>
						</div>
					))}
				</div>
				<div className='pagination'>1 2 3 4</div>
			</div>
		</div>
	);
};

export default Modules;
