import React from 'react'
import Bigheader from "../assets/bg-header-sqi-1.png"

export const Hero = () => {
const styles = {
    heroSection: {
      display: 'flex',
      alignItems: 'center',     
      justifyContent: 'space-between',
      padding: '40px 8%',        
      minHeight: '80vh',         
      backgroundColor: '#F4F1EA',                 
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    textContainer: {
      flex: 1,                   
      paddingRight: '20px',
    },
    imageContainer: {
      flex: 1,                   
      display: 'flex',
      justifyContent: 'flex-end',
    },
    title: {
      fontSize: '3.5rem',        
      fontWeight: '800',
      color: '#0b2167',         
      lineHeight: '1.1',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.1rem',
      color: '#444',             
      lineHeight: '1.6',
      marginBottom: '30px',
      maxWidth: '500px',         
    },
    ctaButton: {
      backgroundColor: '#002395',
      color: '#fff',
      padding: '15px 35px',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 35, 149, 0.3)',
    },
    mainImage: {
      width: '100%',
      maxWidth: '600px',        
      height: 'auto',
    }
  };

  return (
    <section style={styles.heroSection}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Study to become a global talent</h1>
        <p style={styles.description}>
          Learn new tech skills using a world-class curriculum from top
          industry experts in an accredited institution.
        </p>
        <button style={styles.ctaButton}>Start Now</button>
      </div>

      <div style={styles.imageContainer}>
        <img src= {Bigheader} alt="Students with laptops" />
      </div>
    </section>
  );
}
  

