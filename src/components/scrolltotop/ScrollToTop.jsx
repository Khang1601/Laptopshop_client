import React from 'react'
import './scrollToTop.scss'
import { useEffect, useState } from 'react';

export default function ScrollToTop() {

    // Function scroll to the top of the page
    // smooth: scrolling should animate smoothly
    // instant: scrolling should happen instantly in a single jump
    // auto: scroll behavior is determined by the computed value of scroll-behavior
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Function handle scroll event
        function handleScroll() {

            if (window.scrollY >= 100) {
                document.querySelector('.scroll-to-top').style.display = 'block';
            } else {
                document.querySelector('.scroll-to-top').style.display = 'none';
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // chạy 1 lần

    return (
        <div>

            <button onClick={scrollToTop} className="scroll-to-top">
                <ion-icon name="chevron-up"></ion-icon>
            </button>

        </div>
    )
}
