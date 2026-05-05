"use client" 
import UpdadProfilModal from '@/components/UpdateProfilModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
      const userData = authClient.useSession()
    const user = userData.data?.user
    return (
        <div className='my-10 w-96 mx-auto text-center'>
            <h2 className='text-3xl font-bold py-5'>Your Profile</h2>
            <Card className='p-10 '>
                   <div className='mx-auto'>
                     <Avatar className='h-20 w-20' >
                        <Avatar.Image alt="name" 
                        src={user?.image}
                          referrerPolicy="no-referrer"
                          
                        />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                      </Avatar>
                   </div>
                      <h2 className='text-xl font-bold'>{user?.name}</h2>
                      <p>{user?.email}</p>
                      <UpdadProfilModal></UpdadProfilModal>
            </Card>
        </div>
    );
};

export default ProfilePage;