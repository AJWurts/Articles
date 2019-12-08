import React from 'react';
import {
    Section,
    SubSection,
    TableOfContents,
    Link,
    C,
    Code,
    CodeSnip,
    S
} from "../compstore";

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
                        So you want to learn Python. You made a good choice. From my experience teaching undergrad classes Python is the language people pick up most easily. It is much harder to get stuck on small issues like types, and incorrect syntax. It's readability also makes it easier to understand at the stard. There are a few languages where a valid line if code creates a readable english sentence. This language is one of them.
                    </p>
                </Section>
                <Section link="downloading" label="How to download and run Python">
                    <p>
                        This tutorial uses Python 3.6, but 3.7, and 3.8 will work too. Some programs use Python 2.7, but a large majority use Python 3+. The differences are minmal, but as of 2019 Python 3 is the better one to learn.
                    </p>
                    <p>
                        Click <Link href="https://www.python.org/downloads/">here</Link> to download Python. Download the newest stable version. Once downloaded double click to launch it and step through the installation wizard.
                    </p>
                    <p>

                    </p>
                </Section>
                <Section link="ides" label="Integrated Developer Environments">
                    <p>
                        Coming Soon...
                    </p>
                </Section>
                <Section link="syntax" label="Syntax">
                    <p>
                        Coming Soon...
                    </p>
                    <TableOfContents fontSize={"20px"}>
                        <SubSection link="syntax-variables" label="Variables">
                            <p>
                                Variables are used to store values. In python you don't need to explicity define what type a variable is. A variable can hold any type of data. Once created you can perform calculations on variables using operators.
                            </p>
                            <Code.Wrapper>
                                <Code.Title>
                                    Variable Creation
                                </Code.Title>
                                <Code.Code>
                                    <Code.Line>
                                        integer1 = 10 # An <span
                                        style={{color: 'rgb(40, 116, 166)'}}>Integer</span> is any number with out decimals.
                                    </Code.Line>
                                    <Code.Line>
                                        string1 = "hello" # A <span
                                        style={{color: 'rgb(40, 116, 166)'}}>String</span> is a sequence of characters.
                                    </Code.Line>
                                    <Code.Line>
                                        float1 = 1.88 # A <span
                                        style={{color: 'rgb(40, 116, 166)'}}>Float</span> is any number with decimal places.
                                    </Code.Line>
                                    <Code.Line>
                                        bool1 = True # A <span
                                        style={{color: 'rgb(40, 116, 166)'}}>Boolean</span> is either True or False.
                                    </Code.Line> 
                                    <Code.Line>
                                        list1 = [0,1,2,3,4,5] # A <span
                                        style={{color: 'rgb(40, 116, 166)'}}>List</span> contains a sequence of values. 
                                    </Code.Line>                                 
                                </Code.Code>
                            </Code.Wrapper>
                        </SubSection>
                        <SubSection link="syntax-operators" label="Operators">
                            <p>
                                Operators are used to combine and maniuplate variables. Here are the three main types.
                            </p>
                            Math operators behave like the standard math operations.
                            <ul>
                                <li><C>+</C> - Addition. <C>{`5 + 5`}</C> returns <C>10</C></li>
                                <li><C>-</C> - Subtraction. <C>{`5 - 3`}</C> returns <C>2</C></li>
                                <li><C>/</C> - Division. <C>{`10 / 5`}</C> returns <C>2</C></li>
                                <li><C>//</C> - Integer Division. <C>{`10 / 3`}</C> returns <C>3</C>. It divides 10 by 3 then truncates the decimal places leave 3.</li>
                                <li><C>*</C> - Multiplication. <C>{`10 * 2.5`}</C> returns <C>25</C>. All operators work for integers and floats.</li>
                                <li><C>%</C> - Modulus. The remainder operator. Takes the remainder after division. <C>{`12 % 5`}</C> returns <C>2</C> because 12 / 5 = 10 remainder <C>2</C>.</li>
                            </ul>
                            Comparison operators compare two variables and return a boolean.
                            <ul>
                                <li><C>{`<`}</C> - less than. <C>{`3 < 5`}</C> returns <C>true</C></li>
                                <li><C>{`>`}</C> - greater than. <C>{`7 > 5`}</C> returns <C>true</C>. <C>{`5 > 5`}</C> returns <C>false</C></li>
                                <li><C>{`>=`}</C> - greater than or equal. <C>{`5 >= 5`}</C> returns <C>true</C></li>
                                <li><C>{`<=`}</C> - less than or equal. <C>{`5 <= 6`}</C> returns <C>true</C></li>
                                <li><C>{`==`}</C> - equals. <C>{`3 == 5`}</C> returns <C>false</C>.</li>

                            </ul>
                            Boolean Operators combine one or two booleans and return a boolean.
                            <ul>
                                <li><C>{`not`}</C> - not. Changes a boolean to the opposite state. <C>{`not true`}</C> returns <C>false</C></li>
                                <li><C>{`and`}</C> - and. if both are true returns true. <C>{`true and true`}</C> returns <C>true</C></li>
                                <li><C>{`or`}</C> - or. if either are true returns true. <C>{`true or false`}</C> returns <C>true</C></li>
                            </ul>
                            Updating operators
                            <ul>
                                <li><C>{'+='}</C> - add and update. Adds the value on the right then updates. <C>apples += 1</C> increases apples by 1.</li>
                                <li><C>{'-='}</C> - subtract and update. Adds the value by the right then updates. <C>apples -= 1</C> decreases apples by 1.</li>
                                <li><C>{'/='}</C> - divide and update. Divides the value by the right then updates. <C>apples /= 5</C> divides apples by 5.</li>
                                <li><C>{'*='}</C> - multiply and update. Multiplies the value by the right then updates. <C>apples *= 1</C> multiplies apples by 1.</li>
                                <li><C>{'%='}</C> - applies modulus and updates. Multiplies the value by the right then updates. <C>apples %= 10</C> finds the remainder with respect to 10 and saves it to apples</li>
                            </ul>

                        </SubSection>
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
                                        def addOne(number):
                                    </Code.Line>
                                    <Code.Line tabs={1}>
                                        return number + 1
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    The function is named addOne. It takes a parameter, number, and returns the number
                                    plus 1.
                                    This function assumes the input value is a number.
                                </Code.Description>
                            </Code.Wrapper>
                            <Code.Wrapper>
                                <Code.Title>
                                    Calling a Function
                                </Code.Title>
                                Running a function is referred to as calling a function. If I called addOne it means
                            I am running the function by passing in a variable.
                                <Code.Code>
                                    <Code.Line>
                                        numberOfCats = 10
                                    </Code.Line>
                                    <Code.Line>
                                        numberOfCats = addACat(numberOfCats)
                                    </Code.Line>
                                    <Code.Line>
                                        print(numberOfCats)
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    This code calls the function addACat with the parameter numberOfCats. When the
                                    function is run the number parameter is assigned the value of numberOfCats. The
                                    function adds 1 to number then returns it. The output in the console in this case is 11.
                                </Code.Description>
                            </Code.Wrapper>
                            <Code.Wrapper>
                                <Code.Title>
                                    Optional Parameters
                                </Code.Title>
                                
                                <Code.Code>
                                    <Code.Line>
                                        def equation(x, m=2, b=10):
                                    </Code.Line>
                                    <Code.Line tabs={1}>
                                        return x * m + b
                                    </Code.Line>
                                    <Code.Line>
                                        <Code.Comment># When run the parameters will be equal to the comments.</Code.Comment>
                                    </Code.Line>
                                    <Code.Line>
                                        equation(10) <Code.Comment># x=10, m=2, b=10</Code.Comment>
                                    </Code.Line>
                                    <Code.Line>
                                        equation(10, 3, 8) <Code.Comment># x=10, m=3, b=8</Code.Comment>
                                    </Code.Line>
                                    <Code.Line>
                                        equation(5, m=5, b=11) <Code.Comment>
                                            # x=5, m=5, b=11
                                        </Code.Comment>
                                    </Code.Line>
                                </Code.Code>
                                <Code.Description>
                                    The function equation has an <C>x</C>, <C>m</C> and <C>b</C> paramter. <C>m</C>, and <C>b</C> are optional. When you call the function and do not set them they are by default 2 and 10 respectively. <C>x</C> must be specified everytime the function is called. Below the function definition are valid ways to call the function.
                                </Code.Description>
                            </Code.Wrapper>
                        </SubSection>
                        <SubSection link="syntax-classes" label="Classes">
                            <p>
                                Object orientated programming is a progrmaming method that organizes the program around code and objects as opposed to functions and logic. Python is built on top of objects, every object except for some primitive types are objects. Strings are objects built ontop of lists, also objects, or chars (not objects). 
                            </p>
                            <p>
                                Classes are used to define objects. A class can contain class variables and methods (functions in a class). Methods are special because they ahve access to the class variables. Therefore it is common for a method to have no parameters because it performs side effects on class variables. 
                            </p>
                        </SubSection>
                        <SubSection link="syntax-forloops" label="For Loops">
                        <p>
                        Loops are sections of code that are repeated. If you had a grocery store list and wanted to
                            check whether milk was on the list, a loop could do that. There are two types of loops, for
                            loops, and while loops. For loops are generally used for iterating through lists. While
                            loops are used when the finish condition is not known at the start.
                        </p>
                        <p>
                            Python has two main formats, one iterates directly over a list, and the other iterates over a range iterator. The first type is used when the index of an item is not needed. The first for loop example below shows an example.
                        </p>
                        <Code.Wrapper>
                            <Code.Title>
                                For Loop: Direct Iteration
                            </Code.Title>
                            <Code.Code>
                                <Code.Line>
                                    array1 = [1,2,4,5,6]
                                </Code.Line>
                                <Code.Line>
                                    summation = 0
                                </Code.Line>
                                <Code.Line>
                                    for <span style={{color: "#E67E22"}}>val</span> in <span
                                    style={{color: '#0E6251'}}>array1</span>:
                                </Code.Line>
                                <Code.Line tabs={1}>
                                sum += <span style={{color: '#922B21'}}>val</span>
                                </Code.Line>
                            </Code.Code>
                            <Code.Description>
                                The above code is used find the total of the numbers in <C>array1</C>. The for loop iterates over <C>array1</C>. The first time the loop runs <S color='#922B21'>val</S> is set to 0. <S color='#922B21'>val</S> is added to sum, and sum is updated to 1. On the second iteration the <S color='#922B21'>val</S> is set to 2, and sum is updated to 3. After the final iteration sum will be 18.
                            </Code.Description>
                        </Code.Wrapper>
                        <Code.Wrapper>
                            <Code.Title>
                                For Loop: Range
                            </Code.Title>
                            This for loop uses two built-in functions, <C>range</C>, and <C>len</C>. <C>len</C> is used to calculate the length of an object. When <C>len</C> is applied to a list
                            <Code.Code>
                                <Code.Line>
                                    array1 = ["a", "b", "c", "d", "e", "f"]
                                </Code.Line>
                                <Code.Line>
                                    summation = 0
                                </Code.Line>
                                <Code.Line>
                                    for <span style={{color: "#E67E22"}}>i</span> in <span
                                    style={{color: '#0E6251'}}>range(len(array1))</span>:
                                </Code.Line>
                                <Code.Line tabs={1}>
                                sum += <span style={{color: '#922B21'}}>array1[i]</span>
                                </Code.Line>
                            </Code.Code>
                            <Code.Description>
                                In this <C>for loop</C>, <S color="#922B21">i</S> is not set to the array values. <S color="#922B21">i</S> is set to each index from 0 until the length of array1, denoted <S color='#0E6251'>len(array1)</S>. The loop will run 6 times and <S color="#922B21">i</S> will be 0-5.
                            </Code.Description>
                        </Code.Wrapper>
                        </SubSection>
                    </TableOfContents>
                </Section>
                <Section link="commandline" label="Practice App 1: Command Line Calculator">
                    <p>
                        Command line programs are very common in Python. Python is good for writing scripts. Scripts are small programs that do a set of tasks that save the user time.
                    </p>
                    <p>
                        When I was a TA for an undergrad class we downloaded all the homework files for grading in a certain format. For each homework assigment we needed to make an excel file with the individuals name and email on a certain line. I didn't want to spend 20 minutes every assignment indivdually making and filling in the excel documents so I made a 40 line python script that did everything for me. All I did was tell it what folder to look at and where the excel rubric was, and it did the rest. 
                    </p>
                </Section>
                <Section link="turtles" label="Turtles">
                    <p>
                        Coming Soon...
                    </p>
                </Section>
                <Section link="starting" label="Projects">
                    <p>
                        Coming Soon...
                    </p>
                </Section>
                <Section link="starting" label="Next Steps">
                    <p>
                        Coming Soon...
                    </p>
                </Section>
            </TableOfContents>
        </div >
    )
}