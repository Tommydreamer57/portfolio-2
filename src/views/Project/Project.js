import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import data from '../../data.json';
import useScrollPosition from '../../hooks/use-scroll-position.js';

const { work } = data;

export default function Project({
    match: {
        params: {
            projectName,
        },
    },
}) {

    useScrollPosition(projectName);

    const project = work.find(({ name }) => name.replace(/\s/g, '') === projectName);

    if (!project) return (
        <Redirect to="/" />
    );

    const {
        name,
        subTitle,
        image,
    } = project;

    return (
        <div
            id="project"
            className="view"
        >
            <div className="title">
                {name}
                <span className="red">:</span>
                {/* <span className="subtitle blue">
                    {subTitle}
                </span> */}
                <Link
                    to="/"
                >
                    Back
                </Link>
            </div>
        </div>
    );
}