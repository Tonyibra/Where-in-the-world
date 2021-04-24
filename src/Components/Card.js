import React from "react";
import "../Style/Style.css";
import { useSelector } from "react-redux";
import numeral from "numeral";
import { Switch, Link } from "react-router-dom";
const Card = ({ isActive, loading, index }) => {
	const { info } = useSelector((state) => state.RegionReducer);

	const getDetail = (e) => {
		console.log(e.target);
	};
	return (
		<Switch>
			<>
				{!loading && (
					<div
						onClick={getDetail}
						className={!isActive ? "card__wrapper" : "card__Darkwrapper"}
					>
						<Link to={`/${info.data[index].name}`}>
							<div className="card__header">
								<div className="card__flag">
									<img src={info.data[index].flag} alt="" />
								</div>
							</div>
							<div className="card__body">
								<div className="title">
									<h2>{info.data[index].name}</h2>
								</div>
								<div className="country__info">
									<h3>
										Population:
										{numeral(info.data[index].population).format("0,0")}
									</h3>
									<h3>Region:{info.data[index].region} </h3>
									<h3>Cpital: {info.data[index].capital} </h3>
								</div>
							</div>
						</Link>
					</div>
				)}
			</>
		</Switch>
	);
};

export default Card;
