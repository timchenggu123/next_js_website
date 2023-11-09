'use client'
import { Navbar } from '../components';
import { Hero } from '../sections';
import React from 'react'

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <div className="h-screen flex flex-col">
        <div>
          <Navbar/>
        </div>  
        <div className="flex-grow">
          <Hero/>
        </div>
       
      </div>

    </div>
  )
};
