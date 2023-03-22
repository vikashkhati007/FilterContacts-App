import React from "react";
import "./CardStyle.css";

export default function Card(props) {
  const card = {
    margin: "30px",
    width: "250px",
    height: "250px",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "inline-block",
    border: "1px solid red"
  };
  const uppercontainer = {
    textAlign: "center",
    backgroundColor: "red",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 10px 0px 0px",
    color: "white",
    fontSize: "1.5rem"
  };
  const lowercontainer = {
    display: "flex",
    flexDirection: "column",
    margin: "15px"
  };

  return (
    <div style={card}>
      <div className="uppercontainer" style={uppercontainer}>
        <span> {props.name}</span>
      </div>
      <div style={lowercontainer}>
        <p>
          <span className="subtitle">Last Name:</span> {props.lastname}
        </p>
        <p>
          <span className="subtitle">Email:</span> {props.email}
        </p>
        <p>
          <span className="subtitle">PNo:</span> {props.phonenumber}
        </p>
      </div>
    </div>
  );
}
