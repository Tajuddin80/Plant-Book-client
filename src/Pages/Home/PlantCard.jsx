import React from "react";
import { Link } from "react-router";

const PlantCard = ({ data }) => {
  const {
    _id,
    title,
    planttype,
    category,
    difficultylevel,
    image,
    healthStatus,
  } = data;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-5 pt-5">
        <img src={image} alt={title} className="rounded-xl h-48 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-600 capitalize">
          Type: {planttype} • Category: {category}
        </p>
        <p className="text-sm font-medium">Difficulty: {difficultylevel}</p>
        <p className="text-sm">Health: {healthStatus}</p>
        <div className="card-actions mt-4">
          <Link to={`/plantdetails/${_id}`} className="btn btn-primary">
            View Details
          </Link>
          <span className="badge badge-success">{healthStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
