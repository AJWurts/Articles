import React from 'react';
import { Nav } from 'react-bootstrap'
function ListItem(props) {
    return (
        <span onClick={() => window.open(props.link)}>
            {props.children}
        </span>
    )
}

function List(props) {
    var children = props.items || props.children;
    if (!children.length) {
        children = [children]
    }
    return (
        <Nav defaultActiveKey="/" className="flex-column">
            {children ? children.map((child, index) => {
                return (
                    <Nav.Link key={index} href={'#' + child.props.link} target={props.newPage ? "_blank" : ""}>{props.noNumbers ? "" : index + 1 + "."} {child.props.label || child.props.children}</Nav.Link>
                )
            }) : null}
        </Nav>
    )
}


export {
    List,
    ListItem
}