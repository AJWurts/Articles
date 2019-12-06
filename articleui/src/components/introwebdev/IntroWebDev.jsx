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

import {Badge, Table, CardDeck} from 'react-bootstrap';

export default function IntroWebDev(props) {

    return (
        <div className='page-wrapper'>
            <h1>
                Welcome to Intro to Web Dev.
            </h1>
            <h4>
                A minimal guide to get started.
            </h4>
            <TableOfContents>
                <Section link="starting" label="Getting Started" badge={<><span><Badge
                    variant="primary">Front</Badge></span><span><Badge variant="success">Back</Badge></span></>}>
                    <p>
                        Web development can mean a lot of different things. It's important to have a clear learning
                        goal. For example if you are interested in user interface or front end design it's best to learn
                        HTML and CSS first than migrate to JS for interactive web pages. Or if you are interested in
                        creating interactive applications, or programming the site logic then backend may be a good
                        place to start. This
                        tutorial will cover three topics Front End Development, Backend Development, and Full Stack
                        development (both frontend and backend). Every section will be labeled either <Badge
                        variant="primary">Front</Badge>, or <Badge
                        variant="success">Back</Badge>. Based on what your goal
                        is you can choose to read the relevant sections.
                    </p>
                    <p>
                        This tutorial is to give you an flavor of web development and link to resources to expand your
                        knowledge. It provides a brief overview so you can start connecting the pieces to understand how
                        a web page is constructed.
                    </p>
                    <p>
                        Here are a few key tips to help you succeed:
                        <ul>
                            <li>Programming is difficult, you can't expect to pick it up in only a few hours. It will
                                require practice and time.
                            </li>
                            <li>Google is a programmers best friend. Learning how to Google effectively is a skill.
                                Checkout my tutorial on how to Google on the left. Coming soon...
                            </li>
                            <li>For frontend find simple website and try to remake them. Don't worry about interaction
                                or colors at the start, try to replicate the structure and move up from there.
                            </li>
                            <li>Having a project to motivate your work is key. Check out the project ideas.</li>
                            <li>If you start with web development and aren't sure you like it try exploring Python. It
                                allows you to dive into the code faster without needing to learn as much syntax. I'll be
                                making a tutorial soon.
                            </li>
                        </ul>
                    </p>
                </Section>
                <Section link="ides" label="Interactive Developer Environment (IDEs)"
                         badge={<><span><Badge
                             variant="primary">Front</Badge></span><span><Badge
                             variant="success">Back</Badge></span></>}>
                    <p>
                        IDEs are applications used for editing code. They improve over simple text editors by adding
                        shortcuts, templates, or other features that make writing code easier. Finding the right IDE
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
                        <ListItem link="https://atom.io/">
                            Atom -
                        </ListItem>
                    </List>
                </Section>
                <Section link={'startcoding'} label={"How to start coding"}
                         badge={<><span><Badge
                             variant="primary">Front</Badge></span><span><Badge
                             variant="success">Back</Badge></span></>}>
                    <p>
                        For frontend development download <a
                        href={"https://github.com/AJWurts/Articles/blob/master/articleui/src/components/introwebdev/index.html"}>this</a> template
                        file. Then you can open the file in any browser by double clicking it.
                    </p>
                    <p>
                        For backend development there are two main approaches. If you want to write scripts you can
                        install and use <a href={"https://nodejs.org/en/"}>Node</a> or you can embed scripts in an html
                        file. To print a variable or string inside an HTML file you can
                        use <code>console.log(variable)</code>. Hers is a s
                        I recommend embedding text in a browser to start, then move to Node if you want to do more
                        complex projects that don't require a browser.
                    </p>
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
                        All HTML elements can have attributes which change or add features to the element. For example
                        the button element can have a <code>onclick</code> attribute to determine how the page should
                        react when clicked.
                    </p>
                    <Code.Wrapper>
                        <Code.Title>
                            Button with Attribute
                        </Code.Title>
                        <Code.Code>
                            <Code.Line>
                                {`<button onclick="handleClick">Submit</button>`}
                            </Code.Line>
                        </Code.Code>
                        <Code.Description>
                            The button has an attribute named onclick. The value of onclick is a string handleClick
                            which links to a javascript function.
                        </Code.Description>
                    </Code.Wrapper>
                    <p>
                        Here are the elements I use the most. There are many more, but they aren't used nearly as often.
                        A complete list of elements is available at <a
                        href={"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"}>Mozilla MDN Web Docs</a>.
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
                            <CodeSnip.Snip title={"<h1></h1>"} subtitle={"Header "}>
                                Headers are defined with h1 down to h5 the larger the number the smaller the text.
                                On this page the text "Welcome to Intro Web Dev" uses the h1 tag.
                                <CodeSnip.Example>
                                    {`<h1> Main Page Title </h1>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<img/>"} subtitle={"Image "}>
                                Displays images on the page. You can either link an image from the local folder or an
                                address from the internet.
                                <CodeSnip.Example>
                                    {`<img src="image path or url"/>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>
                            <CodeSnip.Snip title={"<body></body>"} subtitle={"Body "}>
                                Labels the body section of the web page. This is where all the page content goes.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<head></head>"} subtitle={"Head "}>
                                All imports and other page data is stored here or used to import other libraries into
                                the web page. The font this web page uses is Roboto. It is downloaded from Google every
                                time the page is loaded.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<p></p>"} subtitle={"Paragraph "}>
                                A paragraph tag is used for adding space between paragraphs.
                                <CodeSnip.Example>
                                    {`<p > Paragraph Text Here </p>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>

                            <CodeSnip.Snip title={"<input></input>"} subtitle={"Input "}>
                                Adds an entry box that a user can type into.
                                <CodeSnip.Example>
                                    {`<input type="text"></input>`}
                                </CodeSnip.Example>
                                <CodeSnip.Result>
                                    <input id={'input-example'} type={'text'}/>
                                </CodeSnip.Result>
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<button></button>"} subtitle={"Button "}>
                                Adds a button to the screen that a user can click.
                                <CodeSnip.Example>
                                    {`<button onclick="handleClick">Button Example</button>`}
                                </CodeSnip.Example>
                                <CodeSnip.Result>
                                    <button onClick={() => alert(document.getElementById("input-example").value)}>Button
                                        Example
                                    </button>
                                </CodeSnip.Result>
                            </CodeSnip.Snip>


                        </CardDeck>
                        <CardDeck>

                            <CodeSnip.Snip title={"<ul></ul>"} subtitle={"Un-ordered List "}>
                                A list with dots infront.
                                <CodeSnip.Example>
                                    {`<ul>...</ul>`}
                                </CodeSnip.Example>
                                <CodeSnip.Result>
                                    <ul>
                                        <li>Hi</li>
                                    </ul>
                                </CodeSnip.Result>
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<li></li>"} subtitle={"List Item "}>
                                Add an item to the list. Add text in the middle. These elements need to be placed within <code>{`<ol></ol>`}</code> or <code>{`<ul></ul>`}</code>.
                                <CodeSnip.Example>
                                    <Code.Line>
                                        {`<ul>`}
                                    </Code.Line>
                                    <Code.Line tabs={1}>
                                        &emsp;&emsp;{`<li> Item 1 </li>`}
                                    </Code.Line>
                                    <Code.Line>
                                        {`</ul>`}
                                    </Code.Line>
                                </CodeSnip.Example>
                                <CodeSnip.Result>
                                    <ul>
                                        <li>Item 1</li>
                                    </ul>
                                </CodeSnip.Result>
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<ol></ol>"} subtitle={"Ordered List"}>
                                Adds a button to the screen that a user can click.
                                <CodeSnip.Example>
                                    {`<ol>...</ol>`}
                                </CodeSnip.Example>
                                <CodeSnip.Result>
                                    <ol>
                                        <li>Item 1</li>
                                    </ol>
                                </CodeSnip.Result>
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
                        <br/>
                        An attached file styles.css will have the following format for the title class:
                        <br/>
                        <Code.Wrapper>
                            <Code.Code>
                                <Code.Line>.title {`{`}</Code.Line>
                                <Code.Line tabs={1}> color: red;</Code.Line>
                                <Code.Line tabs={1}> background-color: black; </Code.Line>
                                <Code.Line>}</Code.Line>
                            </Code.Code>
                        </Code.Wrapper>
                    </p>
                    <p>
                        For a list of all CSS properties goto <a
                        href={"https://www.w3schools.com/cssref/"}>w3schools.com</a>. Here are the most used CSS
                        properties:
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
                        using <code>let</code>, <code>var</code>, or <code>const</code>. Javascript is a duck
                        typed language which means you don't specify the variable type in your code. It looks at the
                        data and determines what type it is. Two forward slashes <code>//</code> are used to start a
                        comment, or code that is not run.
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
                            <Code.Description>
                                <code>let</code> defines a local variable only defined in the scope of the current
                                block. <code>var</code> defines
                                a variable accessible within the entire function. <code>const</code> defines a variable
                                that cannot change and is usually denoted in an all upper case variable name.
                            </Code.Description>
                        </Code.Wrapper>
                        <Code.Wrapper>
                            <Code.Title>
                                Variable Types
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    let name = "Ben"; // A <span
                                    style={{color: 'rgb(40, 116, 166)'}}>string</span> represents a collection of
                                    characters in this case:
                                    Ben
                                </Code.Line>
                                <Code.Line>
                                    let monthInYear = {(new Date()).getMonth() + 1}; // An <span
                                    style={{color: 'rgb(40, 116, 166)'}}>integer</span> represents a number
                                    without any decimal places
                                </Code.Line>
                                <Code.Line>
                                    let pi = 3.141592654; // A <span
                                    style={{color: 'rgb(40, 116, 166)'}}>float</span> represents a number with decimal
                                    places.
                                </Code.Line>
                                <Code.Line>
                                    const isItSunday = {(new Date()).getDay() === 0 ? "true" : "false"}; //A <span
                                    style={{color: 'rgb(40, 116, 166)'}}>boolean</span> can
                                    only be true or false
                                </Code.Line>
                                <Code.Line>
                                    let car = {`{`} // An <span
                                    style={{color: 'rgb(40, 116, 166)'}}>object</span> representing a car. The data can
                                    be accessed using
                                    car.model.
                                </Code.Line>
                                <Code.Line>
                                    {`    `}model: "Rav4",
                                </Code.Line>
                                <Code.Line>
                                    {`    `}miles: 12040
                                </Code.Line>
                                <Code.Line>
                                    }
                                </Code.Line>
                            </Code.Code>
                            <Code.Description>
                                These are some of the main types of variables.
                            </Code.Description>
                        </Code.Wrapper>
                    </SubSection>
                    <SubSection link={'basicjsfunctions'} label={"Functions"}>
                        <p>
                            Functions are used to perform specific tasks. A example function could be one that displays
                            "Hello World" to the user. Every function has input values, called parameters, and most have
                            output values.
                        </p>
                        <p>
                            Parameters are values given to the function so it can perform a calculation. Once the
                            function is complete it returns the calculated value. Functions are used on tasks repeated
                            often to reduce writing the same code more than once. Functions can have multiple
                            parameters.
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
                                        let numberOfCats = 10;
                                    </Code.Line>
                                    <Code.Line>
                                        numberOfCats = addACat(numberOfCats);
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    This code calls the function addACat with the parameter numberOfCats. When the
                                    function is run the number parameter is assigned the value of numberOfCats. The
                                    function adds 1 to number then returns it. numberOfCats is then set to the return
                                    value of 11.
                                </Code.Description>
                            </Code.Wrapper>
                        </p>

                    </SubSection>

                    <SubSection link={"basicjsloops"} label={"Loops"}>
                        <p>Loops are sections of code that are repeated. If you had a grocery store list and wanted to
                            check whether milk was on the list, a loop could do that. There are two types of loops, for
                            loops, and while loops. For loops are generally used for iterating through lists. While
                            loops are used when the finish condition is not known at the start.
                        </p>
                        <Code.Wrapper>
                            <Code.Title>
                                For Loop
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    let array1 = [0,1,2,4,5,6];
                                </Code.Line>
                                <Code.Line>
                                    let sum = 0;
                                </Code.Line>
                                <Code.Line>
                                    for (<span style={{color: "#E67E22"}}>let i = 0</span>; <span
                                    style={{color: '#0E6251'}}>i {`<`} array1.length</span>;<span
                                    style={{color: '#2874A6'}}> i++</span>) {`{`}
                                </Code.Line>
                                {`    `}sum = sum + <span style={{color: '#922B21'}}>array1[i]</span>
                                <Code.Line>
                                    {'}'}
                                </Code.Line>

                            </Code.Code>
                            <Code.Description>
                                The above code is used find the total of the numbers in array1. A for loop is
                                initialized with 3 parts: creating an index variable <code style={{color: "#E67E22"}}>let
                                i = 0</code>, setting the finish point <code
                                style={{color: '#0E6251'}}>i {`<`} array1.length</code>, and incrementing the index
                                after each repeat <code
                                style={{color: '#2874A6'}}>i++</code>. Inside the for loop array1 is being accessed at
                                index i: <code style={{color: '#922B21'}}>array1[i]</code>. The i surrounded by brackets
                                is used to access the array.
                            </Code.Description>
                        </Code.Wrapper>
                    </SubSection>
                    <SubSection link={"basicjs"} label={"Loops"}>
                        <p>Loops are sections of code that are repeated. If you had a grocery store list and wanted to
                            check whether milk was on the list, a loop could do that. There are two types of loops, for
                            loops, and while loops. For loops are generally used for iterating through lists. While
                            loops are used when the finish condition is not known at the start.
                        </p>
                        <Code.Wrapper>
                            <Code.Title>
                                For Loop
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    let array1 = [0,1,2,4,5,6];
                                </Code.Line>
                                <Code.Line>
                                    let sum = 0;
                                </Code.Line>
                                <Code.Line>
                                    for (<span style={{color: "#E67E22"}}>let i = 0</span>; <span
                                    style={{color: '#0E6251'}}>i {`<`} array1.length</span>;<span
                                    style={{color: '#2874A6'}}> i++</span>) {`{`}
                                </Code.Line>
                                {`    `}sum = sum + <span style={{color: '#922B21'}}>array1[i]</span>
                                <Code.Line>
                                    {'}'}
                                </Code.Line>
                            </Code.Code>
                            <Code.Description>
                                The above code is used find the total of the numbers in array1. A for loop is
                                initialized with 3 parts: creating an index variable <code style={{color: "#E67E22"}}>let
                                i = 0</code>, setting the finish point <code
                                style={{color: '#0E6251'}}>i {`<`} array1.length</code>, and incrementing the index
                                after each repeat <code
                                style={{color: '#2874A6'}}>i++</code>. Inside the for loop array1 is being accessed at
                                index i: <code style={{color: '#922B21'}}>array1[i]</code>. The i surrounded by brackets
                                is used to access the array.
                            </Code.Description>
                        </Code.Wrapper>
                    </SubSection>

                </Section>
                <Section link={"pagemanip"} label={"Changing a web page with code"}
                         badge={<Badge variant={'success'}>Full</Badge>}>
                    <p>
                        Now that you have a brief overview of javascript, let's go over how to use code in a web
                        page.
                        Scripts can be embedded in web pages using the
                        HTML <code>{`<script></script>`}</code> element. Below is an example of how you could
                        process user input using an input box and a button.
                    </p>
                    <SubSection link={"pagemanip-click"} title={"HTML Part"}>
                        <p>
                            In order to retrieve user input you need to create an input component using HTML, and a
                            button to submit.
                        </p>
                    </SubSection>
                    <Code.Wrapper>
                        <Code.Title>
                            HTML Code
                        </Code.Title>
                        <Code.Code>
                            <Code.Line>
                                {`<html>`}
                            </Code.Line>
                            <Code.Line>
                                {`<body>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<input id="text-input"/>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<button onclick="handleClick">Submit Form</button>`}
                            </Code.Line>
                            <Code.Line>
                                {`</body>`}
                            </Code.Line>
                            <Code.Line>
                                {'</html>'}
                            </Code.Line>
                        </Code.Code>
                        <Code.Description>
                            A button was created that links to the handleClick function. We will create that next. The
                            input element was created with an id attribute. This will allow us to identify it in the
                            handleClick function.
                        </Code.Description>
                    </Code.Wrapper>
                    <Code.Wrapper>
                        <Code.Title>
                            HTML Code with Script Element
                        </Code.Title>
                        <Code.Code>
                            <Code.Line>
                                {`<html>`}
                            </Code.Line>
                            <Code.Line>
                                {`<head>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<script>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                function handleClick(event) {`{`}
                            </Code.Line>
                            <Code.Line tabs={2}>
                                let inputElement = document.findElementById('text-input')
                            </Code.Line>
                            <Code.Line tabs={2}>
                                let text = inputElement.value;
                            </Code.Line>
                            <Code.Line tabs={2}>
                                alert(text);
                            </Code.Line>
                            <Code.Line tabs={1}>
                                }
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<script>`}
                            </Code.Line>
                            <Code.Line>
                                {`</head>`}
                            </Code.Line>
                            <Code.Line>
                                {`<body>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<input id="text-input"/>`}
                            </Code.Line>
                            <Code.Line tabs={1}>
                                {`<button onclick="handleClick">Submit</button>`}
                            </Code.Line>
                            <Code.Line>
                                {`</body>`}
                            </Code.Line>
                            <Code.Line>
                                {'</html>'}
                            </Code.Line>

                        </Code.Code>
                        <Code.Description>
                            The handleClick function was added to process the button click. The first line of the
                            function accesses the web page, also called document.
                            It looks for an element with the id 'text-input'. It finds the input we defined inside the
                            body. It then retrieves the user input text stored in value.
                            The final line creates a popup on your screen with the user input.
                        </Code.Description>
                        <Code.Result>
                            <input id={"text-input-2"}/>
                            <button onClick={() => alert(document.getElementById("text-input-2").value)}>Submit</button>
                        </Code.Result>
                    </Code.Wrapper>

                </Section>
                <Section link="projects" label="Projects" badge={<span><Badge variant={"primary"}>Front</Badge><Badge
                    variant={"success"}>Back</Badge></span>}>
                    These projects are just a recommendation. Try to find a project you're passionate about and pursue
                    that.
                    <Table>
                        <thead>
                        <th>
                            Project Name
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Difficulty
                        </th>
                        <th>
                            Estimated Time
                        </th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                Calendar
                            </td>
                            <td>
                                <Badge variant={"primary"}>Front</Badge>
                            </td>
                            <td>
                                Create a calendar that shows the days of the month for January 2016.
                            </td>
                            <td>
                                Easy
                            </td>
                            <td>
                                30min-3hrs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Example Portfolio
                            </td>
                            <td>
                                <Badge variant={"primary"}>Front</Badge>
                            </td>
                            <td>
                                Create a website showing off the website you have made or want to make.
                            </td>
                            <td>
                                Easy
                            </td>
                            <td>
                                1-5hrs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Replicate Webpages
                            </td>
                            <td>
                                <Badge variant={"primary"}>Front</Badge>
                            </td>
                            <td>
                                Replicate a web page. You can choose to copy interactions.
                            </td>
                            <td>
                                Easy to Hard
                            </td>
                            <td>
                                1-5hrs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Calculator
                            </td>
                            <td>
                                <Badge variant={"warning"}>Full</Badge>
                            </td>
                            <td>
                                Create a calculator that has two inputs and lets the user decide what calculation to
                                apply.
                            </td>
                            <td>
                                Medium
                            </td>
                            <td>
                                1-3hrs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Random Item Selector
                            </td>
                            <td>
                                <Badge variant={"warning"}>Full</Badge>
                            </td>
                            <td>
                                Let the user enter a list of items and then randomly select one. This could be used for
                                deciding what restaurant to go to.
                            </td>
                            <td>
                                Medium
                            </td>
                            <td>
                                1-3hrs
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <ul>

                    </ul>
                </Section>
            </TableOfContents>
        </div>
)
}