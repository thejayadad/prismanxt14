import React from 'react'

const Hero = () => {
  return (
    <section className=''>
        <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
            <h2 className='text-3xl font-extrabold text-black sm:text-4xl'>
                <span className='block'>The Fitness</span>
                <span
                className='block text-orange-500'
                >World</span>
            </h2>
            <p className='text-xl mt-4 max-w-md mx-auto text-gray-400'>
                A Space To Share All Things Fitness Related
            </p>
        </div>
    </section>
  )
}

export default Hero