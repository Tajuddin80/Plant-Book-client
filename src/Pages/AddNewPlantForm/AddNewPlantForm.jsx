// import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formData =new FormData(form)
    const plantData = Object.fromEntries(formData.entries())
    console.log("Form submitted:", plantData);
    // Submit logic here
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

          {/* Care Level */}
          <div>
            <label className="block mb-1 font-medium">Care Level</label>
            <select
              name="careLevel"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Care Level</option>
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
              required
              className="input input-disabled w-full"
            />
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

          {/* Last Watered Date */}
          <div>
            <label className="block mb-1 font-medium">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Next Watering Date */}
          <div>
            <label className="block mb-1 font-medium">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
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
