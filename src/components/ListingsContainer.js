import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {
  const cardList = list.map((listObj) => {
    return <ListingCard 
    key={listObj.id}
    id={listObj.id} 
    description={listObj.description} 
    image={listObj.image} 
    location={listObj.location}
     />
  })
  console.log(cardList)
  return (
    <main>
      <ul className="cards">
        {cardList}
      </ul>
    </main>
  );
}

export default ListingsContainer;


