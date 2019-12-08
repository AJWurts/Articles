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
                <div style={{fontSize: props.fontSize || '30px'}}>
                    Table of Contents
                </div>
                <List {...props} items={children} />
  
            </div>
            <div>
                {children.map((Child, index) => {
                    return Child
                })}
            </div>

        </div>
    )
}