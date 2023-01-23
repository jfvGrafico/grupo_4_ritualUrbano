import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './oneCard.css'
const OneCard = ({title, quantity,icon}) => {
  return (
    <>
    
      <div className="productCard">
        <FontAwesomeIcon className="wineBotleIco" icon={icon} />
        <h2>{title}</h2>
        <p>{quantity}</p>
        <div></div>
      </div>
   
  </>
  )
}

export default OneCard