import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [instant_bookable, setInstantBookable] = useState(false);

  const { listId } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    const editApartment = props.listings.find((oneList) => {
      if (oneList.id == listId) {
        return true;
      }
    });
    setId(editApartment.id);
    setName(editApartment.name);
    setDescription(editApartment.description);
    setNeighbourhood(editApartment.neighbourhood);
    setPictureUrl(editApartment.picture_url);
    setInstantBookable(editApartment.instant_bookable);
  }, []);

  function handleEditApartment(event) {
    event.preventDefault();

    const updatedApartment = {
      id,
      name,
      description,
      neighbourhood,
      picture_url,
    };
    // props.setListings([updatedApartment, ...props.listings]);

    const updatedArrayOfApartments = props.listings.map((oneApartment) => {
      if (oneApartment.id === id) {
        return updatedApartment;
      } else {
        return oneApartment;
      }
    });
    props.setListings(updatedArrayOfApartments);
    //after we successfully set the new array of pets
    nav("/");
  }

  return (
    <form onSubmit={handleEditApartment}>
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
          value={picture_url}
          onChange={(event) => {
            setPictureUrl(event.target.value);
          }}
        />
      </label>
      <label>
        Instant Bookable:
        <input
          type="checkbox"
          value={instant_bookable}
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
