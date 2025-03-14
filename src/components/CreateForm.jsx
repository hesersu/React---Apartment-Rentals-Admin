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
      <label>
        Apartment Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </label>
      <label>
        Neighbourhood:
        <select
          onChange={(e) => {
            setNeighbourhood(e.target.value);
          }}
        >
          <option value="Madrid, Spain">Madrid, Spain</option>
          <option value="Paris, France">Paris, France</option>
          <option value="Milan, Italy">Milan, Itay</option>
        </select>
      </label>
      <label>
        Picture:
        <input
          type="text"
          placeholder="Picture"
          value={pictureUrl}
          onChange={(event) => {
            setPictureUrl(event.target.value);
          }}
        />
      </label>
      <label>
        Instant Bookable:
        <input
          type="checkbox"
          value={instantBookable}
          onChange={(event) => {
            setInstantBookable(event.target.checked);
          }}
        />
      </label>
      <button>Create</button>
    </form>
  );
};

export default CreateForm;
