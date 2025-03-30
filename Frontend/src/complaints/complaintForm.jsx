import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    category: "Electrical",
    email: "",
    phone: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  // Decode JWT token to get userId
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setFormData((prev) => ({ ...prev, userId: decoded.userId }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", formData.category);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("description", formData.description);
    if (formData.userId) data.append("userId", formData.userId);
    if (image) data.append("image", image); // Use "image" as expected in backend

    // Log data being sent (for debugging)
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.post(
        "http://localhost:9999/api/complaints",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      alert("Complaint submitted successfully!");

      // Reset form
      setFormData({
        userId: formData.userId,
        category: "Electrical",
        email: "",
        phone: "",
        description: "",
      });
      setImage(null);
    } catch (error) {
      console.error(
        "Error submitting complaint:",
        error.response?.data || error
      );
      alert("Error submitting complaint. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-[140px] mb-[50px] border rounded">
      <h2 className="text-2xl font-bold mb-4">Submit a Complaint</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Electrical">Electrical</option>
            <option value="Drainage">Drainage</option>
            <option value="Water_Service">Water Service</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
