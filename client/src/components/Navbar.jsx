import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {

    const navContainerRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const { y: currentScrollY} = useWindowScroll();

    useEffect(()=>{
        if(currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }
        else if(currentScrollY > lastScrollY) {
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav'); 
        }
        else if(currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav'); 
        }
        setLastScrollY(currentScrollY);
    },[currentScrollY, lastScrollY])

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    },[isNavVisible])
    

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2 m-10'>
            <nav className='flex size-full items-center justify-between pr-20 mr-10'>
                <div className='flex items-center gap-7'>
                    <img src='/insta.png' alt='logo' className='w-10' />
                </div>

                <div className='flex gap-20 h-full items-center mr-16'>
                    <UserButton/>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar