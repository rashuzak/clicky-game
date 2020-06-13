import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card remove" onClick={()=> props.clickedImage(props)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
   
  </div>
);

export default FriendCard;