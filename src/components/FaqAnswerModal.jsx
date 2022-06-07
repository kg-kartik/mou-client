import Modal from "react-modal";
import Axios from "axios"
import { JackInTheBox } from "react-awesome-reveal";
import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";


const FaqAnswerModal= ({ isShown, setIsShown,id}) => {
	

    const [password, setPassword] = useState("");
    const [prevQues,setPrevQues] = useState("")
	const [prevAns,setPrevAns] = useState("");

    const token = localStorage.getItem("token");

	const addAnswer = () => {
		Axios.post("http://localhost:5000/mou/addAnswer",{
		    answer:password,
			mouId:id,
		},{
			headers:{
				"Authorization":"Bearer "+token
			}
		}).then((data) => {
			console.log(data);
			window.alert("Answer Added");
		}).catch((err) => {
			console.log(err);
		})
	}

    useEffect(() => {
        if(isShown){
            Axios.post("http://localhost:5000/mou/getAMou",{
                _id:id
            }).then((res) => {
                console.log(res.data,"lol");
                setPrevQues(res.data.data.question);
                setPrevAns(res.data.data.answer);
            }).catch((err) => {
                console.log(err);
            })
        }
    },[isShown])

    return (
		<div>
			<Modal
				isOpen={isShown}
				ariaHideApp={false}
				className="modal FAQModal"
				overlayClassName="modal-overlay">
				<JackInTheBox triggerOnce>
					<div className="modal-container">
						<div className="modal__header">
							<div className="modal__heading">
								Add answer
							</div>
							<div className="modal__close-icon">
								<RiCloseCircleLine
									id="close-icon"
									size="2em"
									onClick={() => setIsShown(false)}
								/>
							</div>
						</div>
						<div className="main-content">
                            <div className="form-grp">
                                <label htmlFor="password">
                                    {" "}
                                    What{`'`}s your answer?
                                </label>

                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Enter your answer"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            <button
								className="btn btn-submit"
								onClick={() => addAnswer() }>
								{/* > */}
							    Submit
							</button>

                            </div>


                            <div className="modal__heading">
                                Answer to previous questions
                            </div>

							<div className="questions scroll-shadows">


									<div
										className="element"
										>
										<div className="question">
											<strong className="color-gray">
												Question.{" "}
											</strong>
											{prevQues}
										</div>
										<div className="answer">
											<strong className="color-green">
												Answer.{" "}
											</strong>
											{prevAns}
										</div>
									</div>
							</div>
						</div>
					</div>
				</JackInTheBox>
			</Modal>
		</div>
	);
};

export default FaqAnswerModal;
