import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list}) {

  function handleDeleteItem() {
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted"));
  }


  const cardList = list.map((listObj) => {
    return <ListingCard 
    key={listObj.id}
    id={listObj.id} 
    description={listObj.description} 
    image={listObj.image} 
    location={listObj.location}
    handleDeleteItem={handleDeleteItem}
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


