import React, {useState, useEffect} from 'react';
import {
    TableOfContents,
    Section,
    List,
    ListItem,
    CodeSnip,
    SubSection,
    Code,
    C
} from '../compstore';

import {Badge, Table, CardDeck} from 'react-bootstrap';



export default function IntroWebDev(props) {


    return (
        <div className='page-wrapper' style={{maxWidth: Math.min(props.width, 1000)}}>
            <h1>
                Welcome to Intro to Web Dev.
            </h1>
            <h4>
                A minimal guide to get started.
            </h4>
            <p>
                If you have any questions, comments, or think there is an error please email me at
                <b> alexwurtsfeedback@gmail.com</b>.
            </p>
            <TableOfContents>
                <Section link="starting" label="Getting Started" badge={<><span><Badge
                    variant="primary">Front</Badge></span><span><Badge variant="success">Back</Badge></span></>}>
                    <p>
                        Web development can mean a lot of different things. It's important to have a clear learning
                        goal. If you are interested in user interfaces or front end design it's best to
                        learn
                        HTML and CSS first than move to JS for interactive web pages. If you are interested in
                        creating interactive applications, or programming the site logic then backend is a good
                        place to start. This
                        tutorial will cover three topics Front End Development, Backend Development, and Full Stack
                        development (both frontend and backend). Every section will be labeled either <Badge
                        variant="primary">Front</Badge>, <Badge
                        variant="success">Back</Badge>, or <Badge
                        variant="warning">Back</Badge> which requires both. Based on your goal
                        you can choose to read the relevant sections.
                    </p>
                    <p>
                        This tutorial is to give you an flavor of web development and link to resources to expand your
                        knowledge. It provides a brief overview so you can start connecting the pieces to understand how
                        a web page is constructed.
                    </p>
                    <p>
                        Here are a few key tips to help you succeed:
                        </p>
                        <ul>
                        <li>
                            Trial and error is the best way to learn. If you aren't sure how a certain function or element works. try writing code that tests multiple ways of using it, and see what works. Using the browser console can allow for rapid testing. I'll tell you how below.
                        </li>
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
                </Section>
                <Section link={"resources"} label={"Learning Resources"} badge={<><span><Badge
                    variant="primary">Front</Badge></span><span><Badge variant="success">Back</Badge></span></>}>
                    <p>
                        There are a lot of good resources for learning, but some are better than others. Here are my
                        personal favorites:
                        </p>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer"  href={"https://developer.mozilla.org/en-US/"}>Mozilla Web Docs</a> - Long but
                                thorough tutorials for CSS and HTML
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"  href={"https://www.w3schools.com/"}>w3schools</a> - Good for reference, but I
                                wouldn't recommend the tutorials. They are repetitive and too easy to learn anything.
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"  href={"https://stackoverflow.com/"}>Stackoverflow</a> - Has an answer to every
                                question, if you know how to word your google search.
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"  href={"https://javascript.info/"}>Javascript.Info</a> - Very comprehensive tutorial
                                on JS. Can be overwhelming at the start.
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"  href={"https://www.amazon.com/dp/1118907442/ref=cm_sw_em_r_mt_dp_U_tsW6DbD71567R"}>HTML,
                                CSS, JS, and JQuery</a> - If you are willing to spend a few bucks these books are a
                                great
                                reference. I have them sitting on my desk.
                            </li>
                        </ul>
                </Section>
                <Section link="ides" label="Integrated Development Environment (IDEs)"
                         badge={<><span><Badge
                             variant="primary">Front</Badge></span><span><Badge
                             variant="success">Back</Badge></span></>}>
                    <p>
                        IDEs are applications used for editing code. They improve over simple text editors by adding
                        shortcuts, templates, or other features that make writing code faster and easier. Finding the right IDE
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
                            WebStorm - Aimed more at backend development. $59/year. If you are a college student you can get all Jetbrains IDEs for free.
                        </ListItem>
                        <ListItem link="https://atom.io/">
                            Atom - Light weight but powerful.
                        </ListItem>
                    </List>
                </Section>
                <Section link={'startcoding'} label={"How to start coding"}
                         badge={<><span><Badge
                             variant="primary">Front</Badge></span><span><Badge
                             variant="success">Back</Badge></span></>}>
                    <p>
                        For frontend development download <a target="_blank" rel="noopener noreferrer" download
                        href={"/files/introfronttemplate.html"}>this</a> template
                        file. Place it in a folder and open the folder with one of the IDEs. To run the file open it in any browser by double clicking it.
                    </p>
                    <p>
                        For backend development there are two main approaches. If you want to write scripts you can
                        install and use <a target="_blank" rel="noopener noreferrer"  href={"https://nodejs.org/en/"}>Node</a> or you can embed scripts in an html file. To edit place the file in a folder and open the folder with one of the IDEs.
                        </p>
                        <p>
                        To print a variable or string inside an HTML file you can
                        use <code>console.log(variable)</code>. To view the output of <code>console.log</code> you need to open the browser console. On most browsers you can right click directly on the page then click <i>inspect</i>, or <i>inspect element</i>. A window should popup. Click on <i>console</i> and you can now write Javascript code and see the result immediately. Any <code>console.log</code> commands you write will output here.
                        </p>  
                        <p>
                        Here is a <a target="_blank" download href="/files/introbacktemplate.html">template file</a> to start
                        with. Open it in your favorite browser.
                        I recommend writing scripts for your browser to start, then move to Node if you want to do more
                        complex projects that do not require a browser.
                    </p>
                </Section>
                <Section link="basichtml" label="Basic HTML Elements" badge={<Badge
                    variant="primary">Front</Badge>}>
                    <p>
                        HTML is a language for displaying items in a certain configuration on screen. HTML has many
                        different
                        components for displaying items. HTML can be thought of as the skeleton of the web page.
                        It defines the layout and then CSS adds style and coloring. HTML consists of a hierarchy of
                        elements where each element has a set of children. The children are contained within the parent
                        element. The children can either be text, or other elements.
                    </p>
                    <p>
                        All HTML elements are started with <C>{`<element>`}</C>, where element is the name of the element. They are closed with <C>{`</element>`}</C>. Everything between those items are the element's children. 
                    </p>
                    <p>
                        All HTML elements can have attributes which change or add features to the element. For example
                        the button element can have an <code>onclick</code> attribute to determine how the page should
                        react when clicked.
                    </p>
                    <Code.Wrapper>
                        <Code.Title>
                            Button with Attribute
                        </Code.Title>
                        <Code.Code>
                            <Code.Line>
                                {`<button`} <span style={{color: "blue"}}>onclick="handleClick"</span>{`>Submit</button>`}
                            </Code.Line>
                        </Code.Code>
                        <Code.Description>
                            The button has an attribute named onclick. The value of onclick is a string handleClick
                            which links to a javascript function.
                        </Code.Description>
                    </Code.Wrapper>
                    <p>
                        Here are the elements I use the most. There are many more, but they aren't used nearly as often.
                        A complete list of elements is available at <a target="_blank" rel="noopener noreferrer" 
                        href={"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"}>Mozilla MDN Web Docs</a>.
                        </p>
                        <CardDeck >
                            <CodeSnip.Snip title={"<div></div>"} subtitle={"Div"}>
                                Used to define a section or division of the screen. A div tag takes up the entire screen horizontally
                                from left to right. Items are placed inside.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<span></span>"} subtitle={"Span"}>
                                Used for placing items next to each other as opposed to on top of each other. Spans is
                                an inline element which means it doesn't create a new line.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<a></a>"} subtitle={"Anchor (Link)"}>
                                Used for linking to other pages. Inline element.
                                <CodeSnip.Example>
                                    {`<a href="http://otherpage.com"> link text </a>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>
                            <CodeSnip.Snip title={"<h1></h1>"} subtitle={"Header "}>
                                Headers are defined with h1 down to h5. The higher the number the smaller the text. Read that again, it's probably reverse to what you thought.
                                On this page the text "Welcome to Intro to Web Dev" uses the h1 tag.
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
                                the web page. The font this web page uses is Roboto. It is imported in the head.
                            </CodeSnip.Snip>
                            <CodeSnip.Snip title={"<p></p>"} subtitle={"Paragraph "}>
                                A paragraph tag is used to define a section of text.
                                It automatically adds space above and below the paragraph.
                                <CodeSnip.Example>
                                    {`<p > Paragraph Text Here </p>`}
                                </CodeSnip.Example>
                            </CodeSnip.Snip>
                        </CardDeck>
                        <CardDeck>

                            <CodeSnip.Snip title={"<input></input>"} subtitle={"Input "}>
                                Creates an entry box that a user can type into. Input boxes can be many different types. The one below is a text input.
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
                                A list with dots.
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
                                An item in a list. This elements need to be placed
                                within <code>{`<ol></ol>`}</code> or <code>{`<ul></ul>`}</code>.
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
                </Section>
                <Section link="basiccss" label="Basic CSS" badge={<Badge
                    variant="primary">Front</Badge>}>
                    <p>
                        CSS is used to decorate the page. Changing the font color, size, background color, and borders
                        are all done through CSS. To apply a CSS property to an element you use the following syntax for
                        in-line css:
                    </p>
                    <p>
                        <code>{`<div style="tagname: tagvalue" >text </div>`}</code>
                    </p>
                    <p>
                        However in-line should be avoided as it can become difficult to modify, maintain and use for
                        more than one element. The better way is be creating a new .css file and defining CSS classes. A
                        CSS Class is a set of properties that can be applied to an HTML object using the class option:
                    </p>
                    <p>
                        <code> {`<div class="title">title text</div>`}</code>
                    </p>

                    <p>
                        An attached styles.css file will have the following format for the title class:
                    </p>
                        <Code.Wrapper>
                            <Code.Code>
                                <Code.Line>.title {`{`}</Code.Line>
                                <Code.Line tabs={1}> color: red;</Code.Line>
                                <Code.Line tabs={1}> background-color: black; </Code.Line>
                                <Code.Line>}</Code.Line>
                                <Code.Line>p {`{`} // Used to stylize all of one HTML element, in this case
                                    all <code>p</code>.</Code.Line>
                                <Code.Line tabs={1}> color: red;</Code.Line>
                                <Code.Line tabs={1}> background-color: black; </Code.Line>
                                <Code.Line>}</Code.Line>
                            </Code.Code>
                        </Code.Wrapper>
                    <p>
                        For a list of all CSS properties go to <a target="_blank" rel="noopener noreferrer" 
                        href={"https://www.w3schools.com/cssref/"}>w3schools.com</a>. Here are the most used CSS
                        properties:
                    </p>
                    <CardDeck>
                        <CodeSnip.Snip title={"color"} subtitle={"Text Color"}>
                            Changes the text color. Web color is based on the RGB color encoding. The colors are Red,
                            Green, and Blue respectively and referred to as color channels. Their values are always
                            between 0 and 255. The ratio of the three colors defines the final color. The simplest way
                            to choose a color is using built in colors like, red, white, black, gray, teal, and so
                            on. A complete list of built in colors is available <a target="_blank" rel="noopener noreferrer" 
                                                                                   href="http://www.colors.commutercreative.com/grid/">here</a>.
                            Another way to specify colors is <code>rgb(30, 40, 50)</code> where each number corresponds
                            to the
                            respective color channel. White in this format is <code>rgb(255, 255, 255)</code>. Black
                            is <code>rgb(0, 0, 0)</code>.
                            <CodeSnip.Example>
                                {`<div style="color: rgb(100, 100, 200)"> Purple Text </div>`}

                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{color: "rgb(100, 100, 200)"}}>Purple Text</div>
                        </CodeSnip.Snip>
                    </CardDeck>

                    <CardDeck>
                        <CodeSnip.Snip title={"margin"} subtitle={"Margin around element"}>
                            Sets the space between the edge of the element and the surrounding elements. It is outside
                            of padding. Margin uses pixels or other units to define its size. If you want to center an
                            item you can set margin to <code>auto</code>.
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
                        <CodeSnip.Snip title={"font-size"} subtitle={"Font Size"}>
                            Changes the text size. The most common unit to use is px for pixels. Normal text sizes are
                            between 12 for paragraphs to 40 for large titles.
                            <CodeSnip.Example>
                                {`<div style="font-size: 18px"> 18px text</div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{fontSize: "18px"}}>18px text</div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"background-color"} subtitle={"Element Background Color"}>
                            Sets the background color. In the following example the background is set to Dark Blue and
                            the text is set to white to stay readable.
                            <CodeSnip.Example>
                                {`<div style="background-color: darkblue; color: white"> </div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{backgroundColor: "darkblue", color: "white"}}>white text</div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"display"} subtitle={"Display"}>
                            Sets the element display behavior. The default value is block. Block means the item will
                            take up the entire width like {`<p>`} or {`<div>`}. A commonly used alternative
                            is <code>flex</code>. It forces the children to all be on the same line, space permitting.
                            <CodeSnip.Example>
                                <Code.Code>
                                    <Code.Line>
                                        {`<div style="display: flex">`}
                                    </Code.Line>
                                    <Code.Line tabs={1}>
                                        {`<div>div1</div> `}
                                    </Code.Line>
                                    <Code.Line tabs={1}>
                                        {`<div>div2</div>`}
                                    </Code.Line>
                                    <Code.Line>
                                        {`</div>`}
                                    </Code.Line>
                                </Code.Code>
                            </CodeSnip.Example>
                            <CodeSnip.Result>
                                <div style={{display: "inline-flex"}}> div1</div>
                                <div style={{display: "inline-flex"}}> div2</div>
                            </CodeSnip.Result>
                        </CodeSnip.Snip>
                    </CardDeck>
                    <CardDeck>
                        <CodeSnip.Snip title={"width and height"} subtitle={"Width and Height"}>
                            Sets the width or height of the element respectively. All sizes in CSS can be defined with
                            multiple units. Here are the most common:
                            <ul>
                                <li>px (pixels) - pixels are the same for every page</li>
                                <li>% (percent) - Relative to the parent component</li>
                                <li>vw - Equal to 1% of the width of the window</li>
                                <li>vh - Equal to 1% of the height of the window</li>
                            </ul>
                            All units can be viewed on <a target="_blank" rel="noopener noreferrer" 
                            href="https://www.w3schools.com/cssref/css_units.asp">w3schools.com</a>
                            <CodeSnip.Example>
                                {`<div style="width: 50%; height=20px"> Text <div>`}
                            </CodeSnip.Example>
                            <Code.Result>
                                <div style={{width: "50%", height: "50px", backgroundColor: "darkgray"}}>
                                    Text
                                </div>
                            </Code.Result>
                            Background color added to visualize <code>div</code> true size.
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"border"} subtitle={"Border"}>
                            Sets the thickness, line type and color of the component border. The border is displayed
                            outside of padding but inside margin.
                            A trick to making modern looking components is using <code>border-radius</code>. It adds the
                            rounded look to a component. Your component does
                            not need to have a defined border to use <code>border-radius</code>.
                            <CodeSnip.Example>
                                {`<div style="border: 1px solid black; border-radius: 8px"> </div>`}
                            </CodeSnip.Example>

                            <CodeSnip.Result>
                                <div style={{border: "5px solid black", borderRadius: "8px"}}> Border Example</div>
                            </CodeSnip.Result>
                        </CodeSnip.Snip>
                    </CardDeck>
                    <CardDeck>
                        <CodeSnip.Snip title={"text-align"} subtitle={"Horizontal Text Alignment"}>
                            Used to align text horizontally. It can be set
                            to <code>start</code>, <code>center</code> or <code>end</code>.

                            <CodeSnip.Example>
                                {`<div style="text-align: center"> center text</div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{textAlign: "center"}}>center text</div>
                        </CodeSnip.Snip>
                        <CodeSnip.Snip title={"vertical-align"} subtitle={"Element Background Color"}>
                            Aligns content vertically. Mainly used for items in tables. NOTE: It only applies to inline,
                            inline-block and table-cell
                            elements. It will not work on <code>div></code> but it will work on text.
                            <CodeSnip.Example>
                                {`<div style="display: inline-flex; vertical-align: top"> text</div>`}
                            </CodeSnip.Example>
                            <b>Result:</b>
                            <div style={{verticalAlign: "bottom", display: 'inline-flex', height: "30px"}}>white text
                            </div>
                        </CodeSnip.Snip>
                    </CardDeck>
                </Section>
                <Section link={"basicjs"} label={"Basic Javascript"} badge={<Badge
                    variant="success">Back</Badge>}>
                    <p>
                        Javascript is the language that allows users to interact with a web page. When a
                        user clicks on a button the events that follow are programmed in Javascript.
                        Javascript has the same main features of other popular programming languages like C, Java, and
                        Python. The best way to improve at programming in general is practice. It is no different for
                        Javascript.
                    </p>

                    <SubSection link={"basicjsvariables"} label={"Variables"}>
                        Variables are how data is stored. You can define variables
                        using <code>let</code>, <code>var</code>, or <code>const</code>. Javascript is a duck
                        typed language which means you don't specify the variable type in your code. It looks at the
                        data and determines what type it is. Two forward slashes <code>//</code> are used to start a
                        comment, or code that is not run. Every line of JS (javascript) code is followed by a
                        semi-colon.
                        <Code.Wrapper>
                            <Code.Title>
                                Example Variable Initialization (Creation).
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
                                Each example has an <C>=</C> operator. A single <C>=</C> is called the assignment operator. It allows you to assign the value on the right to the variable on the left. <code>let</code> defines a local variable only defined in the scope of the current
                                block. <code>var</code> defines
                                a variable accessible within the entire function. <code>const</code> defines a variable
                                that cannot change and is denoted in all upper case.
                            </Code.Description>
                        </Code.Wrapper>
                        <Code.Wrapper>
                            <Code.Title>
                                Variable Types
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    let name = "Ben"; // A <span
                                    style={{color: 'rgb(40, 116, 166)'}}>string</span> represents a sequence of
                                    characters. Always surrounded by <C>""</C>, <C>''</C>, or <C>``</C>.
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
                                    car.model
                                </Code.Line>
                                <Code.Line>
                                    {`    `}model: "Rav4",
                                </Code.Line>
                                <Code.Line>
                                    {`    `}miles: 12040
                                </Code.Line>
                                <Code.Line>
                                    } // Values can be set in an object using brackets <code>car['model'] =
                                    "corolla";</code>
                                </Code.Line>
                                <Code.Line>
                                    let array1 = [0,1,2,3,4,5]; // An <span
                                    style={{color: 'rgb(40, 116, 166)'}}>array</span> is used to hold more than one
                                    value of any type.
                                </Code.Line>
                            </Code.Code>
                            <Code.Description>
                                These are some of the main types of variables. A more in-depth overview is available on <a target="_blank" rel="noopener noreferrer"  href="https://www.w3schools.com/js/js_datatypes.asp">w3schools</a>.
                            </Code.Description>
                        </Code.Wrapper>
                    </SubSection>
                    <SubSection link={"basicjs-operators"} label={"Operators"}>
                    <p>
                    Operators are used to combine and maniuplate variables. Here are the three main types.
                    </p>
                     Math operators behave like the standard math operations.
                       <ul>
                                    
                           <li><C>+</C> - Addition. <C>{`5 + 5`}</C> returns <C>10</C></li>
                           <li><C>-</C> - Subtraction. <C>{`5 - 3`}</C> returns <C>2</C></li>
                           <li><C>/</C> - Division. <C>{`10 / 5`}</C> returns <C>2</C></li>
                           <li><C>*</C> - Multiplication. <C>{`10 * 2.5`}</C> returns <C>25</C>. All operators work for integers and floats.</li>
                           <li><C>%</C> - Modulus. The remainder operator. Takes the remainder after division. <C>{`12 % 5`}</C> returns <C>2</C> because 12 / 5 = 10 remainder <C>2</C>.</li>
                           <li><C>++</C> - Increment. Increments the variable by one and saves it. <C>{`i++`}</C> returns nothing, but now <C>i</C> is one greater.</li>
                           <li><C>--</C> - Decrement. Decrements the variable by one and saves it. <C>{`i--`}</C> returns nothing, but now <C>i</C> is one less.</li>
                       </ul>
                       Comparison operators compare two variables and return a boolean. 
                       <ul>
                           <li><C>{`<`}</C> - less than. <C>{`3 < 5`}</C> returns <C>true</C></li>
                           <li><C>{`>`}</C> - greater than. <C>{`7 > 5`}</C> returns <C>true</C>. <C>{`5 > 5`}</C> returns <C>false</C></li>
                           <li><C>{`>=`}</C> - greater than or equal. <C>{`5 >= 5`}</C> returns <C>true</C></li>
                           <li><C>{`<=`}</C> - less than or equal. <C>{`5 <= 6`}</C> returns <C>true</C></li>
                           <li><C>{`===`}</C> - equals. <C>{`3 === 5`}</C> returns <C>false</C>. There is a <C>==</C> operator, but you should primarily use <C>===</C>. This page <a target="_blank" rel="noopener noreferrer" href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a"> explains the difference well.</a></li>
                          
                       </ul>
                       Boolean Operators combine one or two booleans and return a boolean. 
                       <ul>
                           <li><C>{`!`}</C> - not. Changes a boolean to the opposite state. <C>{`!true`}</C> returns <C>false</C></li>
                           <li><C>{`&&`}</C> - and. if both are true returns true. <C>{`true && true`}</C> returns <C>true</C></li>
                           <li><C>{`||`}</C> - or. if either are true returns true. <C>{`true || false`}</C> returns <C>true</C></li>
                       </ul>
                       
                    </SubSection>
                {/* </Section> */}
                    <SubSection link={'basicjsfunctions'} label={"Functions"}>
                        <p>
                            Functions are used to perform specific tasks. A example function could be one that displays
                            "Hello World" to the user. Every function has input values, called parameters, and most have
                            output values, called return values.
                        </p>
                        <p>
                            Parameters are values passed to the function, so it can perform a calculation or task. Once
                            the
                            function is complete it returns a value. Functions are used on tasks repeated
                            often to reduce writing the same code more than once. They are also used as callbacks when a user interacts with the page. Functions can have multiple
                            parameters.
                        </p>
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
                                    The function is named addOne. It takes a parameter, number, and returns the number
                                    plus 1.
                                    This function assumes the input value is a number.
                                </Code.Description>
                            </Code.Wrapper>
                        <p>
                            Running a function is referred to as calling a function. If I called addOne it means
                            I am running the function by passing in a variable.
                        </p>
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
                                    <Code.Line>
                                        console.log(numberOfCats);
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    This code calls the function addACat with the parameter numberOfCats. When the
                                    function is run the number parameter is assigned the value of numberOfCats. The
                                    function adds 1 to number then returns it. The output in the console in this case is 11.
                                </Code.Description>
                            </Code.Wrapper>

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
                                The above code is used find the total of the numbers in array1. A <C>for loop</C> is
                                initialized with 3 parts: creating an index variable: <code style={{color: "#E67E22"}}>let
                                i = 0</code>, setting the finish point: <code
                                style={{color: '#0E6251'}}>i {`<`} array1.length</code>, and incrementing the index
                                after each repeat: <code
                                style={{color: '#2874A6'}}>i++</code>. Inside the for loop array1 is being accessed at
                                index i: <code style={{color: '#922B21'}}>array1[i]</code>. The i surrounded by brackets
                                is used to access the i-th item in the array. Sum would equal {1 + 2 + 4 + 5 + 6} after the loop
                                finished.
                            </Code.Description>
                        </Code.Wrapper>
                    </SubSection>
        </Section>
                <Section link={"pagemanip"} label={"Changing a web page with code"}
                         badge={<Badge variant={'warning'}>Full</Badge>}>
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
                    <div style={{overflowX: 'scroll'}}>

                    
                    <Table >
                    <thead>
                        <tr>
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
                        </tr>
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
                                randomly deciding what restaurant to go to.
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
                    </div>
                </Section>
                <Section link={'nextsteps'} label={"Next Steps"}
                         badge={<span><Badge variant={"primary"}>Front</Badge><Badge
                             variant={"success"}>Back</Badge></span>}>
                    <p>
                        Now that you have a brief overview of web development there are many paths to go.
                        The web is built on a lot of different frameworks. Each one has their pros and cons, but all are
                        built on HTML, CSS, and JS.
                    </p>
                    <p>
                        For complete beginners, look at some of the resources I posted throughout the article. Try completing some of the projects above, then move on to the sections
                        below. Use google as much as possible so you don't get stuck.
                    </p>
                    <p>
                        For people who already have coding experience start looking into libraries and frameworks.
                        I recommend starting to learn a framework and use that as motivation to improve your HTML, CSS,
                        and JS skills.
                    </p>
                    <SubSection label={"Frontend Libraries"} badge={<Badge variant={"primary"}>Front</Badge>}>
                        <p>
                            These libraries are primarily used for user interface creation, however they heavily rely on
                            JS to
                            make them.
                            </p>
                            <ul>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={"https://jquery.com/"}>jQuery</a> makes
                                    writing JS easier by adding functionality, and more powerful syntax.
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={'https://reactjs.org/'}>React</a> is a good library for creating large web
                                    applications
                                    that use the same code sections multiple times. React Native is a very similar
                                    library
                                    that is used for writing mobile apps. This page was built with React.
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={"https://angular.io/"}>Angular</a> is similar to React. Also can be used
                                    for
                                    writing mobile apps.
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={"https://angular.io/"}>Bootstrap</a> is a CSS library. It has lots of built in styles to make your pages look good. This page was styled with Bootstrap.
                                </li>
                            </ul>
                    </SubSection>
                    <SubSection label={"Databases"} badge={<Badge variant={"success"}>Back</Badge>}>
                        <p>
                            Databases are ways to store information across multiple user sessions. Every time you log
                            into a
                            website the website looks in their database and pulls your data to verify your password
                            matches. Virtually every website is built on a database. Every time the user interacts they
                            are either viewing, changing, or adding data to the database in one way or another.
                            Understanding how databases work and how to work with them is essential to backend and full
                            stack development.
                        </p>
                        <p>
                            SQL is the language most often used for database manipulation. It is
                            relatively simple and definitely worth learning. <a target="_blank" rel="noopener noreferrer" 
                            href={"https://www.geeksforgeeks.org/structured-query-language/"}>Geeks for Geeks</a> has a
                            good tutorial. Most companies use some derivative of SQL.
                        </p>
                        <p>
                            Universities teach whole classes just on databases. They require a lot of time to understand
                            and use. Take your time choosing a database for a project because you'll be stuck with it
                            all the way through. Here are some common database libraries.
                            </p>
                            <ul>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={'https://www.mongodb.com/'}>MongoDB</a> Built on a document-based
                                    structure. NOT a SQL framework.
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={"https://www.mysql.com/"}>MySQL</a> Made by Oracle aimed at companies. Uses
                                    SQL.
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href={"https://www.postgresql.org/"}>postgresql</a> Another SQL framework. It is
                                    open
                                    source and has a good SQL tutorial starting <a target="_blank" rel="noopener noreferrer" 
                                    href={"https://www.postgresql.org/docs/12/tutorial-sql.html"}>here</a>.
                                </li>
                            </ul>
                    </SubSection>
                    <SubSection label={"REST APIs: Connecting the Database and the Frontend"}
                                badge={<span><Badge
                                    variant={"warning"}>Full</Badge></span>}>
                        <p>
                            REST APIs also known as Representational State Transfer Application Programming Interface
                            are used to access information from a website, database, or service.
                            Every REST API has a set of endpoints. Each endpoint allows you to get an item or perform a
                            task on one or multiple items. This website <a target="_blank" rel="noopener noreferrer" 
                            href={"https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/"}>Smashing
                            Magazine</a> has a good
                            introductory tutorial. <a target="_blank" rel="noopener noreferrer"  href={"https://developers.strava.com/docs/reference/"}>Strava</a>,
                            an athletic social media website, has very good documentation of their API. It is a good
                            example to understand how an good API looks.
                        </p>

                    </SubSection>
                    <SubSection label={"Hosting your app"} badge={<span><Badge variant={"primary"}>Front</Badge><Badge
                                    variant={"success"}>Back</Badge></span>}>
                        <p>
                            Hosting is a whole problem in itself. If you are working on simple web pages <a target="_blank" rel="noopener noreferrer" 
                            href={"https://github.com"}>Github</a> offers free hosting for small pages. </p>
                            <p>
                                PC Magazing has a good <a href="https://www.pcmag.com/roundup/316108/the-best-web-hosting-services">article</a> about places to host your website. I think most of them, for a small website, are between $2-5/month.
                            </p>
                            <p>Amazon, Google,
                            and Microsoft all offer hosting services. They are free for small website.  I personally use <a target="_blank" rel="noopener noreferrer" 
                            href={"https://cloud.google.com/appengine/"}>Google Cloud Platform's App
                            Engine</a> for hosting my web apps because it was the easiest to set up. Plus, their free
                            quota
                            is pretty big. <a target="_blank" rel="noopener noreferrer"  href={"https://aws.amazon.com/lambda/"}>Amazon Lambda</a> is also good
                            services, but I haven't explored it fully. Microsoft has an <a target="_blank" rel="noopener noreferrer" 
                            href={"https://azure.microsoft.com/en-us/services/app-service/"}>app service</a> that I have
                            used,
                            but their platform user interface is not beginner friendly.
                        </p>
                    </SubSection>
                </Section>
            </TableOfContents>
        </div>
    )
}
