import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
	const [workFlowList, setWorkFlowList] = useState();
	const fetchList = () => {
		axios("https://64307b10d4518cfb0e50e555.mockapi.io/workflow").then(
			(data) =>
				setWorkFlowList(data.data).catch((error) => console.log(error))
		);
	};
	useEffect(() => {
		fetchList();
	}, []);

	return (
		<div className='Home'>
			<h1>Work Flows List</h1>
			<div className='list-table'>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Input Type</th>
							<th>Created At</th>
						</tr>
					</thead>
					<tbody>
						{workFlowList?.map((item) => (
							<tr
								key={item.name}
								onClick={() => redirect(item.id)}
							>
								<td>{item?.id}</td>
								<td>
									{" "}
									<Link to={`/workflow/${item.id}`}>
										{item?.name}{" "}
									</Link>
								</td>
								<td>{item?.input_type}</td>
								<td>
									{new Date(
										item?.createdAt
									).toLocaleDateString("en-US")}{" "}
									,{" "}
									{" " +
										new Date(
											item?.createdAt
										).toLocaleTimeString("en-US", {
											hour: "2-digit",
											minute: "2-digit",
										})}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
