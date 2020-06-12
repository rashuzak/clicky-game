import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card remove" onClick={()=> props.clickedImage(props)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
   
    {/* <span className="remove" onClick={()=> props.removeFriend(props.id)} >𝘅</span> */}
  </div>
);

export default FriendCard;