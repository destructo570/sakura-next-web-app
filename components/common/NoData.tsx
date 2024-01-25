import React from 'react'

const NoData = ({message}: {message:string}) => {
  return (
    <div className='flex justify-center py-4'>
        <p>{message}</p>
    </div>
  )
}

export default NoData