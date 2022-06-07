import { useNavigate } from "react-router-dom";

const HeroSection = () => {
	const navigate = useNavigate();
	return (
		<div className="HeroSection">
			<div className="container">
				<div className="left">
					<div className="heading">Welcome to MOU</div>
					<div className="description">
					After spending hours running to get your MOUs approved, try our app to make it quick and seamless from the comfort of your own office.
					</div>
					<div className="btn-grp">
						<button
							className="btn btn-accent"
							onClick={() => navigate("/profile")}>
							Get Started
						</button>
						<button className="btn ">Learn More</button>
					</div>
				</div>
				<div className="right">
					<div className="img-container"></div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
