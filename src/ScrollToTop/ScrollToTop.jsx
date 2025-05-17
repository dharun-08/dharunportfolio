import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
    const[visibility,setVisibility] = useState(false);
    useEffect(() => {
        const visibilityFunc = () => {
            if(window.scrollY > 300) {
                setVisibility(true);
            }else{
                setVisibility(false);
            }
        };
        window.addEventListener('scroll',visibilityFunc);
        return () => window.removeEventListener('scroll',visibilityFunc);
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    }
  return (
    visibility && (
        <button className='fixed bottom-6 right-6 p-3 rounded-3xl text-white hover:bg-gray-600 z-50' onClick={scrollToTop}>
            <ArrowUp />
        </button>
    )
  )
}

export default ScrollToTop