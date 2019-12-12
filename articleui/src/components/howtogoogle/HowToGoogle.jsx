import React from 'react';
import {
    Section,
    TableOfContents
} from "../compstore";

export default function IntroPython(props) {

    return (
        <div className='page-wrapper'>
            <h1>
                Welcome to How to Google for Programming
            </h1>
            <h3>By Alexander Wurts</h3>
            <p>
                If you have any questions, comments, or think there is an error please email me at
                <b> alexwurtsfeedback@gmail.com</b>.
            </p>
            <h4>
                A minimal guide to get you started. A better name could be, "How to find the Stackoverflow answer you want on your first try".
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