import React from 'react'
import Image from '../assets/img/illustration.png'
import Search from '../Components/Search';
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24' >
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-nne mb-6'>
                    <span className='text-violet-700'>Plan</span>Your Dream Career with us.</h1>
                <p className='max-w-[480px] mb-8'>
                Plan your dream with us, where your aspirations meet expert guidance, turning visions into reality. Together, we craft personalized pathways that lead you to your goals. Let our experience and passion light the way to your dream's success. From concept to completion, we stand by your side. Your dream deserves the best—let’s make it happen together.
                </p>
            </div>
            {/*Image*/}
            <div className='hidden flex-1 lg:flex justify-end items-end'>
                <img src={Image} alt=''/>
            </div>
        </div>
        <Search />
    </section>
  )
}

export default Banner