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
            <Link
                to="/"
                className="project-title title"
            >
                <span className="before">
                    <span>{'<'}</span>
                    <span>{'<'}</span>
                    <span>{'<'}&nbsp;</span>
                </span>
                <span>
                    {name}
                </span>
                <span className="red">:</span>
                {/* <span className="subtitle blue">
                    {subTitle}
                </span> */}
            </Link>
            <div className="sub-title blue">
                {subTitle}
            </div>
            <div className="content">

            </div>
        </div>
    );
}