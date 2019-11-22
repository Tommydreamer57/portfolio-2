import React from 'react';
import data from '../../data.json';

const { links } = data;

export default function Contact() {
    return (
        <div
            id="contact"
            className="footer"
        >
            {links.map(({ name, href }) => (
                <a
                    target="blank"
                    href={href}
                    className="external-link"
                >
                    {name}
                </a>
            ))}
        </div>
    );
}
