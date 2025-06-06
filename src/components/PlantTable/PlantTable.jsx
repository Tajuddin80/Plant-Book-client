import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Plant from "./Plant";
import { Helmet } from "react-helmet";

const BrowseTips = () => {
  const allTips = useLoaderData(); // assuming this contains an array of tip objects
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [filteredTips, setFilteredTips] = useState([]);

  useEffect(() => {
    if (selectedDifficulty === "all") {
      setFilteredTips(allTips);
    } else {
      const filtered = allTips.filter(
        (tip) => tip.difficultylevel?.toLowerCase() === selectedDifficulty
      );
      setFilteredTips(filtered);
    }
  }, [selectedDifficulty, allTips]);

  return (
    <div className="overflow-x-auto">
            <Helmet>
                <title>Plant Book 🌱 Active Tips</title>
            </Helmet>
      {/* Filter Dropdown */}
      <div className="w-[95vw] mx-auto mt-10 mb-4 flex justify-end">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="select select-bordered"
        >
          <option value="all">All Difficulty Levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>

      {/* Tips Table */}
      <table className="w-[95vw] my-4 mx-auto bg-base-50 border border-base-300 rounded-lg shadow-sm text-base-content">
        <thead className="bg-primary text-primary-content">
          <tr>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Health Status</th>
            <th className="py-3 px-4 text-left">Care Level</th>
            <th className="py-3 px-4 text-left">View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredTips.map((plant) => (
            <Plant key={plant._id} plant={plant} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTips;
