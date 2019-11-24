import React from 'react';
import data from '../../../assets';
import Text from '../../../components/Text.js';
import './Greeting.scss';

const { greeting } = data;

export default function Landing() {
    return (
        <section id="greeting">
            <Text
                tagname="h1"
                text={greeting}
            />
        </section>
    );
}
