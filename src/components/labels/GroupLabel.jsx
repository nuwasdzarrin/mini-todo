import * as React from 'react';


export default function GroupLabel (props) {
    return (
        <div className={'todFlex'}>
            <div className={`groupLabel ${props.classColor}`}>{props.label}</div>
        </div>
    )
}