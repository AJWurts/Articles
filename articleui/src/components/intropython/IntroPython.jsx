import React from 'react';
import {
    Section,
    TableOfContents
} from "../compstore";
import {Badge} from "react-bootstrap";

export default function IntroPython(props) {

    return (
        <div className='page-wrapper'>
            <h1>
                Welcome to Python
            </h1>
            <h4>
                A minimal guide to get you started.
            </h4>
            <TableOfContents>
                <Section link="starting" label="Getting Started">
                    <p>
                       Coming Soon...
                    </p>
                </Section>
            </TableOfContents>
        </div>
    )
}