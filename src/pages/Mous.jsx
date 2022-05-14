import React from "react"
import MouCard from "../components/MouCards";

const Mous = () => {
	
    const mous = [{
        name:"lol",
        purpose:"Internship program to offer internship to 23 batch students for full stack dev roles",
        assignee:"Mr Ramesh",
        file:"lol"
    },
    {
        name:"lol",
        purpose:"Internship program to offer internship to 23 batch students for full stack dev roles",
        assignee:"Mr Ramesh",
        file:"lol"
    },
    {
        name:"lol",
        purpose:"Internship program to offer internship to 23 batch students for full stack dev roles",
        assignee:"Mr Ramesh",
        file:"lol"
    },
    {
        name:"lol",
        purpose:"Internship program to offer internship to 23 batch students for full stack dev roles",
        assignee:"Mr Ramesh",
        file:"lol"
    }
]

    return (
		<div className="EventCards">
			<div className="container">
					<div className="heading">MOUs Signed</div>
				<div className="events">
                    {mous &&
                        mous.map((e) => (
                            <MouCard key={e.name} {...e} />
                        ))}
				</div>
			</div>
		</div>
	);
};

export default Mous;
