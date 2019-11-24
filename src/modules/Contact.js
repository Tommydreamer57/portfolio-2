import React from 'react';
import data from '../assets';
import Text from '../components/Text';
import './Contact.scss';

const { links } = data;

export default function Contact() {
    return (
        <footer>
            {links.map(({ name, href }) => (
                <a
                    target="blank"
                    href={href}
                    className="external-link"
                >
                    <Text
                        text={name}
                    />
                </a>
            ))}
        </footer>
    );
}
