import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CareerAdviceLinks from "../CarrerAdvice/CareerAdviceLinks"; // Ensure correct path

export default function CareerAdvice({
  title = "Career Advice",
  description = "Our advice centre contains articles with helpful tips, how-to guides and CV templates. Written by career experts, we're committed to helping your job search and ensuring you get the most from your career.",
}) {
  const [keyword, setKeyword] = useState(""); // State for job title or keyword
  const [location, setLocation] = useState(""); // State for location
  const navigate = useNavigate(); // Hook for navigation

  // Fetch industry types from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/employer/industries") // Adjust the endpoint based on your backend route
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched industry types in state if needed
        // setIndustryTypes(data); // Uncomment if using industry types
      })
      .catch((error) => console.error("Error fetching industry types:", error));
  }, []);

  // Handler for the search button click
  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      keyword,
      location,
    }).toString();

    navigate(`/secondSearch-Result?${queryParams}`);
  };

  return (
    <div className="bg-gray-50 py-2">
      <div className="mt-2 bg-white px-4 md:px-12 shadow-sm w-full p-4 flex items-center justify-between flex-wrap">
        <div className="flex items-center border-r border-gray-300 pr-4 mr-4 w-full md:w-[30vw] mb-4 md:mb-0">
          <div className="border border-gray-300 rounded-md p-2 flex-shrink-0">
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="ml-3 w-full py-3 px-3 border border-gray-300 focus:border-[#002244] focus:ring-[#002244] focus:ring-1 focus:outline-none rounded-md"
            placeholder="Job title or keyword"
            value={keyword} // Bind keyword state
            onChange={(e) => setKeyword(e.target.value)} // Update keyword state
          />
        </div>
        <div className="flex items-center justify-center border-r border-gray-300 pr-4 mr-4 w-full md:w-[30vw] mb-4 md:mb-0">
          <div className="border border-gray-300 rounded-md p-2 flex-shrink-0">
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="ml-3 px-3 w-full py-3 border border-gray-300 focus:border-[#002244] focus:ring-[#002244] focus:ring-1 focus:outline-none rounded-md"
            placeholder="Add Country or City"
            value={location} // Bind location state
            onChange={(e) => setLocation(e.target.value)} // Update location state
          />
        </div>
        <button
          className="bg-[#002244] hover:bg-[#1a3857] mx-auto md:mx-2 text-white px-8 py-3 rounded-full transition-colors duration-300 flex-shrink-0"
          onClick={handleSearch} // Trigger search on click
        >
          Search
        </button>
      </div>

      {/* Code after search */}
      <div className="bg-white py-8 text-center border-y-2 border-gray-200 px-6 md:px-12">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mx-auto md:w-[60vw] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="links">
        <CareerAdviceLinks />
      </div>
    </div>
  );
}
