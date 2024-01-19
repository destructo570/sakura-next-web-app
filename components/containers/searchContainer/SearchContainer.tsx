import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import PeopleList from './PeopleList'

const SearchContainer = () => {
  return (
    <div className='p-4'>
        <div className='flex gap-4 '>
            <Input placeholder="Search for someone"/>
            <Button variant="ghost">Cancel</Button>
        </div>
        <PeopleList/>
    </div>
  )
}

export default SearchContainer