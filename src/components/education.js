import React from "react";
import "../styles.css";
import degreeimg from "../assets/degree.png";

const Education = () => {
    return (
        <section id="education">
            <h1 className="section-title">Education</h1>
            <div className="edu-container">
                <img src={degreeimg} alt="degree" className="degree-img" />
                <h3>M. S. Master's Degree</h3>
                <h4 style={{color: "grey", fontWeight: 500}}>Data Analytics and Computational Social Science</h4>
                <h4 style={{color: "grey", fontWeight: 500}}>University of Massachusetts Amherst</h4>
            </div>
            <div className="edu-container">
                <img src={degreeimg} alt="degree" className="degree-img" />
                <h3>B. Tech. Bachelor's Degree</h3>
                <h4 style={{color: "grey", fontWeight: 500}}>Computer Science Engineering</h4>
                <h4 style={{color: "grey", fontWeight: 500}}>Gandhi Institute of Technology and Management</h4>
            </div>
        </section>
    );
  }
  
  export default Education;