import { useState } from "react";
import listingsData from "../assets/listings.json";
import ListCard from "./ListCard";
import CreateForm from "./CreateForm";

const Listings = () => {
  const [listResults, setListResults] = useState(listingsData.results);

  function handleDelete(id) {
    const filteredElements = listResults.filter(
      (oneElement) => oneElement.id !== id
    );
    setListResults(filteredElements);
  }

  return (
    <div>
      <CreateForm allListings={listResults} setListResults={setListResults} />

      {listResults.map((element) => (
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
