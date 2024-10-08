import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className="home__data">
            <h3 className="home__subtitle">
                Hey there! 
                {/* <i 
                    className="uil uil-volume home__subtitle-icon" 
                    data-tooltip="Pronounce My Name"
                ></i> */}
            </h3>
            <h1 className="home__title">
                I'm 
                <span className="home__title-name"> Nik Sun</span>
            </h1>
            <h3 className="home__subtitle">
                Full-stack Data Scientist @ Prospect Equities
            </h3>
            <p className="home__description">
                {`Master of Data Science at Rice University | 
                Mathematical Science, Economics at UC Santa Barbara | 
                Prev Data Science Intern at `}
                <a 
                    href="https://www.siliconranch.com/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Silicon Ranch Corporation
                </a>
                {' & '}
                <a 
                    href="https://consentify.io/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Consentify
                </a>
            </p>
            <a href="#contact" className="button button-flex">
                <span>Contact Me</span>
                <i className="uil uil-message button__icon"></i>
            </a>
        </div>
    );
}

export default Intro;
