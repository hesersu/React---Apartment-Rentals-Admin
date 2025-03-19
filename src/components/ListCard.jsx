import React from "react";
import { Link } from "react-router-dom";

const List = ({ listCard, handleDelete }) => {
  return (
    <div className="card-container">
      <p>
        <img src={listCard.picture_url} alt={listCard.name} />
      </p>
      <button className="bookable">
        {listCard.instant_bookable ? "Book instantly" : "Not Instant"}
      </button>
      <p>{listCard.id} </p>
      <h3>{listCard.name} </h3>
      <p className="description">{listCard.description} </p>
      <p>{listCard.neighbourhood} </p>
      <button>
        <Link className={"link-detail"} to={`/details/${listCard.id}`}>
          View Details
        </Link>
      </button>
      <button className="delete" onClick={() => handleDelete(listCard.id)}>
        Delete
      </button>
    </div>
  );
};

export default List;
