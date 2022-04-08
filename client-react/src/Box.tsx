import React from 'react';

export interface BoxProps {
    children: React.ReactNode;
}

function Box(boxProps: BoxProps) {

    return (
        <div className="columns">
            <div className="column">
                <div className="box">
                    {boxProps.children}
                </div>
            </div>
        </div>
    )
}

export default Box;