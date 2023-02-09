import React from 'react';
import MenuIcon from './assets/images/icon-menu.svg';
import Logo from './assets/images/logo.svg';
import Cart from './assets/images/icon-cart.svg';
import Avater from './assets/images/image-avatar.png';

export default function Header() {
  return (
    <header  className='flex items-center justify-between p-8 border-b border-[hsl(0, 0%, 100%)] max-w-7xl mx-auto'>
        <div className='flex items-center justify-start gap-12'>
        <img src={Logo} alt="" />
        <nav>
            <ul className='flex items-center justify-start gap-6 text-dark-grayish-blue'>
                <li className='cursor-pointer hover:text-blackcus'>Collection</li>
                <li className='cursor-pointer hover:text-blackcus'>Man</li>
                <li className='cursor-pointer hover:text-blackcus'>Women</li>
                <li className='cursor-pointer hover:text-blackcus'>About</li>
                <li className='cursor-pointer hover:text-blackcus'>Contact</li>
            </ul>
        </nav>
        </div>
        <div>
            <ul className='flex items-center justify-start gap-6'>
                <li><a href=""><img src={Cart} alt="Cart Icon" /></a>
                
                </li>
                <li><img src={Avater} alt="Avater Icon" className='w-12 hover:border-2 hover:border-orange rounded-full cursor-pointer'/></li>
            </ul>
        </div>
    </header>
)
}
