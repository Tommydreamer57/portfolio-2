import React, { useLayoutEffect } from 'react';
import { Redirect } from 'react-router-dom';
import data from '../../assets/data.json';
import Text from '../../components/Text.js';
import './Project.scss';

const { work } = data;

export default function Project({
    match: {
        params: {
            projectName,
        },
    },
    selectProject,
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
        subtitle,
        image,
    } = project;

    return (
        <section id="project">
            <div className="project-title title">
                <a
                    className="project-name"
                    onClick={e => {
                        e.preventDefault();
                        selectProject('');
                    }}
                >
                    <h2>
                        <Text
                            text={`${name}*:*`}
                        />
                        <span className="before">
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                            <span>{'<'}&nbsp;</span>
                        </span>
                    </h2>
                </a>
            </div>
            <Text
                tagname="h5"
                text={subtitle}
            />
            <div className="content">

            </div>
        </section>
    );
}
