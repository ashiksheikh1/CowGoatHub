import React from 'react';

const Catagory = async({params}) => {
const {category} = await params
    console.log(category)
   const res= await fetch("https://my-livestock.vercel.app/animal-data.json",{
      cache: 'no-store'
    })
    const data = await res.json()
    const filter = data.filter(data=>data.category === category)
    console.log(filter)
    return (
        <div>
            
        </div>
    );
};

export default Catagory;