import React, { useState } from 'react';

const AddNewPlantForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    category: '',
    careLevel: '',
    wateringFrequency: '',
    lastWateredDate: '',
    nextWateringDate: '',
    healthStatus: '',
    userName: 'md Tajuddin',
    userEmail: 'cmtajuddinchowdhury@gmail.com',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit logic here
  };

  return (
    <div className="min-h-screen my-20 flex items-center justify-center bg-base-50 px-4 py-10 text-base-content">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-base-100 shadow-md rounded-lg p-8"
      >
        <h2 className="text-center text-primary text-2xl md:text-3xl font-semibold uppercase border-b pb-2 mb-10">
          Add New Plant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant Name */}
          <div>
            <label className="block mb-1 font-medium">Plant Name</label>
            <input
              type="text"
              name="name"
              placeholder="Plant Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
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
              value={formData.careLevel}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Care Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="block mb-1 font-medium">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              value={formData.wateringFrequency}
              onChange={handleChange}
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
              value={formData.lastWateredDate}
              onChange={handleChange}
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
              value={formData.nextWateringDate}
              onChange={handleChange}
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
              value={formData.healthStatus}
              onChange={handleChange}
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
              value={formData.userName}
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
              value={formData.userEmail}
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
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPlantForm;
