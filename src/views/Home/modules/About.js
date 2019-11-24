import React from 'react';
import data from '../../../assets';
import Text from '../../../components/Text.js';
import './About.scss';

const {
    about,
    stack,
    skills,
} = data;

export default function About() {
    return (
        <section id="about">
            <Text
                tagname="h2"
                text="About Me*:*"
            />
            <div className="content">
                <Text
                    tagname="p"
                    text={about}
                />
                {/* STACK */}
                <div id="my-stack" className="card">
                    <Text
                        tagname="h4"
                        text="My Stack*:*"
                    />
                    <ul>
                        {stack.map(({ bullet, name }) => (
                            <li>
                                <Text
                                    text={bullet}
                                />
                                <Text
                                    text={`_${name}_`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* SKILLS */}
                <div id="my-skills" className="card">
                    <Text
                        tagname="h4"
                        text="My Skills*:*"
                    />
                    <ul>
                        {skills.map(({ name }) => (
                            <Text
                                tagname="li"
                                text={name}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
