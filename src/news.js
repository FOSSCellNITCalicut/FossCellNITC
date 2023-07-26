import React from "react";

function Card(props) {
  const cardStyle = {
    maxWidth: "300px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
    background: "#fff"
  };

  const dateStyle = {
    color: "gray",
    fontSize: "14px"
  };

  const titleStyle = {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold"
  };

  const textStyle = {
    color: "gray",
    fontSize: "14px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold"
  };

  return (
    <div style={cardStyle}>
      <p style={dateStyle}>
        <small>{props.date}</small>
      </p>
      <h5 style={titleStyle}>{props.title}</h5>
      <p style={textStyle}>{props.text}</p>
      <a href={props.link} style={linkStyle}>
        Read More →
      </a>
    </div>
  );
}

function CardList() {
  const date = "May 3, 2023";

  const data = [
    {
      id: 1,
      title: "FOSSMeet'23",
      text: "After a gap of three years, the flagship event of FOSS Cell NITC returned with all glory. FOSSMeet’23 was held on February 10,11, and 12, and witnessed over a hundred participants and more than 15 speakers from all over India. The event was inaugurated by Dr. Sasi Kumar, a Free Software activist and a member of the Board of Directors of the Free Software Foundation of India. The speakers talked on different topics and gave insights on FOSS ideologies and projects. Rust workshop, NeST workshop and Self Hosting workshop saw active participation from the participants and were a new experience for beginner FOSS enthusiasts.",
      date: "Feb 2023",
      link: "#"
    },
    {
      id: 2,
      title: "Code.Init",
      text: "A three day hackathon was organized in collaboration with the Computer Science and Engineering Association (CSEA) to encourage the development of effective solutions to problems pertaining to campus and beyond. The hackathon took place at SSL over the span of three days. It was inaugurated by Prof. Vinod Paleri followed by revealing the problem statements. Participants across all years and branches were guided by mentors and were able to come up with numerous projects. Winners were awarded certificates and cash prizes.",
      date: "Jan 2023",
      link: "#"
    },
    {
      id: 3,
      title: "Post Tatha Workshop",
      text: "FOSS Cell in collaboration with Tathva conducted a workshop for the first year students of NITC. A session on installing Arch Linux followed by introduction to basic commands and tools was held. Split in two sessions, one in the morning and other in the afternoon, volunteers from FOSS Cell helped the students to install and learn basics of a Linux distro, which was a new experience for the students.",
      date: "Jan 2023",
      link: "#"
    },
    {
      id: 4,
      title: "Linux Fest",
        text: "FOSS Cell conducted a Linux Installation Fest as a part of the 31st anniversary of Linux. Participants brought their laptops in which volunteers helped to install a Linux distribution of their choice. A session on Introduction to basics of Linux was also held to help them familiarize with the new operating system. The benefits ofmigrating to free software, and the amount of control that Linux distros gave to its users were demonstrated to the participants.",
        date: "Nov 2022",
      link: "#"
    },
    {
      id: 5,
      title: "Tathva Lecture ft. Richard Stallman",
        text: "FOSS Cell in collaboration with Tathva Lectures brought Richard Stallman, the pioneer of Free Software, to NIT Calicut. He shared his vision about Free Software and took up questions from the audience afterwards. Members of FOSS Cell also got a chance to tour Kozhikode city and dine with him.",
        date: "Oct 2022",
      link: "#"
    },
    {
      id: 6,
      title: "Git Workshop",
        text: "As part of Hacktoberfest’22, a workshop on Git was conducted by FOSS Cell. Hacktoberfest is a month-long celebration of open source software presented by Digital Ocean in partnership with Dev and Intel that makes a positive impact on open source projects.",
        date: "Oct 2022",
      link: "#"
    }
  ];

  const containerStyle = {
    background: "linear-gradient(90deg, #fa709a 0%, #fee140 100%)",
    color: "#fff",
    padding: "20px"
  };

  const headingStyle = {
    marginLeft: "80px"
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "-10px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>News & Events</h2>
      <div style={rowStyle}>
        {data.map((item) => (
          <div style={{ flexBasis: "300px", padding: "10px" }} key={item.id}>
            <Card
              title={item.title}
              text={item.text}
              date={item.date}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;