import React, { Fragment } from 'react';
import { TransitionConsumer } from './TransitionContext';

export default function Text({
    text,
    tagname = 'span',
}) {
    const hasParagraphs = text.includes('\n');
    const tag = {
        name: hasParagraphs ?
            Fragment
            :
            tagname,
    };
    const linetag = {
        name: hasParagraphs ?
            tagname
            :
            Fragment,
    };
    return (
        <tag.name>
            {text.split(/\n/g).map((line, i, { length }) => line ? (
                <linetag.name
                    key={i}
                    className={line.startsWith('- ') ? 'li' : ''}
                >
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
                                        return subText ? (
                                            <tag.name key={k}>
                                                {subSubText.split('').map((l, i) => l ? (
                                                    <TransitionConsumer
                                                        key={i}
                                                    >
                                                        {l}
                                                    </TransitionConsumer>
                                                ) : null)}
                                            </tag.name>
                                        ) : null;
                                    })}
                                </tag.name>
                            );
                        })}
                    {i < length - 1 ? (
                        <br />
                    ) : null}
                </linetag.name>
            ) : null)}
        </tag.name>
    );
}
