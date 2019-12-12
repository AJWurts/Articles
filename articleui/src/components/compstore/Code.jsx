import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Wrapper(props) {

    return (
        <div style={{ margin: "8px 0px" }}>
            {props.children}
        </div>
    )
}

function Code(props) {

    var [visible, setVisible] = useState(!props.notVisible);

    if (visible) {
        return (<div>
            <div>
                {props.notVisible ? <Button onClick={() => setVisible(false)} variant="dark">Hide Code</Button> : null}
                
            </div>
            <pre style={{ backgroundColor: "lightgray", padding: "5px", borderRadius: "6px", margin: "5px" }}>
                <code>
                    {props.children}
                </code>
            </pre>
        </div>);
    } else {
        return (<div>
                    <Button onClick={() => setVisible(true)} variant="dark">Show Code</Button>
                </div>
        );
    }


}

function Comment(props) {
    return (
        <span style={{ color: "darkgreen" }}>
            {props.children}
        </span>
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
        <div style={{ fontSize: "20px" }}>
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
            <b>Result:</b><br />
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
    Wrapper,
    Comment
}