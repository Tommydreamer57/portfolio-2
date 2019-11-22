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
                <div className="greeting-line">
                    {/* {greeting.split(/\n/g).map((text, i) => ( */}
                        <span className="greeting-text">
                            <Text
                                text={greeting}
                            />
                        </span>
                    {/* ))} */}
                </div>
            </div>
        </div>
    );
}
