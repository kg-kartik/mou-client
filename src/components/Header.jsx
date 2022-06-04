import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="Header">
			<div className="container">
				<div className="logo">
					<div className="logo__text" onClick={() => navigate("/")}>
						MoU
					</div>
				</div>

				<div className="nav">
					<div
						className="nav__item"
						onClick={() => navigate("/profile")}>
						<RiUser3Line />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
