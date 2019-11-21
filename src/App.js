import React, { useState } from 'react';
import data from './data.json';

const {
    greeting,
    about,
    stack,
    skills,
    work,
    links,
} = data;

const emphasizeText = text => text.split(/_/g)
    .map((subText, i) => (
        <span className={i % 2 ? 'blue' : ''}>
            {subText}
        </span>
    ));

export default function App() {

    return (
        <div id="App">
            {/* VIEWS */}
            {/* GREETING */}
            <div
                id="greeting"
                className="view"
            >
                <div className="content">
                    {greeting.split(/\n/g).map((text, i) => (
                        <div className="greeting-line">
                            <span className="greeting-text">
                                {emphasizeText(text)}
                            </span>
                            {i === 0 ? (
                                <span className="red">.</span>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            {/* ABOUT */}
            <div
                id="about"
                className="view"
            >
                <div className="content">
                    <p>
                        {about.split(/\n/g).map(line => (
                            <p>
                                {emphasizeText(line)}
                            </p>
                        ))}
                    </p>
                    {/* </div>
            </div> */}
                    {/* STACK */}
                    {/* <div
                id="skills-stack"
                className="view"
            >
                <div className="content"> */}
                    {/* STACK */}
                    <div
                        id="my-stack"
                        className="card"
                    >
                        <div className="title">
                            <span>
                                My Stack
                            </span>
                            <span className="red">:</span>
                        </div>
                        <div className="card-content">
                            {stack.map(({ bullet, name }) => (
                                <div className="card-item">
                                    <span className="bullet">
                                        {emphasizeText(bullet)}
                                    </span>
                                    <span className="blue">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* SKILLS */}
                    <div
                        id="my-skills"
                        className="card"
                    >
                        <div className="title">
                            <span>
                                My Skills
                            </span>
                            <span className="red">:</span>
                        </div>
                        <div className="card-content">
                            {skills.map(({ name }) => (
                                <div className="card-item">
                                    <span>
                                        {emphasizeText(name)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="work"
                className="view"
            >
                <div className="title">
                    <span>
                        Featured Projects
                    </span>
                    <span className="red">:</span>
                </div>
                <div className="content">
                    {work.map(({ name, subTitle }) => (
                        <div className="project">
                            <div className="title">
                                {name}
                            </div>
                            <div className="sub-title blue">
                                {subTitle}
                            </div>
                            <div className="project-content">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* SIDEBAR */}
            <div id="sidebar">
                <div className="sidebar-link-wrapper">
                    {links.map(({ name, href }) => (
                        <a
                            key={name}
                            target="blank"
                            className="sidebar-link"
                            href={href}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
