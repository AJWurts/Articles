import React from 'react';


export default function SubSection(props) {

    return (
        <div id={props.link} className='section'>
            <h4>
                {props.label} {props.badge}
            </h4>
            {props.children}
        </div>
    )
}