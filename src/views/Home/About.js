import React from 'react';
import data from '../../data.json';
import Text from '../../components/Text.js';

const {
    about,
    stack,
    skills,
} = data;

export default function About() {
    return (
        <div
            id="about"
            className="view"
        >
            <div className="content">
                <p>
                    {about.split(/\n/g).map(line => (
                        <p>
                            <Text
                                text={line}
                            />
                        </p>
                    ))}
                </p>
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
                                    <Text
                                        text={bullet}
                                    />
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
                                    <Text
                                        text={name}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
