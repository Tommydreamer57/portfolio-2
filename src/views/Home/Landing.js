import React from 'react';
import data from '../../data.json';
import Text from '../../components/Text.js';

const { greeting } = data;

export default function Landing() {
    return (
        <div
            id="greeting"
            className="view"
        >
            <div className="content">
                {greeting.split(/\n/g).map((text, i) => (
                    <div className="greeting-line">
                        <span className="greeting-text">
                            <Text
                                text={text}
                            />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
