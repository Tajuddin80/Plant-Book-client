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
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8"
      >
        <h2 className="text-center text-green-800 text-2xl md:text-3xl font-semibold uppercase border-b pb-2 mb-10">
          Add New Plant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Plant Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Plant Name</label>
            <input
              type="text"
              name="name"
              placeholder="Plant Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <label className="block mb-1 font-medium text-gray-700">Care Level</label>
            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <label className="block mb-1 font-medium text-gray-700">Watering Frequency</label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              value={formData.wateringFrequency}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Last Watered Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Last Watered Date</label>
            <input
              type="date"
              name="lastWateredDate"
              value={formData.lastWateredDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Next Watering Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Next Watering Date</label>
            <input
              type="date"
              name="nextWateringDate"
              value={formData.nextWateringDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Health Status */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              placeholder="e.g., Healthy, Dry, Wilting"
              value={formData.healthStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              disabled
              className="w-full px-4 py-2 border bg-gray-100 rounded"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              disabled
              className="w-full px-4 py-2 border bg-gray-100 rounded"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description about the plant..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewPlantForm;
