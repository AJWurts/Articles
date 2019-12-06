import React from 'react'

function Wrapper(props) {

    return (
        <div style={{   margin: "8px 0px"}}>
            {props.children}
        </div>
    )
}

function Code(props) {
    return (
        <pre style={{backgroundColor: "lightgray", padding: "5px", borderRadius: "6px",  margin: "5px"}}>
            <code>
                {props.children}
            </code>
        </pre>
    )
}

function Line(props) {
    let tabs = ''

    for (let i = 0; i < (props.tabs || 0); i++) {
        tabs += '    '
    }
    return (
        <div>
            {tabs}{props.children}
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

function Result(props) {
    return (
        <div>
            <b>Result:</b><br/>
            {props.children}
        </div>
    )
}

export default {
    Code,
    Line,
    Title,
    Description,
    Result,
    Wrapper
}