import React from 'react';
import { GiGoat } from 'react-icons/gi';
import { PiCowBold } from 'react-icons/pi';

const TipsAndTopBreeds = () => {
    return (
       <div className='lg:flex '>
            <div className="max-w-md mx-auto rounded-2xl p-6 
      bg-gradient-to-br from-white to-emerald-50 
      shadow-xl border border-gray-100 space-y-4">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        🐄 Top Cow Breeds
      </h2>

      {/* Content */}
      <div className="space-y-3 text-sm text-gray-700">

        <p className="flex items-start gap-2">
          <span>🐄</span>
          Holstein cows are famous for high milk production worldwide.
        </p>

        <p className="flex items-start gap-2">
          <span>🥛</span>
          Jersey cows produce rich creamy milk with high butterfat.
        </p>

        <p className="flex items-start gap-2">
          <span>🌞</span>
          Sahiwal cows are heat-resistant and perfect for tropical climates.
        </p>

        <p className="flex items-start gap-2">
          <span>💪</span>
          Gir cows are strong and widely used in dairy farming.
        </p>

        <p className="flex items-start gap-2">
          <span>⏳</span>
          Brown Swiss cows are known for long life and stable milk yield.
        </p>

        <p className="flex items-start gap-2">
          <span>🏡</span>
          Deshi cows are low-maintenance and adapted to local conditions.
        </p>

      </div>

      {/* Chips */}
      

    </div>

     <div className="max-w-md mx-auto rounded-2xl p-6 
      bg-gradient-to-br from-white to-sky-50 
      shadow-xl border border-gray-100 space-y-4">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        🐐 Top Goat Breeds
      </h2>

      {/* Content */}
      <div className="space-y-3 text-sm text-gray-700">

        <p className="flex items-start gap-2">
          <span>🐐</span>
          Boer goats are famous for fast growth and high meat production.
        </p>

        <p className="flex items-start gap-2">
          <span>🥛</span>
          Saanen goats produce large amounts of high-quality milk.
        </p>

        <p className="flex items-start gap-2">
          <span>🌿</span>
          Black Bengal goats are small but highly fertile and hardy.
        </p>

        <p className="flex items-start gap-2">
          <span>💪</span>
          Jamunapari goats are tall and known for good milk and meat.
        </p>

        <p className="flex items-start gap-2">
          <span>🏔️</span>
          Beetal goats are strong and adaptable to harsh climates.
        </p>

        <p className="flex items-start gap-2">
          <span>🏡</span>
          Kiko goats are low maintenance and disease resistant.
        </p>

      </div>

      {/* Chips */}
      

    </div>
       </div>
    );
};

export default TipsAndTopBreeds;