import React from 'react'

import Hero from './components/Hero'
import Brands from './components/Brands'

import Dressstyle from './components/Dressstyle'
import Products from './products/page'

import CustomerCarousel from '@/components/Happycustomer'











export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Brands/>
      <Products/>
    
      <Dressstyle/>
   <CustomerCarousel/>
 

 
    </div>
  )
}
