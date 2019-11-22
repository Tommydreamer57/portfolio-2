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
                <Link
                    to="/"
                    className="project-name"
                >
                    <span>
                        {name}
                    </span>
                    <span className="red">:</span>
                </Link>
                <span className="before">
                    <span>{'<'}</span>
                    <span>{'<'}</span>
                    <span>{'<'}&nbsp;</span>
                </span>
                {/* <span className="subtitle blue">
                    {subTitle}
                </span> */}
            </div>
            <div className="sub-title blue">
                {subTitle}
            </div>
            <div className="content">

            </div>
        </div>
    );
}