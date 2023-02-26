import React, {useState} from "react";

function ListingCard({description, image, location}) {
  const [isLiked, setIsLiked] = useState(false)

  function handleClick() {
    setIsLiked(isLiked => !isLiked)
  }

  // const appClass = isLiked ? "App dark" : "App light"


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
