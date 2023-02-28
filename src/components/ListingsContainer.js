import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {
  const cardList = list.map((listing) => {
    return <ListingCard 
    id={listing.id} 
    description={listing.description} 
    image={listing.image} 
    location={listing.location}
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


