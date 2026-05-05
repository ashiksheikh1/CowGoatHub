import React from 'react';
import { IoFitnessSharp } from 'react-icons/io5';
import { LiaTeethOpenSolid } from 'react-icons/lia';
import { PiCowBold } from 'react-icons/pi';

const QurbaniPreparation = () => {
    return (
<div  className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 my-12'>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Age Limit
      </h2>

      {/* Content */}
      <p className="text-gray-600 leading-relaxed">
        Cows must be at least <span className="font-semibold text-green-600">2 years</span> old, 
        and goats/sheep should be <span className="font-semibold text-blue-600">1 year</span> old.
      </p>

      {/* Badge */}
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          Cow: 2+ Years
        </span>
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          Goat/Sheep: 1+ Year
        </span>
      </div>

    </div>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Age Limit
      </h2>

      {/* Content */}
      <p className="text-gray-600 leading-relaxed">
        Cows must be at least <span className="font-semibold text-green-600">2 years</span> old, 
        and goats/sheep should be <span className="font-semibold text-blue-600">1 year</span> old.
      </p>

      {/* Badge */}
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          Cow: 2+ Years
        </span>
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          Goat/Sheep: 1+ Year
        </span>
      </div>

    </div>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Age Limit
      </h2>

      {/* Content */}
      <p className="text-gray-600 leading-relaxed">
        Cows must be at least <span className="font-semibold text-green-600">2 years</span> old, 
        and goats/sheep should be <span className="font-semibold text-blue-600">1 year</span> old.
      </p>

      {/* Badge */}
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
          Cow: 2+ Years
        </span>
        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
          Goat/Sheep: 1+ Year
        </span>
      </div>

    </div>
</div>




        // <div className='my-10 container mx-auto'>
        //     <h2 className='text-3xl font-bold text-center'>Qurbani Preparation Tips</h2>
        //     <p className='text-xl text-center mb-5'>Essential guidelines for choosing a healthy sacrificial animal</p>
        //     <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1'>
        //         <div className='bg-pink-300 p-6 '>
        //             <PiCowBold />
        //             <h2 className='font-bold my-2'>Age Limit</h2>
        //         <p>Cows must be at least 2 years old, and goats/sheep should be 1 year old.</p>
        //         </div>
        //         <div className='bg-purple-300 p-6 '>
        //             <LiaTeethOpenSolid />
        //             <h2 className='font-bold  my-2'>Teeth Verification</h2>
        //         <p>Check for two permanent front teeth (Do-Danta) to ensure the animal is mature.</p>
        //         </div>
        //         <div className='bg-gray-300 p-6 '>
        //            <IoFitnessSharp />
        //             <h2 className='font-bold  my-2'>Physical Fitness</h2>
        //         <p>The animal should be active and free from any visible defects or sickness.</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default QurbaniPreparation;