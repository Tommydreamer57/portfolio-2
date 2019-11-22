import React, { useLayoutEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import data from '../../data.json';

const { work } = data;

export default function Project({
    match: {
        params: {
            projectName,
        },
    },
}) {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            window.scrollTo(0, 0);
        });
    }, []);

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
            <div className="project-title title">
                <span>
                    {name}
                </span>
                <span className="red">:</span>
                {/* <span className="subtitle blue">
                    {subTitle}
                </span> */}
                <Link
                    to="/"
                    className="project-back-link"
                >
                    Back
                </Link>
            </div>
            <div className="sub-title blue">
                {subTitle}
            </div>
            <div className="content">

            </div>
        </div>
    );
}