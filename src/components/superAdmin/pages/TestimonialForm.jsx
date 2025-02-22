import { useState } from "react";

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    image: null,
    comment: "",
    status: "Publish",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div
      className="absolute bg-white shadow-md rounded-lg overflow-hidden"
      style={{ width: "1092px", height: "905px", top: "96px", left: "324px", padding: "24px", gap: "24px" }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Full Name */}
        <div className=" p-3 rounded">
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Image Upload */}
        <div className=" p-3 rounded">
          <label className="block font-semibold">Image</label>
          <div className="flex items-center border rounded border-gray-300">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden border border-gray-300  rounded"
              id="file-upload"
            />
             <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Choose File
            </button>
            <span className="ml-2   text-gray-500">
              {formData.image ? formData.image.name : "No File Uploaded"}
            </span>
          </div>
        </div>

        {/* Comment */}
        <div className=" p-3 rounded">
          <label className="block font-semibold">Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write Comment"
            className="w-full border  border-gray-300 p-2 rounded h-40"
          />
        </div>

        {/* Product Status */}
        <div className=" p-3 rounded">
          <label className="block font-semibold">Product Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Publish">Publish</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className=" p-3 rounded">
          <button type="submit" className="bg-green-300 text-teal-50 px-4 py-2 rounded">
            Add Testimonial
          </button>
        </div>
      </form>
    </div>
  );
}
