import React from 'react';
import { Navitems } from './Navitems';
import Logo from "../assets/download.jpg";

export const Header = () => {
  const headerStyles = {
    container: {
      display: 'flex',              
      justifyContent: 'space-between', 
      alignItems: 'center',        
      padding: '10px 5%',          
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    },
    logoImage: {
      height: '50px'     
    }
  };

  return (
    <header style={headerStyles.container}>
      <div className="logo">
        <img src={Logo} alt="SQI Logo" style={headerStyles.logoImage} />
      </div>
      <nav>
        <Navitems />
      </nav>
    </header>
  );
};