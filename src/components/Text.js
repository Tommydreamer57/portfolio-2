import React from 'react';

export default function Text({ text }) {
    return (
        <>
            {text.split(/_/g)
                .map((subText, i) => (
                    <span
                        key={i}
                        className={i % 2 ? 'blue' : ''}
                    >
                        {subText.split(/\*/g).map((subSubText, i) => (
                            <span className={i % 2 ? 'red' : ''}>
                                {subSubText}
                            </span>
                        ))}
                    </span>
                ))}
        </>
    );
}