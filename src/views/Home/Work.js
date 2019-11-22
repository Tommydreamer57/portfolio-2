import React from 'react';
import { Link } from 'react-router-dom';
import * as images from '../../assets';
import data from '../../data.json';

const { work } = data;

export default function Work() {
    return (
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
                {work.map(({ name, subTitle, image }) => (
                    <Link
                        className="project"
                        to={`/${name.replace(/\s+/g, '')}`}
                    >
                        <div className="title">
                            <span>
                                {name}
                            </span>
                            <span className="after">
                                <span>&nbsp;></span>
                                <span>></span>
                                <span>></span>
                            </span>
                        </div>
                        <div className="sub-title blue">
                            {subTitle}
                        </div>
                        <div className="project-content">
                            <img
                                className="project-image"
                                id={`${name.replace(/\s/g, '')}-image`}
                                src={images[image]}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
