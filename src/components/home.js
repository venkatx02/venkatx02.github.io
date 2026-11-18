import React from "react";
import "../styles.css";
import venkat from "../assets/venkat.png";
import resume from "../assets/resume.pdf"
import cv from "../assets/cv.pdf";
import Typewriter from "typewriter-effect";
import { FaGithub, FaFileAlt, FaFilePdf } from "react-icons/fa";

const Home = () => {
    return (
      <section id="home">
        <div className="home-content">

            <h1 className="home-heading">Hello, I'm <span>Venkat.</span></h1>

            <div className="home-interests">
              <span>I work on </span>
              <Typewriter
              options={{
                strings: [
                  'Computational Social Science',
                  'Political Communication',
                  'Natural Language Processing',
                  'Artificial Intelligence',
                  'Narrative Intelligence',
                  'Research Methods',
                  'Experimentation'
                ], autoStart: true, loop: true }}
              />
            </div>


            <div className="btn-group">
              
              <a href={resume} target="_blank" rel="noreferrer">
                <button className="btn"><FaFileAlt /> Resume</button>
              </a>
              
              <a href="https://github.com/venkatx02" target="_blank" rel="noreferrer">
                <button className="btn"><FaGithub /> GitHub</button>
              </a>
              
              <a href={cv} target="_blank" rel="noreferrer">
                <button className="btn"><FaFilePdf /> Academic CV</button>
              </a>
              
            </div>


        </div>
        <img src={venkat} alt="Venkat" className="home-img" />
      </section>
    );
  }
  
  export default Home;