import React, { useEffect, useState } from 'react';
import data from '../data.json';

const { links } = data;

export default function Sidebar() {

    const [hidden, setHidden] = useState(false);

    useEffect(() => {

        const hideSidebar = () => {

            const about = document.getElementById('about');

            const { top, bottom } = about.getBoundingClientRect();

            const aboutHasReachedHalfway = top <= window.innerHeight / 5;

            console.log({ top, bottom, aboutHasReachedHalfway });

            setHidden(aboutHasReachedHalfway);
        }

        window.addEventListener('scroll', hideSidebar);

        return () => window.removeEventListener('scroll', hideSidebar);
    }, []);

    return (
        <div
            id="sidebar"
            className={hidden ? 'hidden' : ''}
        >
            <div className="sidebar-link-wrapper">
                {links.map(({ name, href }) => (
                    <a
                        key={name}
                        target="blank"
                        className="sidebar-link external-link"
                        href={href}
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}
