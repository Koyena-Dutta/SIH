import React from 'react'


//import {RiSearch2Line} from 'react-icons/ri'
import CareerOptions from '../Components/CareerOptions.js'
//import Personality from '../pages/Personality.js'
//import ActiveSlider from '../Components/ActiveSlider.js'
const Search = () => {
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-4 ' >
        <CareerOptions />
        
    </div>
  )
}

export default Search