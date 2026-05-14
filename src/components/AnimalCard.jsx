import "animate.css"

const AnimalCard = async() => {
    const res= await fetch("http://localhost:3000/animal-data.json",{
      cache: 'no-store'
    })
    const data = await res.json()
    const dataSlice = data.slice(0,4)
      //  console.log(dataSlice)
    return (
        <div className='grid lg:grid-cols-4 container mx-auto gap-5 sm:grid-cols-1 mt-10 animate__animated animate__fadeIn'>
      {
            dataSlice.map(data=>
        <div key={data.id} className="w-[280px] mx-auto rounded-2xl overflow-hidden bg-slate-50 
      shadow-lg hover:shadow-2xl transition duration-300 group">

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
{/* 
        Button (new modern style)
        <button className="w-full py-2 rounded-lg font-semibold text-white
          bg-emerald-600 hover:bg-emerald-700
          shadow-md hover:shadow-lg transition active:scale-95">
          Buy Now
        </button> */}

      </div>
    </div>
 

)
            }
        </div>
    );
};

export default AnimalCard;