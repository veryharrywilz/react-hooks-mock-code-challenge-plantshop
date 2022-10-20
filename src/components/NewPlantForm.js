import React, {useState} from "react";

function NewPlantForm({onPlantFormSubmit}) {
  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantImage, setNewPlantImage] = useState("")
  const [newPlantPrice, setNewPlantPrice] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    onPlantFormSubmit(newPlantName, newPlantImage, newPlantPrice)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setNewPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setNewPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setNewPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
