import React from "react";

const PlantTable = () => {
  const plants = [
  {
    name: "Philodendron 'Brasil'",
    category: "Indoor Plant",
    watering: "Water once a week",
    careLevel: "Easy",
    careLevelColor: "text-green-500",
    image: "https://i.ibb.co/4RxxpM4w/images-1.jpg",
    link: "/plant-details/682d9e1d0e965800af4dfde2",
  },
  {
    name: "Ruby Rubber Tree",
    category: "Indoor Foliage",
    watering: "Weekly hydration",
    careLevel: "Medium",
    careLevelColor: "text-yellow-500",
    image: "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
    link: "/plant-details/682d9de90e965800af4dfdd6",
  },
  {
    name: "Calathea 'Orbifolia'",
    category: "Tropical Indoor",
    watering: "Every 4 days",
    careLevel: "High",
    careLevelColor: "text-red-600",
    image: "https://i.ibb.co/Nn2pfygV/calathea-orbifolia-growing-guide-5270824-hero-2a3b8667f05b40a49b27da573d2486fb.jpg",
    link: "/plant-details/682d9dda0e965800af4dfdd2",
  },
  {
    name: "Aloe Vera Plant",
    category: "Succulent",
    watering: "Bi-weekly",
    careLevel: "Easy",
    careLevelColor: "text-green-500",
    image: "https://i.ibb.co/XDtLG4k/aloe-vera.jpg",
    link: "/plant-details/682d9e450e965800af4dfdec",
  },
  {
    name: "Snake Plant 'Laurentii'",
    category: "Air-Purifying Indoor",
    watering: "Every 10 days",
    careLevel: "Medium",
    careLevelColor: "text-yellow-500",
    image: "https://i.ibb.co/Dzb0PKz/snake-plant.jpg",
    link: "/plant-details/682d9e520e965800af4dfdf0",
  },
  {
    name: "Fiddle Leaf Fig Tree",
    category: "Large Indoor Plant",
    watering: "Water once weekly",
    careLevel: "High",
    careLevelColor: "text-red-600",
    image: "https://i.ibb.co/hgf6VRB/fiddle-leaf-fig.jpg",
    link: "/plant-details/682d9e5e0e965800af4dfdf4",
  }
];


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm text-black">
        <thead className="bg-green-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Image</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Category</th>
            <th className="py-3 px-4 text-left">Watering</th>
            <th className="py-3 px-4 text-left">Care Level</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-3 px-4">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                />
              </td>
              <td className="py-3 px-4 text-black font-medium">{plant.name}</td>
              <td className="py-3 px-4 text-black">{plant.category}</td>
              <td className="py-3 px-4 text-black">{plant.watering}</td>
              <td className={`py-3 px-4 ${plant.careLevelColor}`}>
                {plant.careLevel}
              </td>
              <td className="py-3 px-4">
                <a
                  href={plant.link}
                  className="text-green-800 font-semibold underline"
                >
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlantTable;
