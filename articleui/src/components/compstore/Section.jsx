import React from 'react';
import { Badge } from 'react-bootstrap';


export default function Section(props) {

    return (
        <div id={props.link} className='section'>
            <h3>
                {props.label} {props.badge}
            </h3>
            {props.children}
            {/* Add Back to Top Link */}
        </div>
    )
}