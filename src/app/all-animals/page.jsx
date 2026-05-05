`"use client"`

import Priceing from "@/components/Priceing";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AllAnimalsPage = async () => {
// const [seclect, setSeclect] = useState()
  const res = await fetch("http://localhost:3000/animal-data.json")
  const dataSlice = await res.json()

  // const items = [{ name: 'A', price: 30 }, { name: 'B', price: 10 }];
//  const dataSlice = datas.sort((a, b) => b.price - a.price);



  // let price = [3, 4, 6, 0, 8, 2];
  // let lastPrice = price[0]; // প্রথম মানটি সেট করে নিলাম

  // for (let data of price) {
  //     if (data > lastPrice) {
  //         console.log(data + " দামটি আগের দাম " + lastPrice + " এর চেয়ে বেশি।");
  //     }
  //     lastPrice = data; // এখন বর্তমান দামটিই পরবর্তী লুপের জন্য 'আগের দাম' হয়ে যাবে
  // } 

  return (
    <div className="container mx-auto mb-12">
            
 
          <Priceing dataSlice ={dataSlice}></Priceing>
      
     
    </div>
  );
};

export default AllAnimalsPage;