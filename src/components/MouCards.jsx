import React from "react";

const MouCard = ({
	name,
    file,
    purpose,
    assignee
}) => {
	return (
		<div className="EventCard">
			<div className="name">{name}</div>
			<div className="details">
				<div className="type">{assignee}</div>
				<div className="date">{file}</div>
			</div>
			<div className="description">{purpose.substring(0, 80)}...</div>
		</div>
	);
};

export default MouCard;
