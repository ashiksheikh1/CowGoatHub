"use client";
import Link from "next/link";
import { useState } from "react";
import "animate.css"
export default function Sort({dataSlice}) {
  
    // console.log(dataSlice.name)
  const [sortedData, setSortedData] = useState(dataSlice);
  
  const sortLowToHigh = () => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...sortedData].sort((a, b) => b.price - a.price);
    setSortedData(sorted);
  };

  return (
    <div className="my-10 flex justify-center items-center animate__animated animate__fadeIn">
    <div>
        <h2 className="text-2xl font-bold mt-15 ">All Animals </h2>
      {/* Buttons */}
      <div className="flex gap-3 mb-4">
        <button onClick={sortLowToHigh} className="px-3 py-2 bg-green-500 text-white rounded">
          Low → High
        </button>

        <button onClick={sortHighToLow} className="px-3 py-2 bg-red-500 text-white rounded">
          High → Low
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 ">
        {sortedData?.map(data => (
             <div key={data.id} className="w-[280px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">

      {/* Image with zoom effect */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Title */}
        <h2 className="text-xl font-bold group-hover:text-green-600 transition">
          {data.name}
        </h2>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            {data.type}
          </span>

          {/* <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
            {data.breed}
          </span> */}

          <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
            {data.location}
          </span>
        </div>
{/* 
        Description
        <p className="text-sm text-gray-600 line-clamp-2">
          {data.description}
        </p> */}

       
        <p className="text-lg font-semibold text-gray-800">
          ৳{data.price}
        </p>

        {/* Button */}
       <Link href={`/all-animals/${data.id}`}>
        <button className="w-full py-2 rounded-lg text-white font-semibold 
          bg-gradient-to-r from-green-500 to-emerald-700 
          hover:from-emerald-600 hover:to-green-500 
          transition-all duration-300 shadow-md hover:shadow-xl
          active:scale-95">
          Details
        </button>
       </Link>

      </div>
    </div>
        ))}
      </div>
        

        {/* <div>
           {
            sortedData.map(data=><p key={data}>{data.name}</p>)
           }
        </div> */}
    </div>
    </div>
  );
}