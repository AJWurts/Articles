import React from 'react';
import {Card} from 'react-bootstrap';
import {CodeSnip} from "./index";

function Snip(props) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                {/* <Card.Text> */}
                    {props.children}
                {/* </Card.Text> */}

            </Card.Body>
        </Card>)
}

function Example(props) {
    return (
        <div>
            <b>Example:</b> <br/>
            <code>{props.children}</code>
        </div>
    );
}

function Result(props) {
    return (
        <div>
            <b>Result:</b> <br/>
            {props.children}
        </div>
    )
}

export default {
    Snip,
    Example,
    Result
}