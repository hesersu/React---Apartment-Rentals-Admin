import React from "react";
import listingsData from "../assets/listings.json";
import { useParams } from "react-router-dom";

const ItemDetailsPage = () => {
  const { listId } = useParams();

  const listDetails = listingsData.results.find(
    (oneListing) => oneListing.id === Number(listId)
  );

  return (
    <div>
      <p>{listDetails.id} </p>
      <p>{listDetails.name} </p>
      <p>{listDetails.description} </p>s<p>{listDetails.neighbourhood} </p>
    </div>
  );
};

export default ItemDetailsPage;

// const { studentId } = useParams();
// const studentProfile = studentsData.find(
//   (student) => student._id === studentId
// );
// console.log("here in the details page", studentId);
