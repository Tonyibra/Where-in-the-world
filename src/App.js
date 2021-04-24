import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import MainSection from "./pages/MainSection";
import { fetchRegions } from "./redux/RegionActions";
import { useDispatch } from "react-redux";
import DetailPage from "./pages/DetailPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from "react-router-dom";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		try {
			setLoading(true);
			dispatch(fetchRegions());
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}, [dispatch]);

	// hooks
	const [isActive, setIsActive] = useState();
	const [dropDown, setDropDown] = useState();
	const [loading, setLoading] = useState(true);
	return (
		<Router>
			<div className="App">
				<Nav isActive={isActive} setIsActive={setIsActive} />
				<Switch>
					<Route path="/" exact>
						<MainSection
							isActive={isActive}
							dropDown={dropDown}
							setDropDown={setDropDown}
							loading={loading}
							setLoading={setLoading}
						/>
					</Route>
					<Route path="/:id" component={DetailPage} exact />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
