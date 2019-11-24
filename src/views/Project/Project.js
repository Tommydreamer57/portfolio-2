import React, { useLayoutEffect } from 'react';
import { Redirect } from 'react-router-dom';
import data from '../../assets';
import Text from '../../components/Text.js';
import './Project.scss';

const {
    work,
    images,
} = data;

export default function Project({
    match: {
        params: {
            projectName,
        },
    },
    selectProject,
}) {

    console.log(arguments[0]);

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
        description,
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
                    href={window.location.href.replace(/^(.*)\/.*?$/, '$1')}
                >
                    <h2 className="title">
                        <strong className="before">
                            <span>{'<'}</span>
                            <span>{'<'}</span>
                            <span>{'<'}&nbsp;</span>
                        </strong>
                        <Text
                            text={`${name}*:*`}
                        />
                    </h2>
                </a>
            </div>
            <Text
                tagname="h5"
                text={subtitle}
            />
            <div className="content">
                <Text
                    tagname="p"
                    text={description}
                />
                <img
                    src={images[image]}
                />
            </div>
        </section>
    );
}
