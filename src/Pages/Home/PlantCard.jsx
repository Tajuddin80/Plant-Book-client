import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";


const PlantCard = ({ data }) => {
  const {
    _id,
    title,
    planttype,
    category,
    difficultylevel,
    image,
    healthStatus,
    totalLiked = 0,
    likedBy = []
  } = data;

  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(totalLiked);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    if (user && likedBy.includes(user.email)) {
      setHasLiked(true);
    }
  }, [likedBy, user]);

  const handleLike = async () => {
    if (!user || hasLiked) return;

    try {
      const res = await axios.put(`http://localhost:3000/alltips/${_id}/like`, {
        userEmail: user.email,
      });

      if (res.data.modifiedCount > 0 || res.data.acknowledged) {
        setLikes(prev => prev + 1);
        setHasLiked(true);
      }
    } catch (error) {
      console.error("Error liking the tip:", error);
    }
  };

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

        <div className="card-actions mt-4 flex flex-col items-center gap-2">
          <Link to={`/plantdetails/${_id}`} className="btn btn-primary">
            View Details
          </Link>

          <button
            onClick={handleLike}
            className={`btn btn-sm ${hasLiked ? "btn-disabled" : "btn-outline btn-secondary"}`}
            disabled={hasLiked}
          >
            ❤️ {hasLiked ? "Liked" : "Like"}
          </button>

          <span className="badge">
            Liked by <span className="text-pink-700">{likes}</span> {likes === 1 ? "person" : "people"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
