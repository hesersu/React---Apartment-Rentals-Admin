import React from "react";
import { Link } from "react-router-dom";

const List = ({ listCard, handleDelete }) => {
  return (
    <div className="card-container">
      <p>
        <img src={listCard.picture_url} alt={listCard.name} />
      </p>
      <p>{listCard.id} </p>
      <p>{listCard.name} </p>
      <p>{listCard.description} </p>
      <p>{listCard.neighbourhood} </p>
      <button>
        <Link to={`/details/${listCard.id}`}>View Details</Link>
      </button>
      <button>
        {listCard.instant_bookable ? "Book instantly" : "Not Instant"}
      </button>
      <button className="delete" onClick={() => handleDelete(listCard.id)}>
        Delete
      </button>
    </div>
  );
};

export default List;
