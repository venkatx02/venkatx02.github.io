import React from "react";
import "../styles.css";
import python from "../assets/python.png"
import r from "../assets/r.png"
import c from "../assets/c.png"
import cpp from "../assets/c++.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import solidity from "../assets/solidity.png"
import nodejs from "../assets/nodejs.png"
import reactjs from "../assets/reactjs.png"
import expressjs from "../assets/expressjs.png"
import flask from "../assets/flask.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"
import snowflake from "../assets/snowflake.png"
import dbt from "../assets/dbt.png"
import apacheairflow from "../assets/apacheairflow.png"
import docker from "../assets/docker.png"

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skill-items">
                <div className="skill-container"><img src={python} alt="python" className="skill-img" /><br />Python</div>
                <div className="skill-container"><img src={r} alt="r" className="skill-img" /><br />R</div>
                <div className="skill-container"><img src={c} alt="c" className="skill-img" /><br />C</div>
                <div className="skill-container"><img src={cpp} alt="c++" className="skill-img" /><br />C++</div>
                <div className="skill-container"><img src={javascript} alt="javascript" className="skill-img" /><br />JavaScript</div>
                <div className="skill-container"><img src={html} alt="html" className="skill-img" /><br />HTML</div>
                <div className="skill-container"><img src={css} alt="css" className="skill-img" /><br />CSS</div>
                <div className="skill-container"><img src={solidity} alt="solidity" className="skill-img" /><br />Solidity</div>
                <div className="skill-container"><img src={nodejs} alt="nodejs" className="skill-img" /><br />Node JS</div>
                <div className="skill-container"><img src={reactjs} alt="reactjs" className="skill-img" /><br />React JS</div>
                <div className="skill-container"><img src={expressjs} alt="expressjs" className="skill-img" /><br />Express JS</div>
                <div className="skill-container"><img src={flask} alt="flask" className="skill-img" /><br />Flask</div>
                <div className="skill-container"><img src={mysql} alt="mysql" className="skill-img" /><br />MySQL</div>
                <div className="skill-container"><img src={mongodb} alt="mongodb" className="skill-img" /><br />MongoDB</div>
                <div className="skill-container"><img src={snowflake} alt="snowflake" className="skill-img" /><br />Snowflake</div>
                <div className="skill-container"><img src={dbt} alt="dbt" className="skill-img" /><br />Data Build Tool</div>
                <div className="skill-container"><img src={apacheairflow} alt="apacheairflow" className="skill-img" /><br />Apache Airflow</div>
                <div className="skill-container"><img src={docker} alt="docker" className="skill-img" /><br />Docker</div>
            </div>
        </section>
    );
  }
  
  export default Skills;