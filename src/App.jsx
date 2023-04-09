import "./App.css";
import Home from "./components/Home/Home";
import Workflow from "./components/Workflow/Workflow";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='/workflow/:id' element={<Workflow />} />
			</Routes>
		</div>
	);
}

export default App;
