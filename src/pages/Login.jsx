import { Fragment, useEffect, useState } from "react";
import { useUser } from "../context/user-context";
import { useNavigate } from "react-router-dom";
import UserMous from "./UserMous";

const FormEnter = () => {
	const { user, login, logout } = useUser();
	const isAuth = localStorage.getItem("token") ? true : false;
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	// TODO: Make Protected Route
	// if (!isAuth) return;

	const [userType,setUserType] = useState(user?.userType === "Admin" ? "Admin" :"Faculty")

	return (
		<>
		<div className="FormEnter">
			<div className="container">
				<div className="heading">{isAuth ? `${userType} Profile`: `${userType} login`}</div>
				<div className="description">
				</div>
				<div className="form">
					{!isAuth ? (
						<Fragment>
							<div className="form-grp">
								<label htmlFor="email">
									What{`'`}s your email?
								</label>
									<input
										type="text"
										name="username"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
										placeholder="Enter your email"
									/>
							</div>
							<div className="form-grp">
								<label htmlFor="password">
									{" "}
									What{`'`}s your password?
								</label>
								<input
									type="password"
									name="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className="helper-line">
								Forgot your password?
							</div>
							<button
								className="btn btn-accent"
								onClick={() => {
									login(username, password);
								}}>
								{/* > */}
								Login
							</button>
						</Fragment>
					) : (
						<>
						<Fragment>
							<div className="user">
								<div className="user__info">
									<div className="user__info__name">
										{user?.name}
									</div>
									<div className="user__info__email">
										{user?.email}
									</div>
								</div>
								{user?.userType === "Admin" ? (
									<button
									className="button btn btn-primary btn-cta"
									onClick={() => navigate("/mou/mous")}>
										See MOUs Statuses
									</button>
								) : (
								<button
									className="button btn btn-primary btn-cta"
									onClick={() => navigate("/mou/form")}>
									Go to Form
								</button>

								)}
							</div>
							<div className="not-user" onClick={logout}>
								<div className="not-user__text">
									Not 
									{" "+user?.name.split(" ")[0]}? Login as other
									user
								</div>
							</div>
						</Fragment>
						</>
					)}
				</div>
			</div>
		</div>
		{user && user?.userType !== "Admin" ? <UserMous /> : (<></>)}
	</>
	);
};

export default FormEnter;
