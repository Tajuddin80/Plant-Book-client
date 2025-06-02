// import React, { useState } from "react";

// https://i.ibb.co/CsN02xmh/img1.jpg
// https://i.ibb.co/s9whRjNj/img2.jpg
// https://i.ibb.co/xPyzyks/img3.jpg
// https://i.ibb.co/xPyzyks/img3.jpg
// https://i.ibb.co/TMfmNK0J/img5.webp
// https://i.ibb.co/zHLX8cFt/img6.jpg
// https://i.ibb.co/1tTHYjFT/img7.jpg
// https://i.ibb.co/HpR7bY00/img8.jpg
// https://i.ibb.co/whTF1Yzm/newplant-1.webp
// https://i.ibb.co/wFGgVq3p/newplant-2.jpg
// https://i.ibb.co/6R4V2zyc/newplant-3.jpg
// https://i.ibb.co/cK1v9HV0/newplant-4.jpg
// https://i.ibb.co/V0DJ7vYX/newplant-5.webp
// https://i.ibb.co/wFy54HBw/newplant-6.webp
// https://i.ibb.co/CKvp8jn7/newplant-7.jpg
// https://i.ibb.co/dsJLk0Lr/newplant-8.jpg





const AddNewPlantForm = () => {
  // const [formData, setFormData] = useState({
  //   image: "",
  //   name: "",
  //   category: "",
  //   careLevel: "",
  //   wateringFrequency: "",
  //   lastWateredDate: "",
  //   nextWateringDate: "",
  //   healthStatus: "",
  //   userName: "md Tajuddin",
  //   userEmail: "cmtajuddinchowdhury@gmail.com",
  //   description: "",
  // });
const plantsData = [
  {
    "title": "Aloe Vera",
    "planttype": "Hybrid",
    "category": "Succulent",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/CsN02xmh/img1.jpg",
    "availability": "Public",
    "wateringFrequency": "every 10 days",
    "healthStatus": "good",
    "description": "A hardy succulent known for its medicinal properties and minimal care needs.",
    "userName": "John Doe",
    "userEmail": "john@example.com"
  },
  {
    "title": "Peace Lily",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/s9whRjNj/img2.jpg",
    "availability": "Public",
    "wateringFrequency": "every 5 days",
    "healthStatus": "good",
    "description": "Elegant and air-purifying, ideal for offices and bedrooms with indirect light.",
    "userName": "Emma Green",
    "userEmail": "emma@example.com"
  },
  {
    "title": "Boston Fern",
    "planttype": "Native",
    "category": "Fern",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/xPyzyks/img3.jpg",
    "availability": "Public",
    "wateringFrequency": "every 3 days",
    "healthStatus": "need care",
    "description": "Lush and vibrant, but can be finicky about humidity and moisture.",
    "userName": "David Lee",
    "userEmail": "david@example.com"
  },
  {
    "title": "Jade Plant",
    "planttype": "Hybrid",
    "category": "Succulent",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/xPyzyks/img3.jpg",
    "availability": "Public",
    "wateringFrequency": "every 14 days",
    "healthStatus": "good",
    "description": "A low-maintenance plant believed to bring good fortune and financial success.",
    "userName": "Lisa Chan",
    "userEmail": "lisa@example.com"
  },
  {
    "title": "Spider Plant",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/TMfmNK0J/img5.webp",
    "availability": "Public",
    "wateringFrequency": "every 4 days",
    "healthStatus": "good",
    "description": "Adaptable and kid-friendly with fun arching leaves and baby offshoots.",
    "userName": "Mark Taylor",
    "userEmail": "mark@example.com"
  },
  {
    "title": "Orchid",
    "planttype": "Hybrid",
    "category": "Flowering",
    "difficultylevel": "Difficult",
    "image": "https://i.ibb.co/zHLX8cFt/img6.jpg",
    "availability": "Public",
    "wateringFrequency": "once a week",
    "healthStatus": "good",
    "description": "Exotic and delicate, rewarding with stunning blooms if well-tended.",
    "userName": "Sophia Liu",
    "userEmail": "sophia@example.com"
  },
  {
    "title": "Snake Plant",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/1tTHYjFT/img7.jpg",
    "availability": "Public",
    "wateringFrequency": "every 12 days",
    "healthStatus": "good",
    "description": "Extremely tolerant and one of the best air purifiers for homes.",
    "userName": "James Patel",
    "userEmail": "james@example.com"
  },
  {
    "title": "ZZ Plant",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/HpR7bY00/img8.jpg",
    "availability": "Public",
    "wateringFrequency": "every 14 days",
    "healthStatus": "good",
    "description": "Glossy leaves and drought resistance make it ideal for busy plant owners.",
    "userName": "Nina Roy",
    "userEmail": "nina@example.com"
  },
  {
    "title": "Lavender",
    "planttype": "Hybrid",
    "category": "Flowering",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/whTF1Yzm/newplant-1.webp",
    "availability": "Public",
    "wateringFrequency": "every 5 days",
    "healthStatus": "good",
    "description": "A fragrant plant that brings a calming vibe and attracts pollinators.",
    "userName": "Alan Kim",
    "userEmail": "alan@example.com"
  },
  {
    "title": "Christmas Cactus",
    "planttype": "Hybrid",
    "category": "Succulent",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/wFGgVq3p/newplant-2.jpg",
    "availability": "Public",
    "wateringFrequency": "every 7 days",
    "healthStatus": "good",
    "description": "Blooms in winter and thrives indoors with moderate care.",
    "userName": "Rachel Adams",
    "userEmail": "rachel@example.com"
  },
  {
    "title": "Fiddle Leaf Fig",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Difficult",
    "image": "https://i.ibb.co/6R4V2zyc/newplant-3.jpg",
    "availability": "Private",
    "wateringFrequency": "every 6 days",
    "healthStatus": "need care",
    "description": "Stylish but sensitive to lighting and watering changes.",
    "userName": "Omar Nasser",
    "userEmail": "omar@example.com"
  },
  {
    "title": "Maidenhair Fern",
    "planttype": "Native",
    "category": "Fern",
    "difficultylevel": "Difficult",
    "image": "https://i.ibb.co/cK1v9HV0/newplant-4.jpg",
    "availability": "Private",
    "wateringFrequency": "every 2 days",
    "healthStatus": "bad",
    "description": "Beautiful but requires high humidity and consistent care.",
    "userName": "Ella White",
    "userEmail": "ella@example.com"
  },
  {
    "title": "Geranium",
    "planttype": "Hybrid",
    "category": "Flowering",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/V0DJ7vYX/newplant-5.webp",
    "availability": "Private",
    "wateringFrequency": "every 3 days",
    "healthStatus": "good",
    "description": "Bright flowers and a pleasant scent make it a cheerful pick.",
    "userName": "Liam Garcia",
    "userEmail": "liam@example.com"
  },
  {
    "title": "Lucky Bamboo",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/wFy54HBw/newplant-6.webp",
    "availability": "Private",
    "wateringFrequency": "every 7 days",
    "healthStatus": "good",
    "description": "Symbol of good luck and requires only water and shade.",
    "userName": "Grace Park",
    "userEmail": "grace@example.com"
  },
  {
    "title": "Begonia",
    "planttype": "Hybrid",
    "category": "Flowering",
    "difficultylevel": "Medium",
    "image": "https://i.ibb.co/CKvp8jn7/newplant-7.jpg",
    "availability": "Private",
    "wateringFrequency": "every 4 days",
    "healthStatus": "need care",
    "description": "Colorful blooms with slightly fussy watering needs.",
    "userName": "Daniel Scott",
    "userEmail": "daniel@example.com"
  },
  {
    "title": "Aglaonema",
    "planttype": "Hybrid",
    "category": "Indoor",
    "difficultylevel": "Easy",
    "image": "https://i.ibb.co/dsJLk0Lr/newplant-8.jpg",
    "availability": "Private",
    "wateringFrequency": "every 5 days",
    "healthStatus": "good",
    "description": "Low light tolerant and great for beginners.",
    "userName": "Fatima Noor",
    "userEmail": "fatima@example.com"
  }
]
;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());
    console.log("Form submitted:", plantData);
    // Submit logic here

    fetch("http://localhost:3000/addnewtip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen my-20 flex items-center justify-center bg-base-50 px-4 py-10 text-base-content">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-base-100 shadow-md rounded-lg p-8"
      >
        <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 mb-10">
          Add New Tip
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., “How I Grow Tomatoes Indoors”"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant type */}
          <div>
            <label className="block mb-1 font-medium">Plant Type</label>
            <input
              type="text"
              name="planttype"
              placeholder="Plant Type"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Indoor">Indoor</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block mb-1 font-medium">Difficulty Level</label>
            <select
              name="difficultylevel"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Difficulty Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="e.g., 'https://i.ibb.co/RG87qpm4/slider-3.png'"
              required
              className="input input-disabled w-full"
            />
          </div>
      
          {/* Availability*/}
          <div>
            <label className="block mb-1 font-medium">Availability</label>
            <select
              name="availability"
              className="select select-bordered w-full"
              required
            >
              <option value="">Availability</option>
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>
          {/* Watering Frequency */}
          <div>
            <label className="block mb-1 font-medium">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="block mb-1 font-medium">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              placeholder="e.g., Healthy, Dry, Wilting"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              // value={formData.userName}
              disabled
              className="input input-disabled w-full"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block mb-1 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              // value={formData.userEmail}
              disabled
              className="input input-disabled w-full"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description about the plant..."
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="mt-8 w-full btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPlantForm;
