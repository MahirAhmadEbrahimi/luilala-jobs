import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApprenthiceshipCourses() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/career/category?category=Apprenticeship"
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

  // **********************8
  // **********************8

  return (
    <>
      <div class="flex md:flex-row flex-col p-8 sm:p-12 container gap-8">
        {/* <!-- first --> */}
        <div class="first-adivce-card relative">
          <img src="https://media.istockphoto.com/id/1214111410/photo/in-technology-research-facility-chief-engineer-stands-in-the-middle-of-the-lab-and-uses.jpg?s=612x612&w=0&k=20&c=pwpzBFjUwWevuKmOfRsqbzbwwOG8eESG7_6I5zCudis=" />
          <div class="text-white absolute bottom-0 left-0 p-8 bg-[#002244] bg-opacity-70 w-full">
            <span class="text-md font-medium">By content team</span>
            <a href="#" class="block text-2xl mt-3 font-bold hover:underline">
              Your guide to apprenticeships in 2024
            </a>
          </div>
        </div>
        <div class="first-adivce-card relative">
          <img src="https://media.istockphoto.com/id/532121712/photo/make-sure-your-business-is-portable.jpg?s=612x612&w=0&k=20&c=PdZvhxBh9RO6duIfKpBPR7b8nLNGDydKGtfpsx4asIo=" />
          <div class="text-white absolute bottom-0 left-0 p-8 bg-[#002244] bg-opacity-70 w-full">
            <span class="text-md font-medium">By content team</span>
            <a href="#" class="block text-2xl mt-3 font-bold hover:underline">
              Your guide to apprenticeships in 2024
            </a>
          </div>
        </div>
        {/* <!-- second --> */}
      </div>
      <div className="container  flex w-[100vw] flex-col lg:flex-row justify-between  p-16 pr-8">
        <div className="mb-8   flex flex-col gap-20 lg:basis-[69%]">
          {/* start first grid */}
          <div className="">
            <div className="flex  justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">
                Popular Career Advice ⭐
              </h3>
              <a href="#" className="text-blue-500 hover:underline">
                All courses
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.slice(0, 9).map((entry, index) => (
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={entry.authorId.image} // Use the author's image
                      alt="Career Advice Image not found ..."
                      className="w-full h-full object-cover clip-path-mypolygon"
                    />
                  </div>
                  <div className="p-4">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-800 hover:text-[#002277]"
                    >
                      {entry.title} {/* Display the title */}
                    </a>
                    <div className="flex items-center mt-4">
                      <div className="bg-[#002244] text-xl text-white h-12 w-12 rounded-full flex justify-center items-center">
                        C
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-600 text-lg">Content team</p>
                        <p className="text-gray-500 text-sm">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* finish fifth grid */}
        </div>

        <div className=" flex flex-col gap-10  rounded-lg lg:basis-[25%]">
          <div className=" p-6 ">
            <h2 className="text-2xl font-semibold mb-4">Browse Top Sectors</h2>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[#002244] hover:underline">
                NHS Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Retail Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Customer Services Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Engineering Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Marketing Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Accountancy & Accounting Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Construction Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                IT Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Admin & Administration Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Sales Jobs
              </a>
              <a href="#" className="text-[#002244] hover:underline">
                Education Jobs
              </a>
            </div>
          </div>

          {/* First Card */}
          <div className="card bg-white shadow-sm rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM="
                alt="Salary Guide"
                className="w-24 h-24 mb-4 object-cover rounded-full border-2 border-gray-300"
              />
              <h2 className="text-xl font-semibold mb-2">Salary Guide</h2>
              <p className="text-gray-600 text-center">
                Check out average salaries across the UK and find out how much
                you could earn!
              </p>
              <button
                className="bg-none border-b-2 border-dark-blue
     text-[#002244] font-semibold py-2 px-4  mt-4"
              >
                View Salary Guide
              </button>
            </div>
          </div>
          {/* Second Card */}
          <div className="card bg-white shadow-sm rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1338846097/photo/handsome-man-using-smartphone-walking-through-night-city-full-of-neon-colors-and.jpg?s=612x612&w=0&k=20&c=eXbBEHWiazMuqdv4zy0POeHm1w1v6KGPw79OXOKUT9k="
                alt="Salary Guide"
                className="w-24 h-24 mb-4 object-cover rounded-full border-2 border-gray-300"
              />
              <h2 className="text-xl font-semibold mb-2">
                Salary Tax Calculator
              </h2>
              <p className="text-gray-600 text-center">
                Know how much you are actually earning each month? Check out our
                Salary Tax Calculator.
              </p>
              <button
                className="bg-none border-b-2 border-dark-blue
     text-[#002244] font-semibold py-2 px-4  mt-4"
              >
                Calculate earning
              </button>
            </div>
          </div>
          <div className="card bg-white shadow-sm rounded-lg overflow-hidden p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1153350345/photo/time-to-get-growing.jpg?s=612x612&w=0&k=20&c=NtxRQ_cn-Eo-nTnGWNZXWq77eogf4LZPwXaHpd58qY4="
                alt="Salary Guide"
                className="w-24 h-24 mb-4 object-cover rounded-full border-2 border-gray-300"
              />
              <h2 className="text-xl font-semibold mb-2">Writers Network</h2>
              <p className="text-gray-600 text-center">
                We're on the hunt for guest writers to contribute one-off
                informative and entertaining articles to our Career Advice blog.
              </p>
              <button
                className="bg-none border-b-2 border-dark-blue
     text-[#002244] font-semibold py-2 px-4  mt-4"
              >
                Become a Guest writter
              </button>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </>
  );
}
