import React from 'react';
import data from '../data.json';

const { links } = data;

export default function Sidebar() {
    return (
        <div id="sidebar">
            <div className="sidebar-link-wrapper">
                {links.map(({ name, href }) => (
                    <a
                        key={name}
                        target="blank"
                        className="sidebar-link"
                        href={href}
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}
