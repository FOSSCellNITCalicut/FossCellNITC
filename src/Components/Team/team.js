import { Ameen,Vimal,Vedasree,Sree,Sinadin,Simmon,Rajat,PranavNair,
Pranav,Piyush,Neena,Jaseem,Afthab,Madhav,Juby,John,JoelRobin,JoelJohn,Hemanth,Hadif,
Cliford,Aabid,Abin,Afraz,Alen,Aravind,Arjun,Bhukya } from "./teamMem";
import './team.css';
import { useState } from "react";

function WholeteamPage() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const office = [
        {
            id:1,
            name:"Mohamed Afthab",
            position:"Secretary",
            image:Afthab
        },
        {
            id:2,
            name:"Madhav Prabhu C M",
            position:"Joint Secretary",
            image:Madhav
        },
        {
            id:3,
            name:"Mohammed Ameen",
            position:"Treasurer",
            image:Ameen
        },
        {
            id:4,
            name:"Joel Robin P",
            position:"Event Coordinator",
            image:JoelRobin
        },
        {
            id:5,
            name:"Sreevalsan S",
            position:"Event Coordinator",
            image:Sree
        },
        {
            id:6,
            name:"Neena M S",
            position:"Content and Outreach",
            image:Neena
        },
        {
            id:7,
            name:"Hemanth Chodisetti",
            position:"Content and Outreach",
            image:Hemanth
        },
        {
            id:8,
            name:"Afraz Ahmed",
            position:"Marketing Head",
            image:Afraz
        },
        {
            id:9,
            name:"Joel George John",
            position:"Media Head",
            image:JoelJohn
        },
    ]

    const alumni =[
            {
            id:1,
            name:"Abin Latheef",
            position:"Alumni",
            image:Abin
        },
        {
            id:2,
            name:"Aravind I M",
            position:"Alumni",
            image:Aravind
        },
        {
            id:3,
            name:"Arjun M Murali",
            position:"Alumni",
            image:Arjun
        },
        {
            id:4,
            name:"Cliford",
            position:"Alumni",
            image:Cliford
        },
        {
            id:5,
            name:"Hadif Yassin Hameed",
            position:"Alumni",
            image:Hadif
        },
        {
            id:6,
            name:"John D",
            position:"Alumni",
            image:John
        },
        {
            id:7,
            name:"Muhammed Jaseem",
            position:"Alumni",
            image:Jaseem
        },
        {
            id:8,
            name:"Rajat",
            position:"Alumni",
            image:Rajat
        },
        {
            id:9,
            name:"Sinadin Shan",
            position:"Alumni",
            image:Sinadin
        },
        {
            id:10,
            name:"Vimal Joseph",
            position:"Alumni",
            image:Vimal
        },
    ]

    const member =[
        {
            id:1,
            name:"Mohamed Afthab",
            position:"Secretary",
            image:Afthab
        },
        {
            id:2,
            name:"Madhav Prabhu C M",
            position:"Joint Secretary",
            image:Madhav
        },
        {
            id:3,
            name:"Mohammed Ameen",
            position:"Treasurer",
            image:Ameen
        },
        {
            id:4,
            name:"Joel Robin P",
            position:"Event Coordinator",
            image:JoelRobin
        },
        {
            id:5,
            name:"Sreevalsan S",
            position:"Event Coordinator",
            image:Sree
        },
        {
            id:6,
            name:"Neena M S",
            position:"Content and Outreach",
            image:Neena
        },
        {
            id:7,
            name:"Hemanth Chodisetti",
            position:"Content and Outreach",
            image:Hemanth
        },
        {
            id:8,
            name:"Afraz Ahmed",
            position:"Marketing Head",
            image:Afraz
        },
        {
            id:9,
            name:"Joel George John",
            position:"Media Head",
            image:JoelJohn
        },
        {
            id:10,
            name:"Abid Mohamed",
            position:"Member",
            image:Aabid
        },
        {
            id:11,
            name:"Alen Antony",
            position:"Member",
            image:Alen
        },
        {
            id:12,
            name:"Bhukya CHtan Ram",
            position:"Member",
            image:Bhukya
        },
        {
            id:13,
            name:"Juby Johnson",
            position:"Member",
            image:Juby
        },
        {
            id:14,
            name:"Piyush Soni",
            position:"Member",
            image:Piyush
        },
        {
            id:15,
            name:"Pranav Prashant",
            position:"Member",
            image:Pranav
        },
        {
            id:16,
            name:"Pranav R Nair",
            position:"Member",
            image:PranavNair
        },
        {
            id:17,
            name:"Simmon Mathew Shaji",
            position:"Member",
            image:Simmon
        },
        {
            id:18,
            name:"Vedasree Rodi",
            position:"Member",
            image:Vedasree
        }
    ]
    return <>

        <div className="mainport" id="team">

            <div className={"toppart"}>
                <h1 className={"mainhead"}>Meet The Team</h1>
            </div>

            <div className={toggleState === 1 ? "content  active-content" : "content"}>
            {office.map((item)=>(
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={item.image} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>{item.name}<br/>{item.position}</span>
                </div>
            ))}
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>  
                {member.map((item)=>(
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={item.image} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>{item.name}<br/>{item.position}</span>
                </div>
            ))}
            </div>

            <div className={toggleState === 3 ? "content  active-content" : "content"}>
                {alumni.map((item)=>(
                <div className={"individual"}>
                    <div className="beneath">
                        <img src={item.image} alt="Logo" className={"avatar"}/>
                    </div>
                    <span className={"name"}>{item.name}<br/>{item.position}</span>
                </div>
            ))}
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