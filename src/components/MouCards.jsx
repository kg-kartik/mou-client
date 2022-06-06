import React from "react";
import Axios from "axios";
import { useUser } from "../context/user-context";

const MouCard = ({
	mouWith,
    pdf,
	_id,
	user,
    purpose,
    assignee,
	btn
}) => {

	console.log(pdf);

	const token = localStorage.getItem("token");

	const statusUpdate = (status) => {
		Axios.post("http://localhost:5000/mou/updateStatus",{
			status,
			mouId:_id,
		},{
			headers:{
				"Authorization":"Bearer "+token
			}
		}).then((data) => {
			console.log(data);
			window.alert("Status updated");
		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="EventCard">
			<div className="name">{mouWith}</div>
			<div className="details">
				<div className="type">{user.name}</div>
				<div className="date"><a href={pdf}>Proposal Link</a></div>
			</div>
			<div className="description">{purpose}...</div>
			{btn ? (
				<div className="buttons-container">
					<div className="status-buttons">
						<button
							onClick={() => statusUpdate("Accepted")}
							className="btn btn-accent">
							Accept
						</button>
						<button
							onClick={() => statusUpdate("Rejected")}
							className="btn btn-accent reject-button">
							Reject
						</button>
					</div>
					<div>
						<button
							onClick={() => statusUpdate("Accepted")}
							className="btn btn-accent ask-button">
							Ask question
						</button>
					</div>
				</div>
			) :(
				<>
				</>
			)}
		</div>
	);
};

export default MouCard;
