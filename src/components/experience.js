import React from "react";
import "../styles.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import tataelxsi from "../assets/tataelxsi.png";
import phoenixglobal from "../assets/phoenixglobal.png";
import bsg from "../assets/bsg.png";
import umass from "../assets/umass.png";
import issr from "../assets/issr.png"

const Experience = () => {
    return (
        <section id="experience">
            <h1 className="section-title">Experience</h1>
            <div className="exp-timeline">
            <VerticalTimeline layout="1-column-left">
                <VerticalTimelineElement icon={<img className="company-logo" src={issr} alt="bsg" />} date="September 2025 - Present">
                    <h1 className="exp-title">NLP Consultant</h1>
                    <h2 className="exp-company">Institute for Social Science Research (ISSR)</h2>
                    {/*
                    <h3 className="exp-desc">Advised 15+ research projects through presentations and one-on-one consultations, supporting initial scoping, study design, implementation, model evaluation and delivery
                        <br /> Created reusable tutorials, code templates, and documentation for text-as-data workflows, reducing new-project onboarding time by half and standardizing best practices institute-wide
                        <br /> Led hands-on R and Python workshops for 40+ participants on quantitative text analysis, including pre-processing, statistical/topic modeling, and LLM-based methods</h3>
                        */}
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={umass} alt="bsg" />} date="November 2024 - Present">
                    <h1 className="exp-title">Research Assistant</h1>
                    <h2 className="exp-company">University of Massachusetts, Amherst</h2>
                    {/*
                    <h3 className="exp-desc">Review literature and design computational frameworks to identify core values and citations in political books
                        <br /> Automated data collection and sentiment/stance classification through NLP pipelines (Python, HuggingFace, vLLM), cutting annotation effort by 70%
                        <br /> Designed validation protocols to assess label quality against domain ground truth, and reduced cross-model variance through refined prompt design, reaching 85% agreement
                        <br /> Built interactive text-as-data dashboards (Streamlit, Shiny, React, D3) to track language and citation patterns over ideology, topic, and timeline, and a RAG-based retrieval system over 400k+ text segments, supporting researchers in exploratory analysis
                        <br /> Deploy and maintain a public research portal for the Ideological Books Corpus (IBC), publishing datasets, documentation, and updates, making the corpus accessible to researchers and the general public</h3>
                        */}
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={umass} alt="bsg" />} date="September 2025 - May 2026">
                    <h1 className="exp-title">Teaching Assistant</h1>
                    <h2 className="exp-company">University of Massachusetts, Amherst</h2>
                    {/*
                    <h3 className="exp-desc">Assisted in teaching DACSS 603: Introduction to Quantitative Analysis, covering statistics, probability, and regression analysis in R
                        <br /> Held office hours and provided one-on-one tutoring sessions to 60+ students, assisting with R (syntax, debugging, data wrangling, visualization, and regression) to support assignments and projects</h3>
                        */}
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={bsg} alt="bsg" />} date="January 2024 - June 2024">
                    <h1 className="exp-title">Growth & Technical Assistance</h1>
                    <h2 className="exp-company">Bharat Scouts & Guides, Rajahmundry</h2>
                    {/*
                    <h3 className="exp-desc">Generated reports to help with campaign decision-making, resulting in an increase of member count by 125% within 3 months
                        <br /> Produced campaign performance reports using Tableau and Excel that informed outreach strategy and contributed to a 125\% increase in membership over 3 months
                        <br /> Built and maintained a database of 800+ member profiles, improving data quality and standardizing recordkeeping across the organization
                        <br /> Coordinated cultural, service, and adventure programs in collaboration with Indian Railways and local public offices</h3>
                        */}
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={tataelxsi} alt="tata-elxsi" />} date="February 2023 - July 2023">
                    <h1 className="exp-title">Engineer Intern - Auto General</h1>
                    <h2 className="exp-company">TATA Elxsi, Trivandrum</h2>
                    {/*
                    <h3 className="exp-desc">Designed and developed a seamless user interface (UI) for a resume parsing application, enhancing user experience and streamlining workflows for HR and project management teams
                        <br /> Identified parsing issues and implemented robust error and exception handling scripts, increasing the reliability and efficacy of the application by 20%
                        <br /> Researched embedded product engineering and communication systems in automotive applications, and delivered daily presentations to the team</h3>
                        */}
                </VerticalTimelineElement>
                <VerticalTimelineElement icon={<img className="company-logo" src={phoenixglobal} alt="phoenix-global" />} date="May 2022 - June 2022">
                    <h1 className="exp-title">Intern - Web Development</h1>
                    <h2 className="exp-company">Phoenix Global, Remote</h2>
                    {/*
                    <h3 className="exp-desc">Worked with a team of 5 and built a full-stack web application for event hosting.
                        <br /> Learned cutting edge skills like React JS, Node JS, Express JS, MongoDB.</h3>
                        */}
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </section>
    );
  }
  
  export default Experience;