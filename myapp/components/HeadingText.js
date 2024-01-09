import React from 'react'

const HeadingText = ({title, description}) => {
  return (
    <div>
        <h1 className='text-3xl font-extrabold text-black sm:text-4xl'>
            {title}
        </h1>
    </div>
  )
}

export default HeadingText