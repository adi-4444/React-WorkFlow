import React, { useState, useRef, useCallback } from "react";
import "./canvas.css";
import ReactFlow, {
	ReactFlowProvider,
	addEdge,
	useNodesState,
	useEdgesState,
	Controls,
	Background,
	MiniMap,
} from "reactflow";

const Canvas = ({ flowDetails }) => {
	const reactFlowRef = useRef(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(
		[
			{
				id: "0",
				type: "input",
				data: {
					label: "Input",
					inputType: flowDetails?.input_type,
				},
				position: { x: 0, y: 0 },
				valid: true,
			},
		].map((node) => ({ ...node, valid: node.valid ?? false }))
	);

	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [nodeInstance, setNodeInstance] = useState(null);

	const onConnect = useCallback(
		(data) => setEdges((edges) => addEdge(data, edges)),
		[]
	);

	const onDragOver = useCallback((e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	}, []);

	const onDrop = useCallback(
		(e) => {
			e.preventDefault();
			console.log("drag drop");
			const data = JSON.parse(e.dataTransfer.getData("text/plain"));
			const position = nodeInstance.project({
				x: e.clientX - e.target.getBoundingClientRect().x,
				y: e.clientY - e.target.getBoundingClientRect().y,
			});

			const newNode = {
				id: data.id,
				type: "default",
				position,
				data: { label: data.name },
				isValid: false,
			};
			setNodes((nodes) => [...nodes, newNode]);
		},
		[nodeInstance]
	);

	return (
		<div className='canvas'>
			<ReactFlowProvider>
				<div className='canvasflow' ref={reactFlowRef}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						onInit={setNodeInstance}
						onDrop={onDrop}
						onDragOver={onDragOver}
						fitView
					>
						<Controls />
						<Background gap={25} size={2} color={"grey"} />
						<MiniMap />
					</ReactFlow>
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Canvas;
