import React from "react";
import { Link } from "react-router";

const Gardener = ({ activeGardener }) => {
  const { name, location, specialty, image, _id } = activeGardener;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-5 pt-5">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm font-medium">{specialty}</p>
        <div className="card-actions mt-4">
          <Link to={`/gardeners/${_id}`} className="btn btn-primary">View Profile</Link>
          <span className="badge badge-success">Active</span>
        </div>
      </div>
    </div>
  );
};

export default Gardener;
