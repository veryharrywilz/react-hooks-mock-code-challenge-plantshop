import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([])
  const [searched, setSearched] = useState("")

  console.log(searched)

  const filteredPlants = plantData.map((plant) => {
    if (searched === "") {
    } return(plant)
    if (plant.name.includes(searched) === true) {
      return(plant)
    } else {
      return(false)
    }
  })


useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then(data => {
    setPlantData(data)
  })
},
[])


  return (
    <div className="app">
      <Header />
      <PlantPage 
      plantData={filteredPlants}
      setPlantData={setPlantData}
      setSearch={setSearched}/>
    </div>
  );
}

export default App;
