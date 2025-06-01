import React from "react";

const PlantTable = () => {
  const plants = [
    {
      id: "1",
      name: "Philodendron 'Brasil'",
      category: "Indoor Plant",
      watering: "Water once a week",
      careLevel: "Easy",
      image: "https://i.ibb.co/4RxxpM4w/images-1.jpg",
      link: "/plant-details/682d9e1d0e965800af4dfde2",
    },
    {
      id: "2",
      name: "Ruby Rubber Tree",
      category: "Indoor Foliage",
      watering: "Weekly hydration",
      careLevel: "Medium",
      image: "https://flacio.wpbingosite.com/wp-content/uploads/2020/12/ruby-rubber-tree-3.jpg",
      link: "/plant-details/682d9de90e965800af4dfdd6",
    },
    {
      id: "3",
      name: "Calathea 'Orbifolia'",
      category: "Tropical Indoor",
      watering: "Every 4 days",
      careLevel: "High",
      image: "https://i.ibb.co/Nn2pfygV/calathea-orbifolia-growing-guide-5270824-hero-2a3b8667f05b40a49b27da573d2486fb.jpg",
      link: "/plant-details/682d9dda0e965800af4dfdd2",
    },
    {
      id: "4",
      name: "Aloe Vera Plant",
      category: "Succulent",
      watering: "Bi-weekly",
      careLevel: "Easy",
      image: "https://i.ibb.co/XDtLG4k/aloe-vera.jpg",
      link: "/plant-details/682d9e450e965800af4dfdec",
    },
    {
      id: "5",
      name: "Snake Plant 'Laurentii'",
      category: "Air-Purifying Indoor",
      watering: "Every 10 days",
      careLevel: "Medium",
      image: "https://i.ibb.co/Dzb0PKz/snake-plant.jpg",
      link: "/plant-details/682d9e520e965800af4dfdf0",
    },
    {
      id: "6",
      name: "Fiddle Leaf Fig Tree",
      category: "Large Indoor Plant",
      watering: "Water once weekly",
      careLevel: "High",
      image: "https://i.ibb.co/hgf6VRB/fiddle-leaf-fig.jpg",
      link: "/plant-details/682d9e5e0e965800af4dfdf4",
    },
  ];

const getCareLevelClass = (level) => {
  switch (level.toLowerCase()) {
    case "high":
      return "text-error";
    case "medium":
      return "text-warning";
    case "easy":
      return "text-success";
    default:
      return "";
  }
};


return (
  <div className="overflow-x-auto">
    <table className="w-[95vw] my-20  mx-auto bg-base-50 border border-base-300 rounded-lg shadow-sm text-base-content">
      <thead className="bg-primary text-primary-content">
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
        {plants.map((plant) => (
          <tr key={plant.id} className="hover:bg-base-200 transition-colors">
            <td className="py-2 px-4">
              <img
                src={plant.image}
                alt={plant.name}
                className="h-16 w-16 object-cover rounded"
              />
            </td>
            <td className="py-2 px-4">{plant.name}</td>
            <td className="py-2 px-4">{plant.category}</td>
            <td className="py-2 px-4">{plant.watering}</td>
            <td className={`${getCareLevelClass(plant.careLevel)} font-medium py-2 px-4`}>
              {plant.careLevel}
            </td>
            <td className="py-2 px-4">
              <a
                href={plant.link}
                className="text-info hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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
