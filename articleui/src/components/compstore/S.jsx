import React from 'react';


export default function S(props) {
    return (
        <span style={{color: props.color}}>
            {props.children}
        </span>
    )
}