import React from 'react'
import { useState } from "react";

import { CgChevronDown } from "react-icons/cg";

const styles = {
    navContainer: {
      display: 'flex',
      listStyle: 'none',
      gap: '25px',
      alignItems: 'center',
      margin: 0,
      padding: 0,
    },
    navItem: {
      color: '#0b2167', // The dark blue from your image
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'right',
      gap: '4px',
      fontFamily: 'sans-serif'
    },
    arrow: {
        fontSize: '17px', 
        paddingTop: '1px',     
        display: 'flex',       
        marginTop: '2px',
        color: '#001b61' 
    }
  };

export const Navitems = () => {
  const items = [
    {
      label: "About",
      children: ["Our Story", "Our Team", "Campus Info"],
    },
    {
      label: "Programmes",
      children: [
        "Pre-National Diploma",
        "National Diploma",
        "Professional Diploma",
        "Executive Certificate",
        "Bachelor Degree | LAUTECH PT",
        "Post-UTME",
      ],
    },
    {
    label: "Admissions",
    children: [
      "Apply for a Programme",
      "Mode of Study",
      "Tuition",
      "Student's Handbook",
      "FAQs",
    ],
  },
  {
    label: "E-Portal",
    children: ["Student", "Staff"],
  },
  { label: "SQI Scholarship" },
  { label: "News" },
  { label: "Contact" },
];
  return (
      
    <ul style={styles.navContainer}>
      {items.map((item, index) => (
        <li key={index}  style={styles.navItem}>
            {item.label} {item.children && <span style={styles.arrow}> <CgChevronDown style={styles.arrow} /> </span>}
            </li>
      ))}
    </ul>
    
  );
};

