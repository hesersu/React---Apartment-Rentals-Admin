import { useState } from "react";
import listingsData from "../assets/listings.json";
import ListCard from "./ListCard";
import CreateForm from "./CreateForm";

const Listings = (props) => {
  function handleDelete(id) {
    const filteredElements = props.listings.filter(
      (oneElement) => oneElement.id !== id
    );
    props.setListings(filteredElements);
  }

  return (
    <div>
      <CreateForm
        allListings={props.listings}
        setListResults={props.setListings}
      />

      {props.listings.map((element) => (
        <ListCard
          key={element.id}
          listCard={element}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Listings;
