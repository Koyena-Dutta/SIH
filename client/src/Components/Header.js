import React from 'react';
import Logo from '../assets/img/career.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='py-6 mb-12 border-b'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href='/' className='flex items-center'>
                    Logo
                </a>

                <nav className='flex items-center gap-6 ml-auto'>
                    <a href='/' className='hover:text-violet-600 transition-colors duration-300'>Home</a>
                    <a href='/' className='hover:text-violet-600 transition-colors duration-300'>About</a>
                    <a href='/' className='hover:text-violet-600 transition-colors duration-300'>Help</a>
                    <a href='/' className='hover:text-violet-600 transition-colors duration-300'>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;




/*import React from 'react'
import Logo from '../assets/img/career.jpg'
import {Link} from 'react-router-dom';
const Header = () => {

    return(
        <header className='py-6 mb-12 border-b'>
            <a href='/' className='container mx-auto flex justify-between items-center '>Logo</a>

            <nav className='flex items-center gap-6'>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Help</a>
                <a href='/'>Contact</a>
                
            </nav>
        </header>
    )
  
}

export default Header*/