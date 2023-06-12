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
      title: "Card 1",
      text: "This is the first card.",
      date: date,
      link: "#"
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card.",
      date: date,
      link: "#"
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card.",
      date: date,
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
