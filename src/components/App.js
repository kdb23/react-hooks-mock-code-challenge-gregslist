import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

 const [list, setList] = useState([])

useEffect(() => {
  fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listArr => 
      setList(listArr))
}, [])



  return (
    <div className="app">
      <Header />
      <ListingsContainer list={list}/>
    </div>
  );
}

export default App;
