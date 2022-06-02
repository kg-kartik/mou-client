import React from "react";
import Axios from "axios";
import { useUser } from "../context/user-context";

const MouCard = ({
	mouWith,
    file,
	_id,
	user,
    purpose,
    assignee,
	btn
}) => {

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
				{/* <div className="date">{file}</div> */}
			</div>
			<div className="description">{purpose.substring(0, 80)}...</div>
			{btn ? (
				<div className="status-buttons">
					<button
						onClick={() => statusUpdate("Accepted")}
						className="btn btn-accent">
						Accept
					</button>
					<button
						onClick={() => statusUpdate("Rejected")}
						className="btn btn-accent">
						Reject
					</button>
				</div>
			) :(
				<>
				</>
			)}
		</div>
	);
};

export default MouCard;
