import { useLoaderData } from 'react-router'; 

const PlantDetailCard = () => {
  const plantArray = useLoaderData();
  const plant = plantArray[0];

  const {
    title,
    planttype,
    category,
    difficultylevel,
    image,
    availability,
    wateringFrequency,
    healthStatus,
    description,
    userName,
    userEmail,
  } = plant;

  return (
    <div
      className="flex flex-col lg:flex-row items-center bg-base-100 text-base-content rounded-3xl shadow-xl max-w-6xl mx-auto p-6 sm:p-8 lg:p-12 my-12 transition-all"
    >
      {/* Image */}
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-12">
        <img
          src={image}
          alt={title}
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl border border-base-300"
        />
      </div>

      {/* Text Content */}
      <div className="text-sm sm:text-base lg:text-lg space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
        <p className="italic text-base-content/80">{category} • {planttype}</p>
        <p className="text-base-content mt-2">{description}</p>
        <p><strong>Care Level:</strong> <span>{difficultylevel}</span></p>
        <p><strong>Watering Frequency:</strong> <span>{wateringFrequency}</span></p>
        <p><strong>Health Status:</strong> <span>{healthStatus}</span></p>
        <p><strong>Availability:</strong> <span>{availability}</span></p>
        <p className="text-sm text-gray-500 mt-4">
          Added by: <strong>{userName}</strong> (
          <a className="underline text-info" href={`mailto:${userEmail}`}>{userEmail}</a>)
        </p>
      </div>
    </div>
  );
};

export default PlantDetailCard;
