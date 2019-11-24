import React, { Fragment } from 'react';

export default function Text({
    text,
    tagname = 'span',
}) {
    const tag = { name: tagname };
    return (
        <tag.name>
            {text.split(/\n/g).map((line, i, { length }) => (
                <Fragment key={i}>
                    {line.split(/_/g)
                        .map((subText, j) => {
                            const tag = {
                                name: j % 2 ?
                                    'strong'
                                    :
                                    'span'
                            };
                            return (
                                <tag.name key={j}>
                                    {subText.split(/\*/g).map((subSubText, k) => {
                                        const tag = {
                                            name: k % 2 ?
                                                'b'
                                                :
                                                'span'
                                        };
                                        return (
                                            <tag.name key={k}>
                                                {subSubText}
                                            </tag.name>
                                        );
                                    })}
                                </tag.name>
                            );
                        })}
                    {i < length - 1 ? (
                        <br />
                    ) : null}
                </Fragment>
            ))}
        </tag.name>
    );
}
