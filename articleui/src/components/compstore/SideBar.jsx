import React from 'react';
import {List} from "./List";

const wrapperStyle = {

}

const itemStyle = {
    borderBottom: "1px solid gray",
    color: '#007bff',

}


function Item(props) {
    return (
        <div style={itemStyle} className="sidebar-item" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

function Wrapper(props) {
    let children = props.children;
    if (!children.length) {
        children = [children]
    }
    console.log(children);
    return (
        <div {...props}>
            <h4>
                Tutorials
            </h4>
            {children}
        </div>
    );

}

export default {
    Item,
    Wrapper
}

