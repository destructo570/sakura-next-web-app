import React from 'react'
import { Button } from '@/components/ui/button'

const ProfileActions = () => {
  return (
    <div className='flex gap-4 my-4'>
        <Button variant="outline" className='w-full'>Follow</Button>
        <Button variant="outline" className='w-full'>Edit Profile</Button>
    </div>
  )
}

export default ProfileActions