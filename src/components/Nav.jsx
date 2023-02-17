import React from 'react';
import { navData } from '../data';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href}
                className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
