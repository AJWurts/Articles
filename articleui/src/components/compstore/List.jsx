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
                let href = (props.newPage ? "" : "#") + child.props.link;
                return (
                    <Nav.Link key={index} href={href} target={props.newPage ? "_blank" : ""}>
                        {props.noNumbers ? "" : index + 1 + "."} {child.props.label || child.props.children} {child.props.badge}
                    </Nav.Link>
                )
            }) : null}
        </Nav>
    )
}


export {
    List,
    ListItem
}