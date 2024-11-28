import React from 'react';
import "./workFlow.scss";
const WorkFlowCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="workPartCard">
      <div className="imgPart">
        {Icon && <Icon />}
      </div>
      <div className="contentPart">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkFlowCard;
