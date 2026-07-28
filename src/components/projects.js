import React from "react";
import "../styles.css";
import proj1img from "../assets/proj1-img.png"
import proj2img from "../assets/proj2-img.png"
import ibcv1img from "../assets/ibc-v1.png"

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="section-title">Projects</h1>
            <div className="project-items">
                <div className="project-container">
                    <img src={ibcv1img} alt="project-image" className="project-img" />
                    <p className="project-title">IBC Tools</p>
                    <p className="project-desc">IBC Tools is a suite of interactive dashboards for exploring the Ideological Books Corpus, a collection of 500 American political books. It includes text statistics with dynamic filters for title, author, ideology group, topic, publication year, and n‑gram size, alongside keyness analysis for comparing word usage across ideological groups, supporting ongoing political text research.</p>
                    <a href="https://websites.umass.edu/ideate/ibc-dashboards/" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View</button>
                    </a>
                </div>
                <div className="project-container">
                    <img src={proj2img} alt="project-image" className="project-img" />
                    <p className="project-title">Statistical Network Modeling of Post-Cold War Global Diplomacy</p>
                    <p className="project-desc">Built a global diplomatic network of 140 countries (1995–2005) using Correlates of War data and Temporal Exponential Random Graph Models to analyze how diplomatic ties form over time. The project reveals strong reciprocity, transitivity, and decentralization in post–Cold War diplomacy, highlighting a shift toward more interest-driven, multipolar international relations.</p>
                    <a href="https://rpubs.com/venkatdasari/post_coldwar_diplomatic_behaviour" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View</button>
                    </a>
                </div>
                <div className="project-container">
                    <img src={proj1img} alt="project-image" className="project-img" />
                    <p className="project-title">Anti-Phish: Phishing Detection Using Machine Learning</p>
                    <p className="project-desc">Anti‑Phish is a Flask-based web application for real-time phishing URL detection, built after conducting a comparative study of multiple supervised learning algorithms on a dataset of over 10,000 URLs with 20+ engineered features. The final system deploys the best-performing XGBoost classifier, achieving about 97% accuracy and providing end users with an instant check to flag potentially malicious links before they interact with them.</p>
                    <a href="https://anti-phish.onrender.com/" target="_blank" rel="noreferrer" className="prj-link">
                        <button className="prj-view-btn">View</button>
                    </a>
                </div>
            </div>
            <a href="https://github.com/venkatx02?tab=repositories" target="_blank" rel="noreferrer" className="prj-link">
                <button className="prj-more-btn">View More</button>
            </a>
        </section>
    );
  }
  
  export default Projects;