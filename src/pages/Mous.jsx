import React, { useEffect, useState } from "react"
import MouCard from "../components/MouCards";
import Axios from "axios";

const Mous = () => {
	
    // const [mous,setMous] = useState([]);
    const [acceptedMou,setAcceptedMou] = useState([]);
    const [rejectedMou,setRejectedMou] = useState([]);
    const [pendingMou,setPendingMou] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:5000/mou/getAllMous",{
			headers:{
				"Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmNDY0OGY4M2VhYjRhYWFhNzgzNWEiLCJpYXQiOjE2NTI3MDQzNTh9.ccsPBXshG4KG6aTWS2aVxVNyrIeb-hPFe7KNGNTZD3c"
			}
		}).then((res) => {
            let accepted =[],rejected =[],pending=[];
			console.log(res.data.data);
            res.data.data.map((mou) => {
                if(mou.status === "Accepted"){
                    console.log(mou,"accepted");
                    accepted.push(mou);
                }
                
                if(mou.status === "Pending"){
                    pending.push(mou);
                }
                
                if(mou.status === "Rejected"){
                    rejected.push(mou);
                }
                
            })
            setAcceptedMou(accepted);
            setPendingMou(pending);
            setRejectedMou(rejected);

		}).catch((err) => {
			console.log(err,"ERROR");
		})
    },[])

    return (
		<div className="EventCards">
			<div className="container">
					<div className="heading">MOUs Signed</div>
				<div className="events">
                    {pendingMou &&
                        pendingMou.map((e) => (
                            <MouCard btn={true} key={e.name} {...e} />
                        ))}
				</div>
			</div>

            <div className="container">
					<div className="heading">MOUs Accepted</div>
				<div className="events">
                    {acceptedMou &&
                        acceptedMou.map((e) => (
                            <MouCard key={e.name} {...e} />
                        ))}
				</div>
			</div>

            <div className="container">
					<div className="heading">MOUs Rejected</div>
				<div className="events">
                    {rejectedMou &&
                        rejectedMou.map((e) => (
                            <MouCard key={e.name} {...e} />
                        ))}
				</div>
			</div>
		</div>
	);
};

export default Mous;
