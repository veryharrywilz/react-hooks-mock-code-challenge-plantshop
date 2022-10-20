import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantData, setPlantData, setSearch }) {
  console.log(plantData)

  function handlePlantFormSubmit(name, image, price) {
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
    })
    })
      .then(resp => resp.json())
      .then(data => {
        setPlantData([...plantData, data])
      })
  }


  return (
    <main>
      <NewPlantForm onPlantFormSubmit={handlePlantFormSubmit} />
      <Search setSearch={setSearch}/>
      <PlantList plantData={plantData} />
    </main>
  );
}

export default PlantPage;
