import React from 'react';
import { Nav } from 'react-bootstrap';
import { List } from './index';

export default function TableOfContents(props) {
    var children = props.children
    if (!children.length) {
        children = [children]
    }

    return (
        <div>
            <div>
                <h3>
                    Table of Contents
                </h3>
                <List items={children} />
  
            </div>
            <div>
                {children.map((Child, index) => {
                    return Child
                })}
            </div>

        </div>
    )
}