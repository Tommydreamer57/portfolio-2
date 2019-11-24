import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import './Sidebar.scss';

const { links } = data;

export default function Sidebar() {

    const [hidden, setHidden] = useState(false);

    useEffect(() => {

        const hideSidebar = () => {
            const { scrollY, innerHeight } = window;
            setHidden(scrollY > innerHeight * 0.5);
        }

        window.addEventListener('scroll', hideSidebar);
        return () => window.removeEventListener('scroll', hideSidebar);
    }, []);

    return (
        <nav
            className={hidden ? 'hidden' : ''}
        >
            <ul>
                {links.map(({ name, href }) => (
                    <li key={name}>
                        <a
                            key={name}
                            target="blank"
                            className="sidebar-link external-link"
                            href={href}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
