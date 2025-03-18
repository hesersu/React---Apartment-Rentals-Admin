import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [instant_bookable, setInstantBookable] = useState(false);

  function handleCreateApartment(event) {
    event.preventDefault();

    const newId = uuidv4();

    const newApartment = {
      id: newId,
      name,
      description,
      neighbourhood,
      picture_url,
      instant_bookable,
    };
    props.setListResults([newApartment, ...props.allListings]);
  }

  return (
    <form onSubmit={handleCreateApartment}>
      <label>Apartment Name:</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Description: </label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <label>Neighbourhood: </label>
      <select
        onChange={(e) => {
          setNeighbourhood(e.target.value);
        }}
      >
        <option value="Madrid, Spain">Madrid, Spain</option>
        <option value="Paris, France">Paris, France</option>
        <option value="Milan, Italy">Milan, Itay</option>
      </select>
      <label>Picture: </label>
      <input
        type="text"
        placeholder="Picture"
        value={picture_url}
        onChange={(event) => {
          setPictureUrl(event.target.value);
        }}
      />
      <label>Instant Bookable: </label>
      <input
        type="checkbox"
        value={instant_bookable}
        onChange={(event) => {
          setInstantBookable(event.target.checked);
        }}
      />
      <button>Create</button>
    </form>
  );
};

export default CreateForm;
