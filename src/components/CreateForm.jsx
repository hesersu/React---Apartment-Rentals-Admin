import React, { useState } from "react";
import listingsData from "../assets/listings.json";

const CreateForm = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [instantBookable, setInstantBookable] = useState(false);

  function handleCreateApartment(event) {
    event.preventDefault();

    const newApartment = {
      id,
      name,
      description,
      neighbourhood,
      pictureUrl,
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
        value={pictureUrl}
        onChange={(event) => {
          setPictureUrl(event.target.value);
        }}
      />
      <label>Instant Bookable: </label>
      <input
        type="checkbox"
        value={instantBookable}
        onChange={(event) => {
          setInstantBookable(event.target.checked);
        }}
      />
      <button>Create</button>
    </form>
  );
};

export default CreateForm;
