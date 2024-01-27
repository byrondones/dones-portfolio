import { useState, useEffect } from 'react';
import Landing from './home/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <Landing/>
  );
}