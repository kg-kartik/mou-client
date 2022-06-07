import React from "react";
import Axios from "axios";
import { useUser } from "../context/user-context";
import { useState,useEffect} from "react";
import FAQModal from "../components/FaqModal"
import FaqAnswerModal from "./FaqAnswerModal";

const MouCard = ({
	mouWith,
    pdf,
	_id,
	user,
    purpose,
    assignee,
	btn,
	buttonanswer
}) => {

	const [modalFAQOpen, setModalFAQOpen] = useState(false);
	const [modalFAQAnswerOpen,setModalFAQAnswerOpen] = useState(false);

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

			<FAQModal
					qrstring={_id}
					isShown={modalFAQOpen}
					setIsShown={setModalFAQOpen}
			/>

			{btn ? (
				<div className="buttons-container">
					<div className="status-buttons">
						<button
							onClick={() => statusUpdate("Accepted")}
							className="btn btn-accept">
							Accept
						</button>
						<button
							onClick={() => statusUpdate("Rejected")}
							className="btn btn-danger reject-button">
							Reject
						</button>
					</div>
					<div>
						<button
							onClick={() => setModalFAQOpen(true)}
							className="btn btn-accent ask-button">
							Ask question
						</button>
					</div>

				</div>
			) :(
				<>
				</>
			)}

			<FaqAnswerModal
				id={_id}
				isShown={modalFAQAnswerOpen}
				setIsShown={setModalFAQAnswerOpen}
			/>

			{buttonanswer ? (
				<div className="buttons-container">
					
					<button
						onClick={() => setModalFAQAnswerOpen(true)}
						className="btn btn-accent answer-button">
						Answer question
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
