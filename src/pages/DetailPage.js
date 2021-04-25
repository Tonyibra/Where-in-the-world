import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useLocation, useHistory } from "react-router-dom";
import { fetchDetails } from "../redux/RegionActions";
import { CircularProgress } from "@material-ui/core";
import numeral from "numeral";
import BorderCountries from "../Components/BorderCountries";

const DetailPage = ({ isActive }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const locationPath = location.pathname;
	const countrylocation = locationPath.split("/")[1];
	const [loadingData, setLoadingData] = useState(true);
	const goBackHandler = () => {
		history.push("/");
	};

	useEffect(async () => {
		try {
			setLoadingData(true);
			await dispatch(fetchDetails(countrylocation));
			setLoadingData(false);
		} catch (error) {
			setLoadingData(false);
		}
	}, [countrylocation]);
	const { details } = useSelector((state) => state.RegionReducer);

	return (
		<div className={isActive ? "detail-wrapper" : "detail-Darkwrapper"}>
			<div className="detail-container">
				<div className="top-section">
					<div className={isActive ? "btn-wrapper" : "btn-Darkwrapper"}>
						<button onClick={goBackHandler}>
							<KeyboardBackspaceIcon className="arrow_btn" />
							<span>Back</span>
						</button>
					</div>
				</div>

				{!loadingData ? (
					<div className="flex-container">
						<div className="right-section">
							<img src={details.data[0].flag} alt="flag" />
						</div>
						<div className={isActive ? "left-section" : "left-Darksection "}>
							<div className="info-wrapper">
								<div
									className={
										isActive ? "leftinfo-section" : "leftinfo-Darksection"
									}
								>
									<div className="country_name">
										<h2>{details.data[0].name}</h2>
									</div>
									<h5>
										Native Name: <span>{details.data[0].nativeName}</span>
									</h5>
									<h5>
										Population:{" "}
										<span>
											{numeral(details.data[0].population).format("0,0")}
										</span>
									</h5>
									<h5>
										Region: <span>{details.data[0].region}</span>
									</h5>
									<h5>
										Sub Region: <span>{details.data[0].subregion}</span>
									</h5>
									<h5>
										Captial: <span>{details.data[0].capital}</span>
									</h5>
								</div>

								<div
									className={
										isActive
											? "rightinfo-section active"
											: "rightinfo-Darksection "
									}
								>
									<h5>
										Top Level Domain:
										<span> {details.data[0].topLevelDomain}</span>
									</h5>
									<h5>
										Currencies:
										{<span> {details.data[0].currencies[0].name}</span>}
									</h5>
									<h5>
										Languagues:{" "}
										{details.data[0].languages.map((lang) => (
											<span className="languages_span">{`${lang.name},`}</span>
										))}
									</h5>
								</div>
							</div>
							<div className="footer">
								<div className="header">
									<h3>Border Countries:</h3>
								</div>
								<div className={"btn-wrapper"}>
									<BorderCountries />
								</div>
							</div>
						</div>
					</div>
				) : (
					<CircularProgress />
				)}
			</div>
		</div>
	);
};

export default DetailPage;
