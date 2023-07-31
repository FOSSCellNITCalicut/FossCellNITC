import Aabid from "./images/selfies/Aabid Mohamed.png";
import Abin from "./images/selfies/Abin_Latheef.png";
import Alen from "./images/selfies/Alen_Antony.png";
import Aravind from "./images/selfies/Aravind_I_M.png";
import not from "./images/selfies/not.png";
import Afraz from "./images/selfies/Afraz_ahmed.png";
import Arjun from "./images/selfies/Arjun_M_Murali-fotor-20230708202045.png";
import Chetan from "./images/selfies/Chetan_Ram_Bhukya.png";
import Cliford from "./images/selfies/Cliford.png";
import Hadif from "./images/selfies/Hadif_Yassin_Hameed.png";
import Hemanth from "./images/selfies/Hemanth_Chodisetti.png";
import Joel from "./images/selfies/Joel George John.png";
import Joel2 from "./images/selfies/Joel Robin P.png";
import John from "./images/selfies/John_D-fotor-20230708202151.png";
import Juby from "./images/selfies/Juby Johnson.png";
import Madhav from "./images/selfies/Madhav_Prabhu.png";
import Mohamed_Afthab from "./images/selfies/Mohamed_Afthab.png";
import Mohammed_Ameen from "./images/selfies/Mohammed_Ameen.png";
import Muhammed from "./images/selfies/Muhammed Jaseem.png";
import Neena from "./images/selfies/Neena_MS.png";
import Pranav from "./images/selfies/Pranav R Nair.png";
import Ppras from "./images/selfies/Pranav_Prashant.png";
import Rajat from "./images/selfies/Rajat.png";
import Simmon from "./images/selfies/Simmon Mathew Shaji.png";
import Sinadin from "./images/selfies/Sinadin Shan.png";
import Sree from "./images/selfies/Sreevalsan.png";
import Piyush from "./images/selfies/Piyush_soni.png";
import Simon from "./images/selfies/Simon_shaji.png";
import Veda from "./images/selfies/Vedasree_rodi.png";
import Vimal from "./images/selfies/Vimal Joseph.png";

import './team2.css';
import { useState } from "react";

function WholeteamPage() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return <>

        <div className="mainport" id="about">

            <div className={"toppart"}>
                <h1 className={"mainhead"}>Meet The Team</h1>
            </div>


            <div className={toggleState === 1 ? "content  active-content" : "content"}>
            
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Mohamed_Afthab} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>Mohamed Afthab<br/>Secretary</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Madhav} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Madhav Prabhu<br/>Joint Secretary</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Mohammed_Ameen} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>Mohamed Ameen<br/>Treasurer</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Joel2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Joel Robin<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Sree} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Sreevalsan<br/>Event Coordinator</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Lehan<br/>Event Coordinator</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Amal<br/>Tech Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Neena} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Neena<br/>Content and Outreach</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Hemanth} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Hemanth<br/>Content and Outreach</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Mithun<br/>Design Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Afraz} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Afraz<br/>Marketing Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Joel} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Joel John<br/>Media Head</span>
                </div>
            </div>



            <div className={toggleState === 2 ? "content  active-content" : "content"}><div className={"individual"}>
                    <div className="beneath">
                        <img src={Mohamed_Afthab} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>Mohamed Afthab<br/>Secretary</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Madhav} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Madhav Prabhu<br/>Joint Secretary</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Mohammed_Ameen} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>Mohamed Ameen<br/>Treasurer</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Joel2} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Joel Robin<br/>POSITION</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Sree} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Sreevalsan<br/>Event Coordinator</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Lehan<br/>Event Coordinator</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Amal<br/>Tech Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Neena} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Neena<br/>Content and Outreach</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Hemanth} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Hemanth<br/>Content and Outreach</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={not} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Mithun<br/>Design Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Afraz} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Afraz<br/>Marketing Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Joel} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Joel John<br/>Media Head</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Aabid} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Aabid<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Abin} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Abin<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Alen} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Alen<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Aravind} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Aravind<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Arjun} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Arjun M<br/>Member</span>
                </div>


                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Chetan} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Chetan Ram<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Cliford} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Cliford<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Hadif} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Hadif Yassin Hameed<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={John} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>John D<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Juby} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Juby Johnson<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Muhammed} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Muhammed Jaseem<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Pranav} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Pranav R<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Ppras} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Pranav Prashant<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Piyush} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Piyush Soni<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Alen} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Alen<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Rajat} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Rajat<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Simmon} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Simmon<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Sinadin} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Sinadin Shan<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Simon} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Simon Shaji<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Veda} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Vedasree Rodi<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Vimal} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Vimal Joseph<br/>Member</span>
                </div>

            </div>




            <div className={toggleState === 3 ? "content  active-content" : "content"}>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Arjun} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Arjun M<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Abin} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Abin<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Alen} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Alen<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Aravind} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Aravind<br/>Member</span>
                </div>


                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Cliford} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Cliford<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Muhammed} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Muhammed Jaseem<br/>Member</span>
                </div>


                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Alen} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Alen<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Hadif} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Hadif Yassin Hameed<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={John} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>John D<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Rajat} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Rajat<br/>Member</span>
                </div>

                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Simmon} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Simmon<br/>Member</span>
                </div>


                <div className={"individual"}>
                    <div className="beneath">
                        <img src={Sinadin} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Sinadin Shan<br/>Member</span>
                </div>

                 <div className={"individual"}>
                    <div className="beneath">
                        <img src={Vimal} alt="Logo" className={"avatar"} />
                    </div>
                    <span className={"name"}>Vimal Joseph<br/>Member</span>
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