import React from "react";
import listingsData from "../assets/listings.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetailsPage = () => {
  const { listId } = useParams();

  const listDetails = listingsData.results.find(
    (oneListing) => oneListing.id === Number(listId)
  );

  return (
    <div className="details">
      <p>{listDetails.id} </p>
      <p>{listDetails.name} </p>
      <p>{listDetails.picture_url}</p>
      <p>{listDetails.description} </p>
      <p>{listDetails.neighbourhood} </p>
      <Link to={`/${listId}/edit`}>
        <button className="edit">Edit</button>
      </Link>
    </div>
  );
};

export default ItemDetailsPage;
