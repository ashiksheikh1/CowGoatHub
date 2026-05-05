import React from 'react';

const Catagory = async({params}) => {
const {category} = await params
    console.log(category)
   const res= await fetch("http://localhost:3000/animal-data.json")
    const data = await res.json()
    const filter = data.filter(data=>data.category === category)
    console.log(filter)
    return (
        <div>
            
        </div>
    );
};

export default Catagory;