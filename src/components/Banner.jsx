import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-[400px] w-ful my-8">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('http://localhost:3000/banner.jpg')] bg-cover bg-center"></div>

      {/* Overlay (optional dark layer) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
         “Farmers carefully raise livestock.”
        </h1>
        <p className="mb-6 text-sm md:text-lg">
         “Farmers carefully manage livestock to ensure healthy growth and sustainable food production” 
        </p>
        <Link href='/all-animals'>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
          Get Started
        </button></Link>
      </div>

    </div>
  );
}