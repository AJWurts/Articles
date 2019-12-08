import React from 'react';


export default function Link(props) {

    return (
        <a target="_blank" rel="noopener noreferrer" 
        href={props.href}>
            {props.children} 
        </a>
    )
}