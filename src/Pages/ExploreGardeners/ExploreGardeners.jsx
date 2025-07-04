import React from "react";
import { useLoaderData } from "react-router";
import Gardener from "./Gardener";
import { Helmet } from "react-helmet";

const ExploreGardeners = () => {
  const activeGardeners = useLoaderData();

  return (
    <>
          <Helmet>
                <title>Plant Book 🌱 Active Gardeners</title>
            </Helmet>
      <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 my-10">
        Active Gardeners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[95%] mx-auto">
        {activeGardeners.map((activeGardener) => (
          <Gardener
            key={activeGardener._id}
            activeGardener={activeGardener}
          ></Gardener>
        ))}
      </div>
    </>
  );
};

export default ExploreGardeners;
