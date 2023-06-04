import React from "react";
import "./bootstrap.min.css";
function Card(props) {
  return (
    <div className="card my-3 mx-auto" style={{ maxWidth: "300px" }}>
      <div className="card-body">
        <p className="card-text">
          <small className="text-muted">{props.date}</small>
        </p>
        <h5 className="card-title" style={{ color: "black" }}>
          {props.title}
        </h5>
        <p className="card-text" style={{ color: "gray" }}>
          {props.text}
        </p>

        <a
          href={props.link}
          className=""
          style={{ textDecoration: "none", color: "black" }}
        >
          Read More →
        </a>
      </div>
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

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(90deg, #fa709a 0%, #fee140 100%)",
        color: "#fff",
        padding: "20px"
      }}
    >
      <h2 style={{ marginLeft: "80px" }}>News & Events</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {data.map((item) => (
              <div className="col-md-4 my-4" key={item.id}>
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
      </div>
    </div>
  );
}

export default CardList;
