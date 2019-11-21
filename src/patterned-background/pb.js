import React, { useState } from 'react';
import './pb.scss';

export default function App() {

    const [rowCount, setRowCount] = useState(20);
    const [colorCount, setColorCount] = useState(12);

    const rows = '.'.repeat(rowCount).split('');
    const colors = '.'.repeat(colorCount).split('');

    return (
        <div className="App">
            {rows.map((_, i) => (
                <div className="row">
                    {colors.map((_, j) => (
                        <div className="color-wrapper">
                            <div className="color">
                                <div className="number">
                                    {i * colorCount + j + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
