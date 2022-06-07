import React, { useEffect, useState } from "react"
import MouCard from "../components/MouCards";
import Axios from "axios";
import { useUser } from "../context/user-context";

const UserMous = () => {
	const { token,user} = useUser();	
    // const [mous,setMous] = useState([]);
    const [acceptedMou,setAcceptedMou] = useState([]);
    const [rejectedMou,setRejectedMou] = useState([]);
    const [pendingMou,setPendingMou] = useState([]);


    useEffect(() => {
		const token = localStorage.getItem("token");

        Axios.get("http://localhost:5000/mou/getUserMous",{
			headers:{
				"Authorization":"Bearer "+token
			}
		}).then((res) => {
            let accepted =[],rejected =[],pending=[];
			console.log(res.data.data,"daaa");
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
					<div className="heading">MOUs Pending</div>
				<div className="events">
                    {pendingMou &&
                        pendingMou.map((e) => (
                            <MouCard key={e.name} buttonanswer={true} {...e} />
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

export default UserMous;
