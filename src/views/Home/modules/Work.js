import React from 'react';
import data from '../../../assets';
import Text from '../../../components/Text';
import './Work.scss';

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
                    >
                        <h3 className="title">
                            <Text
                                text={name}
                            />
                            <span className="after">
                                <span>&nbsp;></span>
                                <span>></span>
                                <span>></span>
                            </span>
                        </h3>
                        <Text
                            tagname="h5"
                            text={subtitle}
                        />
                        <img
                            src={images[image]}
                        />
                    </a>
                ))}
            </div>
        </section >
    );
}