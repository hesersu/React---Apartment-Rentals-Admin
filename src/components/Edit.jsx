import React, { useState } from "react";
import listingsData from "../assets/listings.json";
import { useParams } from "react-router-dom";

const Edit = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [instantBookable, setInstantBookable] = useState(false);

  const { listId } = useParams();
  const editApartment = listingsData.results.find((oneList) => {
    if (oneList.id === Number(listId)) {
      return true;
    }
  });
  console.log(editApartment);
  function handleEditApartment(event) {
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
    <form onSubmit={handleEditApartment}>
      <label>
        Apartment Name:
        <input
          type="text"
          placeholder="Name"
          value={editApartment.name}
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
          value={editApartment.description}
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
          value={editApartment.picture_url}
          onChange={(event) => {
            setPictureUrl(event.target.value);
          }}
        />
      </label>
      <label>
        Instant Bookable:
        <input
          type="checkbox"
          value={editApartment.instant_bookable}
          onChange={(event) => {
            setInstantBookable(event.target.checked);
          }}
        />
      </label>
      <button>Edit</button>
    </form>
  );
};

export default Edit;
