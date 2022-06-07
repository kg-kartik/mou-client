import Modal from "react-modal";
import Axios from "axios"
import { JackInTheBox } from "react-awesome-reveal";
import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";


const FaqModal= ({ isShown, setIsShown, qrstring }) => {
	
    const [password, setPassword] = useState("");
    const [prevQues,setPrevQues] = useState("")
	const [prevAns,setPrevAns] = useState("");

    const token = localStorage.getItem("token");

	const addQuestion = () => {
		Axios.post("http://localhost:5000/mou/addQuestion",{
		    question:password,
			mouId:qrstring,
		},{
			headers:{
				"Authorization":"Bearer "+token
			}
		}).then((data) => {
			console.log(data);
			window.alert("Question Added");
		}).catch((err) => {
			console.log(err);
		})
	}

    useEffect(() => {
		if(isShown) {
			Axios.post("http://localhost:5000/mou/getAMou",{
				_id:qrstring
			}).then((res) => {
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
								Ask your questions
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
                                    What{`'`}s your question?
                                </label>

                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Enter your question"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                            <button
								className="btn btn-submit"
								onClick={() => addQuestion() }>
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

export default FaqModal;
