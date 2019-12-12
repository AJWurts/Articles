import React from 'react';
import {
  Section,
  SubSection,
  TableOfContents,
  Link,
  C,
  Code,
  CodeSnip,
  S,
  List,
  ListItem
} from "../compstore";
import { CardDeck, Table } from 'react-bootstrap';

export default function IntroPython(props) {

  return (
    <div className='page-wrapper'>
      <h1>
        Welcome to Python
      </h1>
      <h3>By Alexander Wurts</h3>
      <p>
          If you have any questions, comments, or think there is an error please email me at
          <b> alexwurtsfeedback@gmail.com</b>.
      </p>
      <h4>
        A minimal guide to get you started.
      </h4>
      <TableOfContents>
        <Section link="starting" label="Getting Started">
          <p>
            So you want to learn Python. You made a good choice. From my experience being a TA for undergrad CS
            classes, Python is the language people pick up most easily. In part due to it's dynamic typing and simple syntax. It is great for beginners because it allows them to start working with concepts immediately and not worry about the small stuff. There are a few languages where a valid line of code creates a readable
            english sentence. Python is one of them.
          </p>
          <p>
            This tutorial goes over the Python concepts to start programming simple apps. At the bottom there is a list of projects to attempt, and a follow up with libraries you can start exploring. You probably won't be able to use them before doing the Advanced Tutorial and a few projects, but it's good to see what's next.
          </p>
          <p>
            Here are some tips to get through learning the basics.
            <ul>
              <li>
                Trial and error is the best way to learn. If you aren't sure how a certain function or library works, try writing code that tests multiple ways of using it. Look at the output and see if it aligns with what you expected. 
              </li>
              <li>
                Start by modifying projects then move on to making your own. It's must easier to modify code than write it from scratch.
              </li>
              <li>
                Google is your best friend, or it will be soon. Use it whenever you are stuck. 
              </li>
              <li>
                Learning to program takes time and persistence as well as plenty of breaks. If you go 8hrs straight the last few will probably be less effective than the first few. 
              </li>
              <li>
                Learn your IDE's or text editor's keyboard shortcuts, it will save you a lot of time.
              </li>
              <li>
                Take the time to learn simple command line operations. It will make your life much easier. Check <Link href="https://tutorial.djangogirls.org/en/intro_to_command_line/">this tutorial</Link> out.
              </li>
              <li>
                Projects are the best motivation. Try to create a project that aligns with one of your hobbies. 
              </li>
              <li>
                Take the time to understand every line of code in this tutorial. Go line by line and answer the question:  What does this line of code do?
              </li>
              <li>
                Find a friend to learn with, it helps to have someone in the same situation as you. 
              </li>
            </ul>
          </p>

        </Section>
        <Section link='resources' label="Learning Resources">
          <p> Here are a list of the best places to find information on Python.</p>
          <ul>
            <li><Link href="https://docs.python.org/">Python Documentation - Has the most up to date information, but can be overwhelming.</Link></li>
            <li>
              <Link href="https://stackoverflow.com/questions/tagged/python?tab=Votes">
                Stackoverflow's most asked python questions - Chances are yours is here
              </Link>
            </li>
            <li>
              <Link href="https://runestone.academy/runestone/books/published/thinkcspy/index.html">How to Think Like a Computer Scientist: Interactive Addition - This is how I learned the basics. They do a phenomenal job and have interactive examples throughout.</Link>
            </li>
          </ul>
        </Section>
        <Section link="downloading" label="How to download and run Python">
          <p>
            This tutorial uses Python 3.6, but 3.7, and 3.8 will work too. Some programs use Python 2.7, but
            a large majority use Python 3+. The differences are minmal, and as of 2019 Python 3 is the
            better one to learn.
          </p>
          <p>
            Click <Link href="https://www.Python.org/downloads/">here</Link> to download Python. Download
            the newest stable version. Once downloaded double click to launch it and step through the
            installation wizard. <b>On Windows make sure to check the box to add Python to your PATH variable.</b> This is very important.
          </p>
          <p>
            Once complete you should have access to the Python3 command in your console. We will go through how to run a Python file soon. 
          </p>
        </Section>
        <Section link="ides" label="Integrated Developer Environments">
        <p>
            IDEs are applications used for editing code. They improve over simple text editors by adding
            shortcuts, templates, or other features that make writing code faster and easier. Finding the right IDE
            requires trying a lot of different ones.
          </p>
          <p>
            Here are a list of IDEs that I recommend. I personally use Visual Studio code because it works
            well with Python and Javascript, my two main languages. I will be using Visual Studio Code (VS Code) for the remainder of this tutorial. 
          </p>
          <List newPage={true}>
            <ListItem link="https://code.visualstudio.com/">
              Visual Studio Code - Great for beginners, because it's easy to get started.
            </ListItem>
            <ListItem link="https://www.jetbrains.com/pycharm/">
              PyCharm - A more complex but more powerful IDE. Easy to use with lots of features. Free and paid versions.
            </ListItem>
            <ListItem link="https://docs.python.org/3/library/idle.html">
              IDLE - Built-in Python editor. Good for simple scripts, but no advanced features.  
            </ListItem>
            <ListItem link="https://atom.io/">
              Atom - Simple text editor with plugins. <Link href="https://hackernoon.com/setting-up-a-python-development-environment-in-atom-466d7f48e297">How to setup Python with Atom.</Link>
            </ListItem>
          </List>
        </Section>
        <Section link="howtorun" label="How to run code">
          <p>
            The easiest way to run Python code is through the command line. This is probably new for most readers, but don't worry it's not very difficult. Follow these steps to get started.
          </p>
          <h5>Part 1 Open VS Code</h5>
          <ol>
            <li>Create a folder, anywhere is fine</li>
            <li>Open Visual Studio Code.</li> 
            <li>Click file -> open -> then navigate to the folder and open it.</li>
          </ol>
          <p>
            A dark VS Code window should now be open. On the left side will be a sidebar showing all your files, you haven't made any yet, so there is nothing there. In the middle is where the code will show up. On the bottom is where a console will open eventually.
          </p>
          <h5>Part 2: Create a new Python file</h5>
          <ol>
            <li> In VS Code  press: command + n on mac, or control + n on windows to create a new file. A new untitled file will open.</li> 
            <li> Press command + s on mac, or control + s to save the file.</li> 
            <li>
            A box will popup asking you to name the file. Name it <C>main.py</C>. "<C>.py</C>" denotes a Python file.
            </li>
          </ol>
          <h5>Part 3: Run the Python file </h5>
          <ol>
            <li>
              Add: <C>print("Hello World")</C> to the top of <C>main.py</C>.
            </li>
            <li>
              On the top menu bar click view then console. This will open a console in the VS Code window.
            </li>
            <li>
              Click on the console and type: python3 main.py 
            </li>
            <li>
              You should see: Hello World in the console.
            </li>
          </ol>
          <p>
            If you get an error, and it says python3 is not  a valid command, make sure Python has finished installing. For Windows make sure you checked "Add to PATH" during install or it won't work. The best way to fix the issue is to reinstall Python and click the box. If that doesn't work Google "python3 won't run" and look through the results. 
          </p>
        </Section>
        <Section link="syntax" label="Syntax">
          <p>
            Python syntax is minimal compared to Java or C. It uses colons and whitespace instead of curly brackets to define code blocks. Whitespace is very important in Python. All code sections need to be tabbed, or spaced properly in order for the code to run.
          </p>
          <p>
            In this section we will go over the syntax that makes up Python, and how to read Python code.
          </p>
          <p>
            In Python comments are denoted by <C>#</C>'s. Everything after a <C>#</C> on a line is not run, so they can be used to clarify what a line of code does.
          </p>
          <Code.Wrapper>
            <Code.Title>Example Python Code</Code.Title>
            Notice the colon after the line starting with <C>def</C> and the indentation of the code below. 
            <Code.Code>
              <Code.Line>
                def sum_list(a_list):
              </Code.Line>
              <Code.Line tabs={1}>
                summation = 0
              </Code.Line>
              <Code.Line tabs={1}>
                for val in a_list:
              </Code.Line>
              <Code.Line tabs={2}>
                summation += val
              </Code.Line>
              <Code.Line tabs={1}>
                return summation
              </Code.Line>
            </Code.Code>
          </Code.Wrapper>

          <TableOfContents fontSize={"20px"}>
            <SubSection link="syntax-variables" label="Variables">
              <p>
                Variables are used to store values, much like algebra. In Python you don't need to explicity define what
                type a variable is. A variable can hold any type of data. Once created you can perform
                calculations on variables using operators.
              </p>
              <p>
                All variables have a data type based on what data they store. Below is an example of how you would create each data type and what they are. 
              </p>
              <Code.Wrapper>
                <Code.Title>
                  Variable Creation
                </Code.Title>
                Variables are created or updated using the assignment operator <C>=</C>. The value on the right is saved to the variable on the left. 
                When choosing variable names the standard method in Python is underscores between words, such as <C>number_of_cats</C> for a variable that counts the number of cats.
                <Code.Code>
                  <Code.Line>
                    number_of_cats = 10 # An <span
                    style={{color: 'rgb(40, 116, 166)'}}>Integer</span> is any number with out
                    decimals.
                  </Code.Line>
                  <Code.Line>
                    user_name = "dan456" # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>String</span> is a sequence of characters, surrounded by <C>""</C> or <C>''</C>.
                  </Code.Line>
                  <Code.Line>
                    user_avg_ratings = 1.88 # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Float</span> is any number with decimal
                    places.
                  </Code.Line>
                  <Code.Line>
                    has_visited = True # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Boolean</span> is either True or False.
                  </Code.Line>
                  <Code.Line>
                    ratings = [0,1,2,3,4,5] # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>List</span> contains a sequence of values. <C>list1</C> is a list of integers.
                  </Code.Line>
                  <Code.Line>
                    food = {`{`}"Apple": "Fruit", "Corn": "Vegetable"} # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Dictionary</span> contains Key and Value pairs.
                  </Code.Line>
                </Code.Code>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="syntax-operators" label="Operators">
              <p>
                Operators are used to combine and maniuplate variables. Python has the bitwise operators: <C>|, &, ~, ^, >>, {`<<`}</C> which operate on the bits themselves, but they are out of the scope of this tutorial. Here are the four main types you need to know.
              </p>
              Math operators behave like the standard math operations.
              <ul>
                <li><C>+</C> - Addition. <C>{`5 + 5`}</C> returns <C>10</C></li>
                <li><C>-</C> - Subtraction. <C>{`5 - 3`}</C> returns <C>2</C></li>
                <li><C>/</C> - Division. <C>{`10 / 5`}</C> returns <C>2</C></li>
                <li><C>//</C> - Integer Division. <C>{`10 / 3`}</C> returns <C>3</C>. It divides 10 by 3
                  then truncates the decimal places leaving <C>3</C>.
                </li>
                <li><C>*</C> - Multiplication. <C>{`10 * 2.5`}</C> returns <C>25</C>. All operators work
                  for integers and floats.
                </li>
                <li><C>%</C> - Modulus. The remainder operator. Takes the remainder after
                  division. <C>{`12 % 5`}</C> returns <C>2</C> because 12 / 5 = 2 remainder <C>2</C>.
                </li>
              </ul>
              Comparison operators compare two variables and return a boolean.
              <ul>
                <li><C>{`<`}</C> - less than. <C>{`3 < 5`}</C> returns <C>True</C></li>
                <li><C>{`>`}</C> - greater
                  than. <C>{`7 > 5`}</C> returns <C>True</C>. <C>{`5 > 5`}</C> returns <C>False</C>
                </li>
                <li><C>{`>=`}</C> - greater than or equal. <C>{`5 >= 5`}</C> returns <C>True</C></li>
                <li><C>{`<=`}</C> - less than or equal. <C>{`5 <= 6`}</C> returns <C>True</C></li>
                <li><C>{`==`}</C> - equals. <C>{`3 == 5`}</C> returns <C>False</C>.</li>

              </ul>
              Boolean Operators combine one or two booleans and return a boolean.
              <ul>
                <li><C>{`not`}</C> - not. Changes a boolean to the opposite
                  state. <C>{`not True`}</C> returns <C>False</C></li>
                <li><C>{`and`}</C> - and. if both are True, returns
                  True. <C>{`True and True`}</C> returns <C>True</C></li>
                <li><C>{`or`}</C> - or. if either are True, returns
                  True. <C>{`True or False`}</C> returns <C>True</C></li>
              </ul>
              Updating operators
              <ul>
                <li><C>{'+='}</C> - add and update. Adds the value on the right then updates. <C>apples
                  += 1</C> increases apples by 1.
                </li>
                <li><C>{'-='}</C> - subtract and update. Subtracts the value on the right then updates. <C>apples
                  -= 1</C> decreases apples by 1.
                </li>
                <li><C>{'/='}</C> - divide and update. Divides by the value on the right then updates. <C>apples
                  /= 5</C> divides apples by 5.
                </li>
                <li><C>{'*='}</C> - multiply and update. Multiplies by the value on the right then
                  updates. <C>apples *= 1</C> multiplies apples by 1.
                </li>
                <li><C>{'%='}</C> - applies modulus and updates. <C>apples %= 10</C> finds the remainder with respect to 10 and saves it to <C>apples</C>.
                </li>
              </ul>

            </SubSection>
            <SubSection link={'syntax-functions'} label={"Functions"}>
              <p>
                Functions are used to perform multiple operations on variables. They are also used to group sections of code together that are repeated often. Functions are used on tasks repeated
                often to reduce writing the same code more than once.A example function <C>print</C> prints text to the console. Every function has input values, called parameters or arguments, and most
                have
                output values, called return values.
              </p>
              <p>
                Arguments are values passed to the function, so it can perform a calculation or task. Once the function is complete it returns a value. Functions can have multiple
                arguments.
              </p>
              <Code.Wrapper>
                <Code.Title>
                  Defining a Function
                </Code.Title>
                All functions start with <C>def</C> followed by the function name and then parantheses with arguments inside.
                <Code.Code>
                  <Code.Line>
                    def add_a_cat(number_of_cats):
                  </Code.Line>
                  <Code.Line tabs={1}>
                    return number_of_cats + 1
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  The function is named <C>add_a_cat</C>. It takes an argument, number_of_cats, and returns the number
                  plus 1.
                  This function assumes the input value is a number.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Calling a Function
                </Code.Title>
                Running a function is referred to as calling a function. If I called <C>add_a_cat</C> it means
                I am running the function by passing in a variable. The input variable name does not need to match the argument name. They are linked based on their position. These types of parameters are also known as positional arguments.
                <Code.Code>
                  <Code.Line>
                    cats = 10
                  </Code.Line>
                  <Code.Line>
                  number_of_cats = add_a_cat(cats)
                  </Code.Line>
                  <Code.Line>
                    print(number_of_cats)
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  This code calls the function <C>add_a_cat</C> with the parameter <C>cats</C>. When the
                  function is run the <C>number_of_cats</C> parameter is assigned the value of <C>cats</C>. The
                  function adds 1 to <C>number_of_cats</C> then returns it. The output in the console in this case is
                  <C> 11</C>.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Built-in functions
                </Code.Title>
                Built-in functions are functions defined in the standard Python library. They are accessible without any imports. Below are popular ones, and <Link href="https://docs.Python.org/3/library/functions.html">here</Link> are all of them
                <CardDeck>
                  <CodeSnip.Snip title="print(value)" subtitle="Print">
                    Prints the value to the console
                    <CodeSnip.Example>
                      print("Hello World")
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Prints <C>Hello World</C> to the console.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                </CardDeck>
                <CardDeck>
                  <CodeSnip.Snip title="len(item)" subtitle="Length">
                    Returns length of the item. Most common use is to find the length of a list.
                    <CodeSnip.Example>
                      len(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      The code would return an integer with the length of the list.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="min(item1, ..., itemN)" subtitle="Minimum">
                    Returns the minimum of a list, or min of all arguments.
                    <CodeSnip.Example>
                      min(var1, var2, var3)
                      <br/>
                      min(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Both are valid ways to call min. Example one will return either var1, var2, or var3 based on which is smallest. Example 2 will return the smallest value in list1.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="max(item1, ..., itemN)" subtitle="Maximum">
                    Returns the maximum of a list, or max of all arguments.
                    <CodeSnip.Example>
                      max(var1, var2, var3)
                      <br/>
                      max(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Example one will return either var1, var2, or var3 based on which is largest. Example 2 will return the largest value in list1.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                </CardDeck>
                <CardDeck>
                  <CodeSnip.Snip title="sum(list)" subtitle="Summation">
                     Adds up all values in list. Returns a number or float for the sum.
                    <CodeSnip.Example>
                      sum([1,2,3,4]) 
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Returns 10,
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="int(value)" subtitle="To Integer">
                    Turns the input value into an integer. Takes in either a float, a string, or another integer. If the result number has decimal places, it removes them. Most often used with strings.
                    <CodeSnip.Example>
                      int(10.05) # equals 10
                      <br/>
                      int("23") # equals 23
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Example 1 returns 10. Example 2 returns 23.
                    </CodeSnip.Result>

                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="float(value)" subtitle="To Float">
                    Turns the input value into a float. Takes in a string, integer, or other floats. Most often used with strings.
                    <CodeSnip.Example>
                      int(10) # equals 10.0
                      <br/>
                      int("2.5") # equals 2.5
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Example 1 returns 10.0. Example 2 returns 2.5.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                </CardDeck>
                <CardDeck>
                <CodeSnip.Snip title="sorted(list)" subtitle="Sorting">
                  Sorts list and returns the sorted list. Sorted has an optional argument <C>reverse</C>, which when set to true sorted in descending order.
                  <CodeSnip.Example>
                    result = sorted([1,3,4,2,0])
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>result</C> now equals the array passed in, sorted in ascending order:
                    <C> [0,1,2,3,4]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
                <CodeSnip.Snip title={"input(string)"} subtitle={"Input Function"}>
                  Takes in a string, displays the string to the user in the console and waits for the user to type something in the console. Once the user finishes typing and presses return, it reads the input and returns the value as a <b>string</b>.
                  <CodeSnip.Example>
                    user_input = input("Enter your name:")
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>user_input</C> is now equal to what the user typed in the console.
                  </CodeSnip.Result>
                </CodeSnip.Snip>
                </CardDeck> 
                <CardDeck>
          
                <CodeSnip.Snip title="range(start, stop, diff)" subtitle="Range Function">
                  Return all integers between a starting point, and an ending point. Each number is diff numbers apart. The starting point is included in the range, and the end point is not. If it only has one parameter, that is the stop value. If it has two they are the start, and stop. If it has three it is start, stop, and diff.
                  <CodeSnip.Example>
                    range(4) # 0,1,2,3 - range(stop)<br/>
                    range(10,20) # 10-19 - range(start, stop)<br/>
                    range(0,10,2) # 0,2,4,6,8 - range(start, stop, diff)<br/>
                  </CodeSnip.Example>
 
                </CodeSnip.Snip>
                </CardDeck>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Optional Arguments
                </Code.Title>
                  Optional arguments are used when a function has default values that don't need to be set everytime a function runs. They can also be used to name the arguments to make the code more clear. Optional arguments always come after positional arguments.
                <Code.Code>
                  <Code.Line>
                    def equation(x, m=2, b=10):
                  </Code.Line>
                  <Code.Line tabs={1}>
                    return x * m + b
                  </Code.Line>
                  <Code.Line>
                    <Code.Comment># When run the arguments will be equal to the
                      values on the right.</Code.Comment>
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
                  The function equation has an <C>x</C>, <C>m</C> and <C>b</C> argument. <C>m</C>,
                  and <C>b</C> are optional. When you call the function and do not set them they are
                  by default 2 and 10 respectively. <C>x</C> must be specified everytime the function
                  is called. Below the function definition are valid ways to call the function.
                </Code.Description>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="syntax-lists" label="Lists">
              <p>
                Lists are a way of holding data in a sequence, where order matters. It is a type of data structure. Lists can hold any type of data. List are used in all different types of programs to hold data for grocery receipts up to neural network data, and more.
              </p>

              <Code.Wrapper>
                <Code.Title>
                  Creating a List
                </Code.Title>
                Lists are defined by a set of square brackets <C>[]</C>, one at the start and one at the end.
                <Code.Code>
                <Code.Line>
                  <Code.Comment># Create a list with values 0,1,2,3,4,5</Code.Comment>
                </Code.Line>
                <Code.Line>
                  list1 = [0,1,2,3,4,5]
                </Code.Line>
                <br/>
               <Code.Line>
               <Code.Comment># Lists can hold variables of different types, </Code.Comment>
               </Code.Line>
               <Code.Line>
               <Code.Comment># but this is not recommended because it is difficult to process.</Code.Comment>
               </Code.Line>
                <Code.Line>
                list2 = [1.5, "3.6", 1, "apples"]  
                </Code.Line>
                <br/>
                <Code.Line>
                  empty_list = [] <Code.Comment># If nothing is inside the brackets, the list is empty.</Code.Comment>
                </Code.Line>
                </Code.Code>
                <Code.Description>
                  Both examples create a list. The first creates a list with numbers 0,1,2,3,4,5. The final list is empty.
                </Code.Description>
              </Code.Wrapper>
              
              <Code.Wrapper>
                <Code.Title>
                  Adding to a list
                </Code.Title>
                Values are added to the end of a list using the <C>append</C> method (function). The <C>.</C> betweeh list1 and append show that list1 is calling append.
                <Code.Code>
                  <Code.Line>
                    <Code.Comment># Create an empty list</Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    list1 = []
                  </Code.Line>
                  <Code.Line>
                    list1.append(1)
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  <C>list1</C> was created as an empty list, then the number 1 was added to the end. After the <C>append</C> command the list now looks like this: <C>[1]</C>.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Access an item in a list
                </Code.Title>
                The list name followed by square brackets and a number inside is used to access values in a list. Indexes in the list start at 0 and go up. To get the first item in the list use index 0.
                <Code.Code>
                  <Code.Line>
                    letters = ["a", "b", "c", "d", "e"]
                  </Code.Line>
                  <Code.Line>
                    <Code.Comment># Indices:  0,   1,   2,   3,   4 </Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    <Code.Comment># Saves the character a at the 0th index in <C>letters</C> to <C>letter_a</C></Code.Comment>
                    </Code.Line>
                  <Code.Line>
                    letter_a = letters[0] 
                  </Code.Line>
                  <Code.Line>
                    char_c = letters[2]
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  Accesses the 0th and 2nd index of the letters list. After the code runs, <C>letter_a</C> equals "a" and <C>char_c</C> equals "c".
                </Code.Description>
              </Code.Wrapper>
              <Code.Title>
                Built-in list methods
              </Code.Title>
              These are the most used methods on lists. <Link href="https://docs.Python.org/3/tutorial/datastructures.html">Here</Link> are all of them.
              <CardDeck>
                  <CodeSnip.Snip title="append(value)" subtitle="Append Item">
                    <C>append</C> is used to add an item to the end of a list.
                    <CodeSnip.Example>
                      list1 = [10,20,30,40]
                      <br/>
                      list1.append(10)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Adds <C>10</C> to the end of <C>list1</C>. <C>list1</C> now equals: <C>[10,20,30,40,10]</C>
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="index(item)" subtitle="Find Item Index">
                    <C>index</C> is used to find the index of an item in a list. It takes in a object, and returns the index of that item if found. If it is not found it returns -1.
                    <CodeSnip.Example>
                    list1 = [10,20,30,40]
                    <br/>
                    list1.index(40)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      <C>list1.index(40)</C> return 3 because that is the index of 40 in <C>list1</C>.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
              </CardDeck>
              <CardDeck>
                <CodeSnip.Snip title="sort()" subtitle="Sort list">
                  <C>sort</C> sorts the values in the list, in ascending order. Ascending means smallest first, and largest last. Descending is oppsite, largest first, and smallest last. Sort has an optional argument <C>reverse</C>, which when set to true sorted in descending order.
                  <CodeSnip.Example>
                    list1 = [40,20,10,30]
                    <br/>
                    list1.sort()
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    After the code is run, <C>list1</C> now equals <C>[10,20,30,40]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
              </CardDeck>
              <CardDeck>
                <CodeSnip.Snip title="clear()" subtitle="Removes all items from list">
                  <C>clear</C> removes all items from the list.
                  <CodeSnip.Example>
                    list1 = [10,20,30,40]
                    <br/>
                    list1.clear()
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>list1.clear()</C> removes all items from the list. After the code is run <C>list1</C> now equals <C>[]</C>.
                  </CodeSnip.Result>
                </CodeSnip.Snip>
      
                <CodeSnip.Snip title="remove(index)" subtitle="Remove one item from the list">
                  <C>remove</C> deletes one item from the list based on the index argument.
                  <CodeSnip.Example>
                    list1 = [10,20,30,40]
                    <br/>
                    list1.remove(0)
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>list1.remove(0)</C> deletes the item at index 0, in this case 10 from the list. After the code is run <C>list1</C> now equals <C>[20,30,40]</C>.
                  </CodeSnip.Result>
                </CodeSnip.Snip>
              </CardDeck>
            </SubSection>
            <SubSection link="syntax-dicts" label="Dictionaries">
              <p>
                Dictionaries are used to link two items together using key and value pairs. If you wanted to count the occurences of letters in a sentence, a dictionary is a good data structure to use. Dictionaries are also refered to as HashMaps in Java.
              </p>
              <p>
                Dictionaries in Python are created using curly brackets. <C>{`{}`}</C> defines an empty dictionary. key and value pairs can be added. Keys cannot be repeated, but values can be repeated. Look at the code example below. The key and value can be different data types. Any data type can be a key, and the and data type can be a value. 
              </p>
              <Code.Wrapper>
                <Code.Title>
                  Creating a dictionary
                </Code.Title>
                <Code.Code>
                  <Code.Line>
                    dict1 = {`{`}<S color="rgb(40, 116, 166)">"apple"</S>: <S color="rgb(230, 126, 34)">"fruit"</S>, <S color="rgb(40, 116, 166)">"broccoli"</S>: <S color="rgb(230, 126, 34)">"vegetable"</S>}
                  </Code.Line>
                  <Code.Line>
                    dict2 = {`{}`} <Code.Comment># Empty Dictionary</Code.Comment>
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  <C>dict1</C> contains two pairs. One connects the string <C>"apple"</C> to <C>"fruit"</C>, and the other connects <C>"broccoli"</C> to <C>"vegetable"</C>. The blue strings are the <S color="rgb(40, 116, 166)">Keys</S>, the orange strings are the corresponding <S color="rgb(230, 126, 34)">Values</S>.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Adding a pair to a dict
                </Code.Title>
                Values are added to a dictionary using square brackets. The value in the bracket is the key, the value is on the right.
                <Code.Code>
                <Code.Line>
                    <Code.Comment># Create empty dictionary</Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    dict1 = {`{}`}
                  </Code.Line>
                  <Code.Line>
                    dict1['apple'] = "fruit"
                  </Code.Line>
                  <Code.Line>
                    dict1[10] = "Index 10"
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  Line 1creates an empty dictionary, <C>dict1</C> . Then the key <C>"apple"</C> is added with the value <C>"fruit"</C>. After the above code runs, <C>dict1</C> will have two key pair values, one for apple, one for 10. 
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Accessing values in a dict
                </Code.Title>
                To access a value in a dict you use the same syntax as adding a value.
                <Code.Code>
                  <Code.Line>
                    <Code.Comment># Create test dictionary</Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    dict1 = {`{"apple": "fruit", "broccoli": "vegetable"}`}
                  </Code.Line>
                  <Code.Line>
                    apple_val = dict1['apple']
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  <C>dict1</C> is defined with two key pair values. The value for <C>'apple'</C> is retrieved and saved to the variable <C>apple_val</C>. <C>apple_val</C> will equal <C>"fruit"</C> after the code runs. 
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Checking to see if key already exists
                </Code.Title>
                When creating a dictionary you often want to know whether a key already exists. The <C>in</C> keyword does that for you. It only checks the keys, not the values.
                <Code.Code>
                  <Code.Line>
                    <Code.Comment># Create test dictionary</Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    dict1 = {`{"apple": "fruit", "broccoli": "vegetable"}`}
                  </Code.Line>
                  <Code.Line>
                    has_apple = "apple" in dict1
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  <C>has_apple</C> is now <C>True</C> because the key <C>"apple"</C> is in the dictionary, dict1. 
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Delete a pair from a dictionary
                </Code.Title>
                In Python the <C>del</C> keyword is used to delete items in both lists and dictionaries. 
                <Code.Code>
                  <Code.Line>
                    <Code.Comment># Create test dictionary</Code.Comment>
                  </Code.Line>
                  <Code.Line>
                    dict1 = {`{"apple": "fruit", "broccoli": "vegetable"}`}
                  </Code.Line>
                  <Code.Line>
                    del dict1["apple"]
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  After the code runs dict1 now equals: {`{"broccoli": "vegetable"}`}
                </Code.Description>
              </Code.Wrapper>
              <Code.Title>
                Built-in dict methods
              </Code.Title>
                More examples and methods can be found in the <Link href="https://docs.Python.org/3/library/stdtypes.html#dict">Python documentation</Link> for dicts.
              <CardDeck>
                <CodeSnip.Snip title="values()" subtitle="Values List">
                  Returns the list of values in the dictionary.
                  <CodeSnip.Example>
                    dict1 = {`{`}10: "20", 20: "30"}
                    <br/>
                    values = dict1.values()
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    After the code runs <C>values</C> now is a list containing "20", and "30": <C>["20", "30"]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
                <CodeSnip.Snip title="keys()" subtitle="Keys List">
                  Returns the list of values in the dictionary. Often used to iterate through all keys in a dictionary.
                  <CodeSnip.Example>
                    dict1 = {`{`}10: "20", 20: "30"}
                    <br/>
                    keys = dict1.keys()
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    After the code runs <C>values</C> now is a list containing 10, and 20: <C>[20, 30]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
              </CardDeck>
            </SubSection>
            <SubSection link="syntax-forloops" label="For Loops">
              <p>
                Loops are sections of code that are repeated. If you had a grocery store list and wanted
                to
                check whether milk was on the list, a loop could do that. There are two types of loops,
                for
                loops, and while loops. For loops are generally used for iterating through lists. While
                loops are used when the finish condition is not known at the start. We will focus on for loops for now.
              </p>
              <p>
                Python has two main ways of writing for loops. One iterates directly over a list, and the other iterates
                over a range iterator. The first type, direct iteration, is used when the index of an item is not needed. The second type iterates using the Range function.
                
              </p>
              <Code.Wrapper>
                <Code.Title>
                  For Loop: Direct Iteration
                </Code.Title>
                <Code.Code>
                  <Code.Line>
                    numbers = [1,2,4,5,6]
                  </Code.Line>
                  <Code.Line>
                    summation = 0
                  </Code.Line>
                  <Code.Line>
                    for <span style={{color: "#922B21"}}>val</span> in <span
                    style={{color: '#0E6251'}}>numbers</span>:
                  </Code.Line>
                  <Code.Line tabs={1}>
                    sum += <span style={{color: '#922B21'}}>val</span>
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  The above code is used find the sum of the <C>numbers</C>. The for loop
                  iterates over <C>array1</C>. The first time the loop runs <S
                  color='#922B21'>val</S> is set to 0. <S color='#922B21'>val</S> is added to sum, and
                  sum is updated to 1. On the second iteration the <S color='#922B21'>val</S> is set
                  to 2, and sum is updated to 3. After the final iteration sum will be 18.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  For Loop: Indices Iteration
                </Code.Title>
                This for loop uses two built-in functions, <C>range</C>, and <C>len</C>. <C>len</C> is
                used to calculate the length of numbers. <C>range</C> generates a sequence of values. 
                <Code.Code>
                  <Code.Line>
                  numbers = [1,2,4,5,6]
                  </Code.Line>
                  <Code.Line>
                    summation = 0
                  </Code.Line>
                  <Code.Line>
                    for <span style={{color: "#E67E22"}}>i</span> in <span
                    style={{color: '#0E6251'}}>range(<S color="#123456">len(<S color="#922B21">numbers</S>)</S>)</span>:
                  </Code.Line>
                  <Code.Line tabs={1}>
                    sum += <span style={{color: '#922B21'}}>numbers[<S color="#E67E22">i</S>]</span>
                  </Code.Line>
                </Code.Code>
                <Code.Description>
                  In this <C>for loop</C>, <S color="#922B21">i</S> is not set to the array values. <S
                  color="#922B21">i</S> is set to each index from 0 until the length of numbers,
                  denoted <C><S color="#123456">len(<S color="#922B21">numbers</S>)</S></C>. The loop will run 6 times and <S
                  color="#922B21">i</S> will be 0-5.
                </Code.Description>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="ifstatement" label="if statements">
            <p><C>if</C> statements control the program flow. Based on variables you can decide whether to run sections of code or not. 
            </p> 
            <p>
              There are multiple parts to an if statement: 
              <C> if</C>, <C>else</C>, and <C>elif</C>. 
              <C> if</C> is always at the start of the if statement. After the <C>if</C> keyword is a boolean expression. If the boolean expression is True the code within the if statement runs. If False, the code doesn't run. <C>elif</C> can be used after the first <C>if</C>. It will run when all of the conditionals above are False. If none of the <C>if</C> or <C>elif</C> statements are True above the <C>else</C> code will run. It can be used as a default if nothing is True. 
            </p>
            <Code.Wrapper>
              <Code.Title>
                Example if statement
              </Code.Title>
              <Code.Code>
                <Code.Line>
                  money = 1000
                </Code.Line>
                <Code.Line>
                <S color="rgb(50, 116, 166)">if</S> <S color="#0E6251">money > 1000000000</S>: <Code.Comment># You can use <C>1e9</C> for 1 billion</Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  print("You're a Billionaire!")
                </Code.Line>
                <Code.Line>
                <S color="rgb(50, 116, 166)">elif</S> <S color="#0E6251">money > 1000000</S>:
                </Code.Line> 
                <Code.Line tabs={1}> 
                  print("You're a Millionaire")
                </Code.Line>
                <Code.Line>
                <S color="rgb(50, 116, 166)">else:</S>
                </Code.Line>
                <Code.Line tabs={1}>
                  print("You're not a Millionaire or a Billionaire")
                </Code.Line>
              </Code.Code>
              <Code.Result>
                This example prints out whether you're a millionaire or not, based on the value of the money variable. The dark blue is the syntax for the <C>if</C> statement. The green is for the boolean expressions. If <C>money</C> was 1000, it would print "You're not a Millionaire or a Billionaire". If <C>money</C> was greater than 1 Billion it would print "You're a Billionaire!".
              </Code.Result>
            </Code.Wrapper>
            </SubSection>
          </TableOfContents>
        </Section>
        <Section link="commandline" label="Practice App 1: Command Line Calculator">
          <p>
            Command line programs are very common in Python.  Scripts are small programs, such as command line programs, that do a set of tasks. Scripts are most often used to save time doing repetitive tasks. Python is good for writing scripts, because it doesn't require a class framework like Java, and it can be run without compiling for faster iterations.
          </p>
          {/* <p>
            When I was a TA for an undergrad class we downloaded all the homework files for grading in a
            certain format. For each homework assigment we needed to make an excel file with the individuals
            name and email. I didn't want to spend 20 minutes every assignment individually
            making and filling in the excel documents, so I made a 40 line Python script that did everything
            for me. I gave it a folder of homework assignments, and it did the rest. It reduced a 20 minute task down to 1 second.  
          </p> */}
          <p>
            Start out by downloading the <Link href={"/files/commandline.py"} download >template file</Link>.
            The template file contains boiler plate code to get you started. Move the file into the folder you created earlier to run the Hello World program.
          </p>
          <p>
            The Calculator will take in two numbers and an operator from the user and calculate the output. In order to take in user input we use the <C>input</C> function.
          </p>
          <SubSection>
            <Code.Wrapper>
              <Code.Title>
                Part 1: Read User Input
              </Code.Title>
              We start by downloading the template and adding three lines of code. Each code uses input to retrieve one piece of information from the user. Then we display the data in the console using <C>print</C> to verify they were entered properly.
              <Code.Code>
                <Code.Line >
                  number1 = input("Enter Number 1: ")
                </Code.Line>
                <Code.Line >
                  number2 = input("Enter Number 2: ")
                </Code.Line>
                <Code.Line>
                  operator = input("Enter Operator (+, -, /, *): ")
                </Code.Line>
                <Code.Line >
                  print(number1, number2, operator)
                </Code.Line>
                
              </Code.Code>
              <Code.Description>
                Enter the above lines of code into your template file. Make sure to run "commandline.py" instead of main.py, and follow the <Link href="#howtorun">How to run code section.</Link> After starting the console you will be prompted to enter 2 numbers, and then an operator. The console will then print out the information you entered.
              </Code.Description>
            </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
                Part 2: Parse User Input
              </Code.Title>
              Since the <C>input</C> function returns a string. We need to parse the user input, so that we can use them as numbers.
              <Code.Code>
                <Code.Line>
                  number1 = float(number1)
                </Code.Line>
                <Code.Line>
                  number2 = float(number2)
                </Code.Line>
              </Code.Code>
              <Code.Description>
                Changes number1 and number2 from strings to floats.
              </Code.Description>
            </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
                Part 3: Process the Operator
              </Code.Title>
              After the user has entered in the data we need to process the numbers and operators to produce a result. We will use an if statement to process it.
            <Code.Code>
              <Code.Line>
                result = 0
              </Code.Line>
              <Code.Line>
              <S color="rgb(50, 116, 166)">if</S> <S color="#0E6251">operator == "+"</S>:
              </Code.Line>
              <Code.Line tabs={1}>
                result = number1 + number2
              </Code.Line>
              <Code.Line>
              <S color="rgb(50, 116, 166)">elif</S> <S color="#0E6251">operator == "-"</S>:
              </Code.Line>
              <Code.Line tabs={1}>
                result = number1 - number2
              </Code.Line>
              <Code.Line>
              <S color="rgb(50, 116, 166)">elif</S> <S color="#0E6251">operator == '/'</S>:

              </Code.Line>
              <Code.Line tabs={1}>
                result = number1 / number2
              </Code.Line>
              <Code.Line>
              <S color="rgb(50, 116, 166)">elif</S> <S color="#0E6251">operator == '*'</S>:
              </Code.Line>
              <Code.Line tabs={1}>
                result = number1 * number2
              </Code.Line>
              <br/>
              <Code.Line>
                print(result)
              </Code.Line>
            </Code.Code>
            <Code.Description>
                The above code is a multiple line if statement. It uses both <C>if</C> and <C>elif</C>. The if statement will go through until the operator matches, and then run the code inside. It uses the if statement to process the operator.
            </Code.Description>
          </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
              Putting Everything Together
              </Code.Title>
              Now that we have all three parts we can combine them into the same file to create the program. Make sure your file matches this code section and run the program. You have made your first calculator!
              <Code.Code>
                <Code.Line tabs={0}>
                  <Code.Comment># Part 1: Retrieve user input using the built-in <C>input</C> function</Code.Comment>
                  </Code.Line>
                  <Code.Line tabs={0}>
                  number1 = input("Enter Number 1: ")
                  </Code.Line>
                  <Code.Line tabs={0}>
                  number2 = input("Enter Number 2: ")
                  </Code.Line>
                  <Code.Line tabs={0}>
                  operator = input("Enter Operator (+, -, /, *): ")
                  </Code.Line>
                  <br/>
                  <Code.Line tabs={0}>
                  <Code.Comment># Part 2: Parse the input and turn the strings into integers</Code.Comment>
                  </Code.Line>
                  <Code.Line tabs={0}>
                  number1 = float(number1)
                  </Code.Line>
                  <Code.Line tabs={0}>
                  number2 = float(number2)
                  </Code.Line>
                  <br/>
                  <Code.Line tabs={0}>
                  <Code.Comment># Part 3: Process the Operator using an if statement.</Code.Comment>
                  </Code.Line>
                  <Code.Line tabs={0}>
                  result = 0
                  </Code.Line>
                  <Code.Line tabs={0}>
                  if operator == "+":
                  </Code.Line>
                  <Code.Line tabs={1}>
                  result = number1 + number2
                  </Code.Line>
                  <Code.Line tabs={0}>
                  elif operator == "-":
                  </Code.Line>
                  <Code.Line tabs={1}>
                  result = number1 - number2
                  </Code.Line>
                  <Code.Line tabs={0}>
                  elif operator == '/':
                  </Code.Line>
                  <Code.Line tabs={1}>
                  result = number1 / number2
                  </Code.Line>
                  <Code.Line tabs={0}>
                  elif operator == '*':
                  </Code.Line>
                  <Code.Line tabs={1}>
                  result = number1 * number2
                  </Code.Line>
                  <br/>
                  <Code.Line tabs={0}>
                  <Code.Comment># Display the result to console.</Code.Comment>
                  </Code.Line>
                  <Code.Line tabs={0}>
                  print(result)
                  </Code.Line>
                </Code.Code>
              <Code.Description>
                The calculation output will be printed to the console after the user enters the operator. 
              </Code.Description>
            </Code.Wrapper>
        </SubSection>
       

        </Section>
        <Section link="turtles" label="Turtle Module">
        <p>
          The <Link href="https://docs.Python.org/3/library/turtle.html#module-turtle">turtle module</Link> is used for creating simple graphics. You control a turtle and move it around the screen. As it moves it draws a line behind it. Using this simple device you can draw a lot of cool stuff. There are a lot of cool art designs possible with spiral patterns. Check out the turtle examples below to see what crazy stuff you can do with turtles. 
        </p>
        <Code.Wrapper>
          <Code.Title>
            Turtle Examples
          </Code.Title>
            Python has a lot of built in turtle examples. Check out <Link href="https://docs.Python.org/3/library/turtle.html#module-turtledemo">this page</Link> to see all the examples and how to run them.
        </Code.Wrapper>
        <TableOfContents noNumbers fontSize={"20px"} >
          <SubSection link="turtlecommands" label="Turtle Commands">
            <p>
              The first step to becoming the master of turtle graphics is creating a turtle. Once created, a turtle has a set of commands that you can use to move it around the screen. 
            </p>
            <Code.Wrapper>
              <Code.Title>
                Creating a turtle
              </Code.Title>
              <Code.Code>
                bob_the_turtle = turtle.Turtle()
              </Code.Code>
              <Code.Result>
                Now that the turtle is made you can use the following commands to move the turtle around. A full list of commands is available <Link href="https://docs.Python.org/3/library/turtle.html#turtle-motion">here</Link>.
              </Code.Result>
            </Code.Wrapper>
            <Code.Title>
              
            </Code.Title>
            <CardDeck>
            <CodeSnip.Snip title="forward(distance)" label="Move Forward" >
              Moves the turtle forward a specified amount of units.
              <CodeSnip.Example>
                bob_the_turtle.forward(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Moves bob_the_turtle foward 10 units.
              </CodeSnip.Result>
            </CodeSnip.Snip>
            <CodeSnip.Snip title="right(angle)" label="Turn Right" >
              Turns the turtle angle degrees to the right. There are 360 degrees in an entire circle. 
              <CodeSnip.Example>
                bob_the_turtle.right(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Turns the turtle 10 degrees to the right.
              </CodeSnip.Result>
            </CodeSnip.Snip>
            <CodeSnip.Snip title="left(angle)" label="Turn Left" >
              Turns the turtle angle degrees to the left. There are 360 degrees in an entire circle.  
              <CodeSnip.Example>
                bob_the_turtle.left(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Turns the turtle 10 degrees to the left. 
              </CodeSnip.Result>
            </CodeSnip.Snip>
            </CardDeck>
            <CardDeck>
              <CodeSnip.Snip title="pencolor(color)" label="Pen Color" >
                Changes the turtle pen color. Takes in a color string such as "blue", "red", "green", or "yellow". <Link href="https://ecsdtech.com/8-pages/121-Python-turtle-colors">Here</Link> is a list of all available colors.
                <CodeSnip.Example>
                  bob_the_turtle.pencolor("blue")
                </CodeSnip.Example>
                <CodeSnip.Result>
                  Changes the turtle pen color to blue.
                </CodeSnip.Result>
              </CodeSnip.Snip>
              <CodeSnip.Snip title="pensize(size)" label="Pen Size" >
                Changes the turtle pen size. 
                <CodeSnip.Example>
                  bob_the_turtle.pencolor(20)
                </CodeSnip.Example>
                <CodeSnip.Result>
                  The pen size is now 20. 
                </CodeSnip.Result>
              </CodeSnip.Snip>
            </CardDeck>
          </SubSection>
          <SubSection  label="Turtle Project 1: Turtle Circle">
            <p>
              In this first project we will create a simple circle. This will build off everything you have read until this point. Well, we aren't creating a true circle, just something that looks like a circle, kinda. The best we can do is create a many sided shape. We do this by drawing a straight line, turning a little but and drawing another line. Assuming we move the same distance every time and turn the same amount we'll eventually make it make to the start, creating a circle. 
            </p>
            <p>
              Create a new python file and try creating a circle. Try not to cheat by looking at the code below. 
            </p>
            <Code.Wrapper>
              <Code.Title>
                Circle Code
              </Code.Title>
              Go through each line and make sure you understand it. It's one thing to read it over, another to really understand it. 
              <Code.Code notVisible>
                <Code.Line>
                  import turtle <Code.Comment># Imports the turtle module</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  bob_the_turtle = turtle.Turtle() <Code.Comment># Imports the turtle module</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Comment># Create a for loop to draw the pieces of the circle.</Code.Comment>
                <Code.Line>
                  for i in range(1000): 
                </Code.Line>
                
                <Code.Line tabs={1}>
                  <Code.Comment># Move the turtle forward 10</Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  bob_the_turtle.forward(10)
                </Code.Line>
                <Code.Line tabs={1}>
                  <Code.Comment># Turn the turtle right degrees 5</Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  bob_the_turtle.left(5)
                </Code.Line>
                <br/>
                <Code.Line>
                  turtle.done()
                </Code.Line>
              </Code.Code>
            </Code.Wrapper>
          </SubSection>
          <SubSection link="turtlespiral" label="Turtle Project 2: Colored Spiral">
          <div style={{backgroundImage: "url(/files/turtlespiral.png)", width: "100%", "height": "200px", backgroundPosition: "center"}}>
          </div>
          <p>
            Let's make the circle a little more exciting. We are going to turn it into a spiral that changes colors. A spiral is created by a drawing a circle of increasing radius or size. We are actually drawing a many sided shape that looks like a circle. In a many sided shape two values that determine size are side length and corner angle. If we increase side length every time we move the size increases. The new code below shows this change. 
          </p>
          <p>
            We also need to change the color for every line segment. Below I created a list of colors we want to use. Everytime we move foward we change bob's pen color using the <C>pencolor</C> command. We set the color based on the <C>color_index</C>. Everytime the for loop runs it increments the variable <C>i</C>. By using modulus (<C>%</C>) we can reduce <C>i</C> down to a number between 0 and 5 to index into the colors list. 
          </p>
          <p>
            Try creating a colorful spiral on your own. It'll be challenging. When you finish or, if you get stuck look at the code below.
          </p>
          <Code.Wrapper>
              <Code.Title>
                Spiral Code
              </Code.Title>
              <Code.Code notVisible> 
                <Code.Line tabs={0}>
                import turtle
                </Code.Line>
                <br/>
                <Code.Line tabs={0}>
                <Code.Comment># Create lists of colors</Code.Comment>
                </Code.Line>
                <Code.Line tabs={0}>
                colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
                </Code.Line>
                <br/>
                <Code.Line tabs={0}>
                <Code.Comment># Create turtle and initialize pen size and pen color</Code.Comment>
                </Code.Line>
                <Code.Line tabs={0}>
                bob_the_turtle = turtle.Turtle()
                </Code.Line>
                <Code.Line tabs={0}>
                bob_the_turtle.pensize(30)
                </Code.Line>
                <Code.Line tabs={0}>
                bob_the_turtle.pencolor("red")
                </Code.Line>
                <br/>
                <Code.Line tabs={0}>
                  <Code.Comment># Set initial forward distance movement</Code.Comment>
                </Code.Line>
                <Code.Line tabs={0}>
                forward_distance = 20
                </Code.Line>
                <br/>
                <Code.Line tabs={0}>
                for i in range(1000):
                </Code.Line>
                <Code.Line tabs={1}>
                  <Code.Comment>
                    # Move turtle foward and turn
                  </Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  bob_the_turtle.forward(forward_distance)
                </Code.Line>
                <Code.Line tabs={1}>
                  bob_the_turtle.left(29)
                </Code.Line>
                <br/>
                <Code.Line tabs={1}>
                  <Code.Comment># Calculate color_index</Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  <Code.Comment># Using modulus on i, the movement counter, changes it into a value </Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  <Code.Comment># between 0 and 5 to index into the color list</Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                color_index = i % len(colors)
                </Code.Line>
                <Code.Line tabs={1}>
                  color = colors[color_index] <Code.Comment># Get color from colors using color_index</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line tabs={1}>
                  <Code.Comment>
                    # Set color 
                  </Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                bob_the_turtle.pencolor(color)
                </Code.Line>
                <br/>
                <Code.Line tabs={1}>
                  <Code.Comment>
                    # Increase foward distance by 1 to create spiral
                  </Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                forward_distance += 1
                </Code.Line>
                <br/>
                <Code.Line tabs={0}>
                <Code.Comment># Make program wait before closing</Code.Comment>
                </Code.Line>
                <Code.Line tabs={0}>
                turtle.done()
                </Code.Line>
                </Code.Code>
            </Code.Wrapper>
          </SubSection>
        </TableOfContents>
        </Section>
        <Section link="modules" label="Built-in Python Modules">
        <p> Python has a lot of very useful modules built into the source code. Here are the most popular. </p>
          
          <CardDeck>
            <CodeSnip.Snip title="import math" subtitle="Math Module"
            subtitleLink="https://docs.Python.org/3/library/math.html?highlight=math#module-math">
              Calculates more complex math functions such as Trignometry, factorial, square root, exponents, Pi, e, logarithms, and rounding functions like floor and ceiling.
            </CodeSnip.Snip>
            <CodeSnip.Snip title="import random" subtitle="Random Module" subtitleLink="https://docs.Python.org/3/library/random.html?highlight=random#module-random">
              Generates pseudo-random numbers. Can generate random integers or floats. Not truly random, but good enough for simple programs. 
            </CodeSnip.Snip>
          </CardDeck>
          <CardDeck>
            <CodeSnip.Snip title='import time' subtitle="Time Module" 
            subtitleLink="https://docs.Python.org/3/library/time.html?highlight=time#module-time">
              Used for any calculations that require time. Can be used to get the current time, or format time to make it more readable. Time functions is never something you want to program yourself. It is more complex than you can possibly imagine. 
            </CodeSnip.Snip>
            <CodeSnip.Snip title='import statistics' subtitle="Statistics Module" subtitleLink="https://docs.Python.org/3/library/statistics.html?highlight=statistics#module-statistics">
              Calculate various statistics on a list. Some of the available functions cover mean, median, mode, quantiles, standard deviation, and variance. 
            </CodeSnip.Snip>    
          </CardDeck>
          <CardDeck>
            <CodeSnip.Snip title="import sys" subtitle="System Module"
            subtitleLink="https://docs.Python.org/3/library/sys.html?highlight=sys#module-sys">
              Can be used to access command line arguments. A module that provides access to interpreter variables. 
            </CodeSnip.Snip>
            <CodeSnip.Snip title="import email" subtitle="Emailing Library" subtitleLink="https://docs.Python.org/3/library/email.examples.html#email-examples">
              <p>
                Read, write, and send simple email messages. The link provides an example to work from. 
              </p>
            </CodeSnip.Snip>
          </CardDeck>
        </Section>
        <Section link="projects" label="Projects">
          <Table >
            <thead>
              <tr>
                <th>
                    Project Name
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
                      Count The Characters
                  </td>
                  <td>
                      Count how many times each character appears in a long string. 
                  </td>
                  <td>
                      Easy
                  </td>
                  <td>
                      15min-30min
                  </td>
              </tr>
              <tr>
                  <td>
                      Complex Calculator
                  </td>
                  <td>
                      Add on the the calculator above and use the <C>math</C> library to add more capabilities such as sqrt, power, and more.
                  </td>
                  <td>
                      Easy
                  </td>
                  <td>
                      10-20min
                  </td>
              </tr>
              <tr>
                  <td>
                      Command Line Calculator
                  </td>
                  <td>
                      Add the ability to specify the calculator commands in the command line when you call the function. For example: python3 commandline.py 10 20 * would print 200.
                  </td>
                  <td>
                      Easy
                  </td>
                  <td>
                      20-30min
                  </td>
              </tr>
              <tr>
                  <td>
                      Number Guessing Game
                  </td>
                  <td>
                      Generate a random number and let the user type guesses in the console. After each guess say whether they were too high or low.  Hint: use the <C>random</C> library.
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
                      Caesar Cipher
                  </td>
                  <td>
                      Create a program that can encrypt and decrypt Caesar Cipher text. Allow any offset to be used. 
                  </td>
                  <td>
                      Medium
                  </td>
                  <td>
                      1-2hrs
                  </td>
              </tr>
              <tr>
                  <td>
                      Snake
                  </td>
                  <td>
                      Create snake using the turtle module.
                  </td>
                  <td>
                      Hard
                  </td>
                  <td>
                      8-10hrs
                  </td>
                </tr> 
              <tr>
                  <td>
                      Tkinter calculator
                  </td>
                  <td>
                  Create a simple calculator with tkinter. Tkinter is the built-in interface module for Python.
                  </td>
                  <td>
                      Hard
                  </td>
                  <td>
                      4-8hrs
                  </td>
              </tr>  
              <tr>
                  <td>
                      Text Adventure Game
                  </td>
                  <td>
                      Create a text adventure game in the console.
                  </td>
                  <td>
                      Hard
                  </td>
                  <td>
                      15-20hrs
                  </td>
              </tr>
              <tr>
                  <td>
                      Analog Clock
                  </td>
                  <td>
                      Create an Analog clock for the current time with turtles.
                  </td>
                  <td>
                      Hard
                  </td>
                  <td>
                      15-20hrs
                  </td>
              </tr>
           </tbody>
          </Table>
        </Section>
        <Section link="nextsteps" label="Next Steps">
          <p>
            You now have a good idea of the basic components of Python. Try to work through the easy projects above and if you feel good go for the medium projects. Move on to the Advanced Python Tutorial (Coming Soon!) to learn more about what Python can do. 
          </p>
          <p>
            If you have another project in mind that requires any of the following categories, or anything like them look through the links to find a library to help you. Most good libraries have a decent learning curve, but once learned they are very powerful.
          </p>
          <p>
            Python has many faces. It is capable at web development and and state of the art Deep Learning. Python's huge amount of open source libraries allow it to do almost anything. Django is used for backend web development. Pytorch and Tensorflow are used for deep learning. Numpy is for linear algebra. Python Image Library (PIL) is for image processing. Pandas and Matplotlib are for data science. Continue to my Advanced Python tutorial to start learning the tools needed to code with these libraries.
          </p>
          <Code.Title>
            Data Aquisition, Processing, and Manipulation
          </Code.Title>
          <ul>
            <li>
              <Link href="https://pandas.pydata.org//">Pandas - Read/Write/Editing csv's and data</Link>
            </li>
            <li>
              <Link href="https://docs.Python.org/3/library/csv.html">csv module - read and write csv</Link>
            </li>
            <li>
              <Link href="https://openpyxl.readthedocs.io/en/stable/">openpyxl - Excel Changing</Link>
            </li>
            <li>
              <Link href="https://requests.readthedocs.io/en/master/">Requests - HTTP requests</Link>
            </li>
            <li>
              <Link href="https://docs.Python.org/3/library/json.html">JSON Module - Reading, Writing, and Parsing JSON </Link>
            </li>
            <li>
              <Link href="https://docs.Python.org/3/library/urllib.html">urllib module- HTTP request</Link>
            </li>
            <li>
              <Link href="">os - File/Folder/Command line processing</Link>
            </li>
          </ul>
          <Code.Title>
            Machine Learning and Deep Learning
          </Code.Title>
          <ul>
            <li>
              <Link href="https://pytorch.org/">Pytorch - Deep Learning and Autograd</Link>
            </li>
            <li>
              <Link href="https://www.tensorflow.org/">Tensorflow - Deep Learning and Machine Learning</Link>
            </li>
            <li>
              <Link href="https://keras.io/">Keras - Built on top of Tensorflow</Link>
            </li>
            <li>
              <Link href="https://numpy.org/">Numpy - Math and Linear Algebrad</Link>
            </li>
            <li>
              <Link href="https://scikit-learn.org/stable/">Scikit-Learn - Machine Learning </Link>
            </li>
            <li>
              <Link href="http://deeplearning.net/software/theano/">Theano - Array calculations heavily optimized</Link>
            </li>
          </ul>
          <Code.Title>
            Data Visualization and Graphics
          </Code.Title>
          <ul>
            <li>
              <Link href="https://matplotlib.org/">Matplotlib - Graphing and 3D Visualization </Link>
            </li>
            <li>
              <Link href="https://seaborn.pydata.org/">Seaborn - statistical data visualization</Link>
            </li>
            <li>
              <Link href="https://plot.ly/Python/">Plotly - Graphing</Link>
            </li>
            <li>
              <Link href="https://py.processing.org/">Processing - simple but powerful graphics library</Link>
            </li>
         
          </ul>
          <Code.Title>
            Web Development
          </Code.Title>
          <ul>
            <li>
              <Link href="https://matplotlib.org/">Django - Backend server framework, interfaces with databases</Link>
            </li>
            <li>
              <Link href="https://www.fullstackPython.com/flask.html">Flask - Lightweight server framework</Link>
            </li>
            <li>
              <Link href="https://cherrypy.org/">CherryPy - Minimalist Web Framework</Link>
            </li>
            <li>
              <Link href="https://py.processing.org/">Processing - simple but powerful graphics library</Link>
            </li>
            <li>
              <Link href="https://bottlepy.org/docs/dev/">Bottle.py - Lighweight micro web framework</Link>
            </li>
          </ul>
          <Code.Title>
            User Interfaces
          </Code.Title>
          <ul>
            <li>
              <Link href="https://docs.Python.org/3/library/tkinter.html">Tkinter - Built-in user interface module</Link>
            </li>
            <li>
              <Link href="https://www.pygame.org/news">Pygame - Intro to game programming</Link>
            </li>
            <li>
              <Link href="https://kivy.org/#home">Kivy - Cross platform </Link>
            </li>
            <li>
              <Link href="https://wxPython.org/">wxPython - Cross-platform GUI toolkit</Link>
            </li>
          </ul>
        </Section>
      </TableOfContents>
    </div>
  )
}