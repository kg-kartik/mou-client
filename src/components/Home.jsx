import { useNavigate } from "react-router-dom";
const HeroSection = () => {
	const navigate = useNavigate();
	return (
		<div className="HeroSection">
			<div className="container">
				<div className="left">
					<div className="heading">Welcome to MOU</div>
					<div className="description">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Hic ea aspernatur veniam earum delectus quod,
						fugiat sed dignissimos aperiam deserunt consequatur
						iure, neque qui molestias iusto.
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
