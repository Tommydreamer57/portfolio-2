import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '../assets';
import Text from '../components/Text.js';
import './Sidebar.scss';

const { links } = data;

export default withRouter(function Sidebar({ location: { pathname } }) {

    const inProject = !!pathname.match(/\/.+/);

    const [hidden, setHidden] = useState(inProject);

    useEffect(() => {
        if (inProject) setHidden(true);
        else {
            const hideSidebar = () => {
                const { scrollY, innerHeight } = window;
                setHidden(scrollY > innerHeight * 0.5);
            }

            window.addEventListener('scroll', hideSidebar);
            return () => window.removeEventListener('scroll', hideSidebar);
        }
    }, [pathname]);

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
                            <Text
                                text={name}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
})
