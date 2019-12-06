import React from 'react';
import {
    TableOfContents,
    Section,
    List,
    ListItem,
    CodeSnip,
    SubSection,
    Code
} from '../compstore';

import {Badge, Card, CardDeck} from 'react-bootstrap';

export default function IntroWebDev(props) {

    return (
        <div className='page-wrapper'>
            <h1>
                Welcome to Intro to Web Dev.
            </h1>
            <h4>
                A guide to the resources needed to get started.
            </h4>
            <TableOfContents>
                <Section link="starting" label="Getting Started" badge={<Badge
                    variant="warning">Full</Badge>}>
                    <p>
                        Web development can mean a lot of different things. It's important to have a clear learning
                        goal. For example if you are interested in user interface or front end design its best to learn
                        HTML and CSS first than migrate to JS for interactive web pages. Or if you are interested in
                        creating complex interactive applications then backend may be a good place to start. This
                        tutorial will cover three topics Front End Development, Backend Development, and Full Stack
                        development (both frontend and backend). Every section will be labeled either <Badge
                        variant="primary">Front</Badge>, <Badge
                        variant="success">Back</Badge> or <Badge variant="warning">Both</Badge>. Based on what your goal
                        is you can choose to read the relevant sections.
                    </p>
                    <p>
                        This tutorial is to give you an flavor of web development and link to resources to expand your
                        knowledge. It provides a brief overview so you cn start connecting to pieces to understand how a
                        web page is constructed.
                    </p>
                    <p>
                        Here are a few key tips to help you succeed:
                        <ul>
                            <li>Programming is difficult, you can't expect to pick it up in only a few hours. It will
                                require practice and time.
                            </li>
                            <li>Google is a programmers best friend. Learning how to Google effectively is a skill.
                                Checkout my tutorial on how to Google on the left.
                            </li>
                            <li>For frontend find simple website and try to remake them. Don't worry about interaction
                                or colors at the start, try to replicate the structure and move up from there.
                            </li>
                            <li>Having a project to motivate you work is key. Check out the project ideas below.</li>
                            <li>If you start with web development and aren't sure you like it try exploring Python. It
                                allows you to dive into the code faster without needing to learn as much syntax. I'll be
                                making a tutorial soon.
                            </li>
                        </ul>
                    </p>
                </Section>
                <Section link="ides" label="Interactive Developer Environment (IDEs)"
                         badge={<Badge variant="warning">Full</Badge>}>
                    <p>
                        IDEs are applications used for editing code. They improve over simple text editors by adding
                        shortcuts, template, or other features that make writing code easier. Finding the right IDE
                        requires trying a lot of different ones.
                    </p>
                    <p>
                        Here are a list of IDEs that I recommend. I personally use Visual Studio code because it works
                        well with Javascript and Python, my two main languages.
                    </p>

                    <List newPage={true}>
                        <ListItem link="https://code.visualstudio.com/">
                            Visual Studio Code - Great for Front and Backend Development. Good for beginners.
                        </ListItem>
                        <ListItem link="https://www.jetbrains.com/webstorm/">
                            WebStorm - Aimed more at backend development. $59/year
                        </ListItem>
                        <ListItem link="http://lighttable.com/">
                            Light Table - General purpose editor. Aimed at developers who like key commands. Very
                            minimal UI.
                        </ListItem>
                    </List>
                </Section>
                <Section link="basichtml" label="Basic HTML Elements" badge={<Badge
                    variant="primary">Front</Badge>}>
                    <p>
                        HTML is a language for displaying items in a certain order on screen. HTML has many different
                        components for displaying various items. HTML can be thought of as the skeleton of the web page.
                        It defines the layout and then CSS adds style and coloring. HTML consists of a hierarchy of
                        elements where each element has a set of children. The children are contained with in the parent
                        element. The children can either be text, or other elements.
                    </p>
                    <p>
                        Here are the elements I use the most. There are many more but they aren't used nearly as often.
                        <CardDeck noNumbers={true}>
                            <CodeSnip.Snip title={"<div></div>"} subtitle={"div tag"}>
                                Used for placing items vertically on a screen. A div tag takes up the entire screen
                                from left to right. Items are placed inside
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<span></span>"} subtitle={"span tag"}>
                                Used for placing items next to each other as opposed to on top of each other.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<a></a>"} subtitle={"Link Tag"}>
                                Used for linking to other pages.
                                <CodeSnip.Example>
                                    {`<a href="'http://otherpage.com"> link text </a>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>
                            <CodeSnip.Snip title={"<h1></h1>"} subtitle={"Header Tags"}>
                                Headers are defined with h1 down to h5 the larger the number the smaller the text.
                                On this page the text "Welcome to Intro Web Dev" uses the h1 tag.
                                <CodeSnip.Example>
                                    {`<h1> Main Page Title </h1>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<img/>"} subtitle={"Image Tag"}>
                                Displays images on the page. You can either link an image from the local folder or an
                                address from the internet.
                                <CodeSnip.Example>
                                    {`<img src="image path or url"/>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>
                            <CodeSnip.Snip title={"<body></body>"} subtitle={"Body Tag"}>
                                Labels the body section of the web page. This is where all the page content goes.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<head></head>"} subtitle={"Head Tag"}>
                                All imports and other page data is stored here or used to import other libraries into
                                the web page. The font this web page uses is Roboto. It is downloaded from Google every
                                time the page is loaded.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<p></p>"} subtitle={"Paragraph Tag"}>
                                A paragraph tag is used for adding space between paragraphs.
                                <CodeSnip.Example>
                                    {`<p > Paragraph Text Here </p>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                    </p>

                </Section>
                <Section link="basiccss" label="Basic CSS" badge={<Badge
                    variant="primary">Front</Badge>}>
                    <p>
                        CSS is used to decorate the page. Changing the font color, size, background color, and borders
                        are all done through CSS. To apply a CSS property to an element you use the following syntax for
                        in-line css: <br/>
                        <code>{`<div style="tagname: tagvalue" >text </div>`}</code> <br/>
                        However in-line should be avoided as it can become difficult to modify, maintain and use for
                        more than one element. The better way is be creating a new .css file and defining CSS classes. A
                        CSS Class is a set of properties that can be applied to an HTML object using the class option:
                        <br/>
                        <code> {`<div class="title">title text</div>`}</code>
                    </p>
                    <p>
                        Here are the most used CSS properties:
                    </p>
                    <CardDeck>
                        <CodeSnip.Snip title={"color"} subtitle={"Text Color"}>
                            Changes the text color. Web color is based on the RGB color palette. The colors are Red,
                            Green, and Blue respectively and referred to as color channels. Their values are always
                            between 0 and 255. The ratio of the three colors defines the final color. The simplest way
                            to choose a color is using a build in color like, red, white, black, gray, light gray and so
                            on. A complete list of built in colors can be seen <a target="_blank"
                                                                                  href="http://www.colors.commutercreative.com/grid/">here</a>.
                            Another way to specify colors is rgb(30, 40, 50) where each number corresponds to the
                            respective color channel. White in this format is rgb(255, 255, 255). Black is rgb(0, 0, 0).
                            <CodeSnip.Example>
                                {`<div style="color: rgb(100, 100, 200)"> Purple Text </div>`}

                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{color: "rgb(100, 100, 200)"}}>Purple Text</div>
                        </CodeSnip.Snip>
                    </CardDeck>
                    <CardDeck>
                        <CodeSnip.Snip title={"font-size"} subtitle={"Font Size"}>
                            Changes the text size. The most common unit to use is px for pixels. Normal text sizes are
                            between 12 for paragraphs of text to 40 for large titles.
                            <CodeSnip.Example>
                                {`<div style="font-size: 18px"> 18px text</div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{fontSize: "18px"}}>18px text</div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"background-color"} subtitle={"Element Background Color"}>
                            Sets the background color. In the following example the background is set to Dark Blue and
                            the text is set to white to remain readable.
                            <CodeSnip.Example>
                                {`<div style="background-color: darkblue; color: white"> </div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{backgroundColor: "darkblue", color: "white"}}>18px text</div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"display"} subtitle={"Display"}>
                            Sets the element display behavior. The default value is block. Block means the item will
                            take up the entire width like {`<p>`} or {`<div>`}. A commonly used alternative is flex if
                            you want the elements children
                            <CodeSnip.Example>
                                {`<div style="display: block"> </div>`}
                            </CodeSnip.Example>
                        </CodeSnip.Snip>
                    </CardDeck>
                    <CardDeck>
                        <CodeSnip.Snip title={"margin"} subtitle={"Margin around element"}>
                            Sets the space between the edge of the element and the surrounding elements. It is outside
                            of padding. Margin uses pixels or other units to define its size.
                            <CodeSnip.Example>
                                {`<span style="margin: 5px; "> text1 </span>`}
                            </CodeSnip.Example>
                            <b>Visual:</b>
                            <div style={{padding: "5px", backgroundColor: "orange", borderRadius: "8px"}}>
                                Margin
                                <div style={{
                                    borderRadius: "8px",
                                    margin: '5px',
                                    backgroundColor: 'green',
                                    padding: "5px",
                                    color: "white"
                                }}>
                                    Padding
                                    <div style={{
                                        padding: "5px",
                                        borderRadius: "8px",
                                        backgroundColor: "white",
                                        color: "black"
                                    }}>
                                        Content
                                    </div>
                                </div>
                            </div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"padding"} subtitle={"Padding content"}>
                            Sets the space between the edge of the content and the edge of the background. Look at the
                            visual to understand the difference between margin and padding. The background is included
                            in the padding, but not margin.
                            <CodeSnip.Example>
                                {`<span style="padding: 5px; "> text </span>`}
                            </CodeSnip.Example>
                            <b>Visual:</b>
                            <div style={{padding: "5px", backgroundColor: "orange", borderRadius: "8px"}}>
                                Margin
                                <div style={{
                                    borderRadius: "8px",
                                    margin: '5px',
                                    backgroundColor: 'green',
                                    padding: "5px",
                                    color: "white"
                                }}>
                                    Padding
                                    <div style={{
                                        padding: "5px",
                                        borderRadius: "8px",
                                        backgroundColor: "white",
                                        color: "black"
                                    }}>
                                        Content
                                    </div>
                                </div>
                            </div>
                        </CodeSnip.Snip>
                    </CardDeck>
                    <CardDeck>
                        <CodeSnip.Snip title={"display"} subtitle={"Display"}>
                            Sets the background color. In the following example the background is set to Dark Blue and
                            the text is set to white to remain readable.
                            <CodeSnip.Example>
                                {`<div style="background-color: darkblue; color: white"> </div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{backgroundColor: "darkblue", color: "white"}}>18px text</div>
                        </CodeSnip.Snip>
                    </CardDeck>
                </Section>
                <Section link={"basicjs"} label={"Basic Javascript"} badge={<Badge
                    variant="success">Back</Badge>}>
                    <p>
                        Javascript is the programming language that allows users to interact with a web page. When a
                        user clicks on a button the events that follow are programmed in Javascript.
                        Javascript has the same main components of other popular programming languages like C, Java, and
                        Python. The best way to improve at programming in general is practice. It is no different for
                        Javascript.
                    </p>
                    <p>
                        Below are important concepts to understand Javascript.
                    </p>
                    <SubSection link={"basicjsvariables"} label={"Variables"}>
                        Variables are how data is stored. You can define variables
                        using <code>let</code>, <code>var</code>, or <code>const</code>. <code>let</code> defines a
                        local variable only defined in the scope of the current block. <code>var</code> defines a
                        variable accessible within the entire function. <code>const</code> defines a variable that
                        cannot change and is usually denoted in an all upper case variable name.
                        <Code.Wrapper>
                            <Code.Title>
                                Example Variable Initialization (Creation):
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    let numberOfDogs = 10;
                                </Code.Line>
                                <Code.Line>
                                    var numberOfCats = 10;
                                </Code.Line>
                                <Code.Line>
                                    const NUMBER_OF_ANIMALS = 20;
                                </Code.Line>
                            </Code.Code>
                        </Code.Wrapper>
                    </SubSection>
                    <SubSection link={'basicjsfunctions'} label={"Functions"}>
                        <p>
                            Functions are used to perform specific tasks. A example function could be one that displays
                            "Hello World" to the user. Every function has input values, called parameters, and most have
                            output values.
                            Parameters are values given to the function so it can perform a calculation. Once the
                            function is complete it returns the calculated value. Functions are used on tasks repeated
                            often to reduce writing the same code more than once.
                        </p>

                        <p>
                            <Code.Wrapper>
                                <Code.Title>
                                    Defining a Function
                                </Code.Title>
                                <Code.Code>
                                    <Code.Line>
                                        function addOne(number) &#123;
                                    </Code.Line>
                                    <Code.Line>
                                        {`  return number + 1;`}
                                    </Code.Line>
                                    <Code.Line>
                                        &#125;
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    The function is named addOne. It takes a parameter number and returns the number
                                    plus 1.
                                    This function assumes the input value is a number.
                                </Code.Description>
                            </Code.Wrapper>
                        </p>
                        <p>
                            Running a function is referred to as Calling a function. If I said I called addOne it means
                            I am running the function with a specified variable.
                        </p>
                        <p>
                            <Code.Wrapper>
                                <Code.Title>
                                    Calling a Function
                                </Code.Title>
                                <Code.Code>
                                    <Code.Line>
                                        addOne(5)
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    This code calls function addOne with the parameter 5. When the function is run the
                                    parameter 5 is assigned to number. The function adds 1 to number then returns it.
                                </Code.Description>
                            </Code.Wrapper>
                        </p>
                    </SubSection>

                   <SubSection link={"basicjsloops"} label={"Loops"}>

                   </SubSection>
                </Section>
                <Section link="beginner" label="Beginner Projects" badge={<Badge variant={"warning"}>Full</Badge>}>

                </Section>
            </TableOfContents>
        </div>
    )
}
