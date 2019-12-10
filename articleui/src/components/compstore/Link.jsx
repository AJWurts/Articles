import React from 'react';


export default function Link(props) {

    return (
        <a target="_blank" rel="noopener noreferrer" 
         {...props}>
            {props.children} 
        </a>
    )
}