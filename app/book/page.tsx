"use client";

import { useState } from "react";

interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  publishDate: string;
  genre: string;
  pages: number;
  coverImage: File | null;
}

const Book = () => {
  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    author: "",
    isbn: "",
    publishDate: "",
    genre: "",
    pages: 0,
    coverImage: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here (e.g., send to backend)
  };

  return (
    <div className="max-w-4xl mx-auto  bg-white p-8 rounded-md shadow-md mb-30">
      <h2 className="text-2xl font-bold mb-6 text-center mt-30">Book Your Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="Location"
              onChange={handleChange}
              placeholder="location"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Hotel Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hotel Name
            </label>
            <input
              type="text"
              name="HName"
              onChange={handleChange}
              placeholder="hotel name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
               Date
            </label>
            <input
              type="date"
              name="Date"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* No of Members */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Members
            </label>
            <input
              type="text"
              name="NOM"
              onChange={handleChange}
              placeholder="how many travellers"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Pages */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <input
              type="number"
              name="pages"
              onChange={handleChange}
              placeholder="how many days"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Cover Image Upload */}
          
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition duration-200 font-bold hover:cursor-pointer"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Book;
