import React from 'react'
import picture1 from "../assets/college 1.jpg"
import picture2 from "../assets/prof 2.jpg"
import picture3 from "../assets/certificate 3.jpg"


const styles = {
  detailsContainer: {
    marginTop: '20px',
    textAlign: 'left',
  },
  detailItem: {
    padding: '8px 0',
    borderBottom: '1px solid #add8e6', // The light blue underline from your pic
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#333',
  },

  section: {
    background: "#ffffff",
    padding: "80px 0",
  },
  wrapper: {
    width: "90%",
    maxWidth: "1200px",
    margin: "auto",
  },
  title: {
    textAlign: "left",
    fontSize: "44px",
    fontWeight: "800",
    color: "#0b1c4d",
    marginBottom: "60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "50px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  image: {
    width: "100%",
    filter: "grayscale(100%)",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0b1c4d",
  },
  text: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.7",
  },
  link: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#0b1c4d",
    textDecoration: "none",
    borderBottom: "2px solid #0b1c4d",
    width: "fit-content",
    paddingBottom: "3px",
  },
};

export const Programs = () => {

  const programsData = [
    {
      title: "National Diploma (ND)",
      description:
        "The National Diploma (ND) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE) and approved by the Federal Ministry of Education",
      image: picture1,
      details: [
      { label: "Duration", value: "2 Years" },
      { label: "Certificate", value: "Both National Diploma and Professional Diploma." },
      { label: "Skills", value: "Academic Institution recognized skills and In-demand professional skills." },
      { label: "Entry Requirements", value: "120 min in JAMB, 5 Credits in O-Level and Your passion" },
      { label: "Required Hardware", value: "(usually Laptop)" },
      { label: "Direct Entry", value: "Yes (Any University)" },
      { label: "Transcript & Internship", value: "Yes" },
      { label: "Access to Alumni Network and Opportunities", value: "Yes" },
    ],
    },
    {
      title: "Professional Diploma Certificate",
      description:
        "The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.",
      image: picture2,
      details: [
      { label: "Duration", value: "4-12 Months Courses" },
      { label: "Certificate", value: "Professional Diploma" },
      { label: "Skills", value: "In-demand professional skills" },
      { label: "Entry Requirements", value: "Your passion" },
      { label: "Required Hardware", value: "(usually Laptop)" },
      { label: "Transcript & Internship", value: "Yes." },
      { label: "Access to Alumni Network and Opportunities", value: "Yes." },
    ],
    },
    {
      title: "Certificate Program",
      description:
        "The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.",
      image: picture3,
      details: [
      { label: "Duration", value: "2 weeks to 10 months" },
      { label: "Certificate", value: "Certificate Program" },
      { label: "Skills", value: "In-demand professional skills" },
      { label: "Entry Requirements", value: "Your passion" },
      { label: "Required Hardware", value: "(usually Laptop)" },
      { label: "Transcript & Internship", value: "No" },
      { label: "Access to Alumni Network and Opportunities", value: "Yes." },
    ],
    },
  ];
    return (
      <section style={styles.section}>
        <div style={styles.wrapper}>
          <h2 style={styles.title}>
            Start here. Change the world.
          </h2>

          <div style={styles.grid}>
            {programsData.map((item, index) => (
              <div key={index} style={styles.card}>
                <img src={item.image} alt={item.title} style={styles.image} />

                <h3 style={styles.heading}>{item.title}</h3>

                <p style={styles.text}>{item.description}</p>
                
                <a href="#" style={styles.link}>
                  Learn More
                </a>

                <div style={styles.detailsContainer}>
                   {item.details && item.details.map((detail, dIndex) => (
                   <div key={dIndex} style={styles.detailItem}>
                   <span style={styles.detailLabel}>{detail.label}:</span> {detail.value}
                </div>
                 ))}
               </div>



              
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  