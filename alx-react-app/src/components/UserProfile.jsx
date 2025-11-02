import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "300px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
