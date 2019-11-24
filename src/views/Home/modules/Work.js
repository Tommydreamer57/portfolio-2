import React from 'react';
import data from '../../../assets';
import Text from '../../../components/Text';
import './Work.scss';
import { TransitionConsumer } from '../../../components/TransitionContext';

const {
    work,
    images,
} = data;

export default function Work({ selectProject }) {
    return (
        <section
            id="work"
        >
            <Text
                tagname="h2"
                text="Featured Projects*:*"
            />
            <div className="content">
                {work.map(({ name, subtitle, image }) => (
                    <a
                        className="project"
                        onClick={e => {
                            e.preventDefault();
                            selectProject(name);
                        }}
                        href={window.location.href.concat(name.replace(/\s+/g, ''))}
                    >
                        <h3 className="title">
                            <Text
                                text={name}
                            />
                            <strong className="after">
                                <TransitionConsumer>
                                    &nbsp;>
                                </TransitionConsumer>
                                <TransitionConsumer>
                                    >
                                </TransitionConsumer>
                                <TransitionConsumer>
                                    >
                                </TransitionConsumer>
                            </strong>
                        </h3>
                        <Text
                            tagname="h5"
                            text={subtitle}
                        />
                        <TransitionConsumer
                            tagname="div"
                        >
                            <img
                                src={images[image]}
                            />
                        </TransitionConsumer>
                    </a>
                ))}
            </div>
        </section >
    );
}
