import React, { useEffect, useState } from 'react';
import data from '../data.json';

const { links } = data;

export default function Sidebar() {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        const hideSidebar = () => {
            const contact = document.getElementById('contact');

            const { top, bottom } = contact.getBoundingClientRect();

            const contactIsVisible = top <= window.innerHeight;

            console.log({ top, bottom, contactIsVisible });

            setHidden(contactIsVisible);
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
