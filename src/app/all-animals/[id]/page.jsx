import BookingModal from '@/components/Booking';
import React from 'react';

const DetailsPage = async({params}) => {
    const {id} = await params
      const res = await fetch("https://my-livestock.vercel.app/animal-data.json",{
    cache: 'no-store'
  })
  const dataSlice = await res.json()
    console.log(dataSlice)
    const data = dataSlice.find(p=>p.id == id)
    return (
        <div>
        <div className="w-[380px] mx-auto rounded-2xl overflow-hidden bg-slate-50 
      shadow-lg hover:shadow-2xl transition duration-300 group my-10 ">

      {/* Image */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={data.image}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition">
          {data.name}
        </h2>

        {/* Chips (new clean colors) */}
        <div className="flex flex-wrap gap-2">

          <span className="px-3 py-1 text-xs rounded-full 
            bg-emerald-100 text-emerald-700">
            {data.type}
          </span>

          <span className="px-3 py-1 text-xs rounded-full 
            bg-sky-100 text-sky-700">
            {data.breed}
          </span>

          <span className="px-3 py-1 text-xs rounded-full 
            bg-amber-100 text-amber-700">
            {data.location}
          </span>

        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">
          {data.description}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-slate-900">
          ৳{data.price}
        </p>

        {/* Button (new modern style) */}
        
        
          <BookingModal></BookingModal>
     
        
      </div>
    </div>
        </div>
    );
};

export default DetailsPage;