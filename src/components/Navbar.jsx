"use client"
import Link from "next/link";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
const Navbar = () => {
  const userData = authClient.useSession()
const user = userData.data?.user
// console.log(user)
    const link = <>
  <li><Link href="/">Home</Link></li>
  
      <li><Link href="/all-animals">
      All Animals
      
      </Link></li>
      <li><Link href="/profile">Profile</Link></li>
    </>

    const handleSignOut =async()=>{
      await authClient.signOut();
    }
    return (
<div>
<div className="navbar shadow-sm bg-gradient-to-r from-green-500 to-emerald-700 hover:bg-emerald-700 font-semibold text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-gradient-to-r from-green-500 to-emerald-700 hover:bg-emerald-700 font-semibold text-white">
       
       {link}

      </ul>
    </div>
    <div>
        <Image 
        src='/logo.jpg'
        width={50}
        height={50}
        alt="logo"
        className="rounded-full w-10 h-10 object-cover"
        ></Image>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}


    </ul>
  </div>
  <div className="navbar-end">
      {
        user ? 
        <ul className="flex gap-2 items-center justify-center">
          <li>
            <Avatar >
        <Avatar.Image alt="name" 
        src={user?.image}
          referrerPolicy="no-referrer"
          
        />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      </li>
          <li><Link onClick={handleSignOut} className="bg-red-600 py-2 px-3 rounded-xl text-white" size="sm" href="/login">LogOut</Link></li>

        </ul>
        :
         <ul className="flex items-center gap-3">
       <li><Link href="/login">Login</Link></li>
       <li><Link href="/signup">SignUp</Link></li>
    </ul>
      }
  </div>
</div>

    </div>
    );
};

export default Navbar;


