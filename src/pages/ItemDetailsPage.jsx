import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemDetailsPage = (props) => {
  const { listId } = useParams();

  const listDetails = props.listings.find(
    (oneListing) => oneListing.id == listId
  );

  return (
    <div className="details">
      <p>
        <img src={listDetails.picture_url} alt="" />
      </p>
      <p>{listDetails.id} </p>
      <p>{listDetails.name} </p>
      <p>{listDetails.description} </p>
      <p>{listDetails.neighbourhood} </p>
      <Link to={`/${listId}/edit`}>
        <button className="edit">Edit</button>
      </Link>
    </div>
  );
};

export default ItemDetailsPage;
