import CareerAdvice from "../pages/CareerAdvice";
import CarrerHomeCourses from "./CaarrerHomeCourses";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HomeAdvice() {
  // ....... Title , Image Api Integration START .........
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/career/imageandtitle?category=Home"
        );
        setData(response.data.populatedEntries); // Access populatedEntries
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;

  // ....... Title , Image Api Integration END .........
  return (
    <>
      <div>
        <CareerAdvice
          title="Career Advice"
          description="Our advice centre contains articles with helpful tips, how-to guides and CV templates. Written by career experts, were committed to helping your job search and ensuring you get the most from your career."
        />

        {/* Second Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((article) => (
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={`${article.authorId.image}`} // Adjust the image URL as needed
                alt="Image isn't found!"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <span className="text-md font-medium">By Content Team</span>{" "}
                {/* Update if you have an author name */}
                <a
                  href="#"
                  className="block text-xl mt-2 font-bold hover:underline"
                >
                  {article.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CarrerHomeCourses />
    </>
  );
}
