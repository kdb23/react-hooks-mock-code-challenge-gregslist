import React, {useState} from "react";

function ListingCard({description, image, location, handleDeleteItem}) {
  const [isLiked, setIsLiked] = useState(false)

  function handleClick() {
    setIsLiked((isLiked) => !isLiked)
  }

 


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
