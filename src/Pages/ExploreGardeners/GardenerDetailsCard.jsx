import { useLoaderData } from "react-router";

const GardenerDetailsCard = () => {
  const { gardener } = useLoaderData();

  if (!gardener)
    return <p className="text-center mt-10">Loading gardener data...</p>;

  const { name, location, specialty, image, active, description } = gardener;
  console.log(location);
  return (
    <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-md max-w-5xl mx-auto p-6 md:p-10 my-10 bg-base-100">
      {/* Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          src={image}
          alt={name || "Gardener"}
          className="w-64 h-64 object-cover rounded-lg border border-base-300"
        />
      </div>

      {/* Text Content */}
      <div className="text-base-content text-sm md:text-base space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          {name}
        </h2>
        <p className="italic text-secondary">{specialty}</p>
        <p className="mt-2">{description}</p>
        <p>
          <strong>Location:</strong> <span>{location}</span>
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold 
            ${
              active
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
            }`}
          >
            {active ? "Active Gardener" : "Inactive"}
          </span>
        </p>
        <p className="text-xs text-base-content/60 mt-4">
          Profile of: <strong>{name}</strong>
        </p>
      </div>
    </div>
  );
};

export default GardenerDetailsCard;
