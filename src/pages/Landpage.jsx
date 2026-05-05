import React from 'react'
import { useState } from "react";
import { Header } from "../Components/Header.jsx";
import { Hero } from "../Components/Hero.jsx";
import { Programs } from "../Components/Hero2.jsx";


export const Landpage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Programs />
        </div>
        
  );
}
