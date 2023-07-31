import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpeg"
import './team.css';
import { useState } from "react";

function WholeteamPage() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return <>

        <div className="mainport" id="team">

            <div className={"toppart"}>
                <h1 className={"mainhead"}>Meet The Team</h1>
            </div>


            <div className={toggleState === 1 ? "content  active-content" : "content"}>
            
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>
            </div>



            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>
                
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>
            </div>



            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>
                
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img1} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={img2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>NAME<br/>POSITION</span>
                </div>
            </div>


            <div className="Tabcontainer">
                <div className="bloc-tabs">
                    <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    >
                    Office Bearers
                    </button>
                    <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    >
                    All Members
                    </button>
                    <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    >
                    Alumni
                    </button>
                </div>
                
            </div>
        </div>
    
    </>

}

export default WholeteamPage