import React from 'react'

function Wrapper(props) {

    return (
        <div>
            {props.children}
        </div>
    )
}

function Code(props) {
    return (
        <pre style={{backgroundColor: "lightgray", padding: "5px", borderRadius: "6px"}}>
            <code>
                {props.children}
            </code>
        </pre>
    )
}

function Line(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

function Title(props) {
    return (
        <div style={{fontSize: "20px"}}>
            {props.children}
        </div>
    )
}

function Description(props) {
    return (
        <div style={{}}>
            <b>Explanation:</b> {props.children}
        </div>
    )
}

export default {
    Code,
    Line,
    Title,
    Description,
    Wrapper
}