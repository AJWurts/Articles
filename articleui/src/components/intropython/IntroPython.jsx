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
      <h4>
        A minimal guide to get you started.
      </h4>
      <TableOfContents>
        <Section link="starting" label="Getting Started">
          <p>
            So you want to learn Python. You made a good choice. From my experience teaching undergrad
            classes, Python is the language people pick up most easily. Partially because it is much harder to get stuck on
            small issues, like types, and incorrect syntax. It's simple syntax greatly helps learners. There are a few languages where a valid line if code creates a readable
            english sentence. Python is one of them.
          </p>
        </Section>
        <Section link="downloading" label="How to download and run Python">
          <p>
            This tutorial uses Python 3.6, but 3.7, and 3.8 will work too. Some programs use Python 2.7, but
            a large majority use Python 3+. The differences are minmal, but as of 2019 Python 3 is the
            better one to learn.
          </p>
          <p>
            Click <Link href="https://www.Python.org/downloads/">here</Link> to download Python. Download
            the newest stable version. Once downloaded double click to launch it and step through the
            installation wizard.
          </p>
          <p>
            Once complete you should have access to the Python3 command in your terminal. We will go through how to run a Python file soon. 
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
            <ListItem link="https://atom.io/">
              IDLE - Built-in Python editor. Good for simple scripts, but no advanced features.  
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
            A dark window should now be open. On the left side will be a sidebar showing all your files, you haven't made any yet, so there is nothing there. In the middle is where the code will show up. On the bottom is where a terminal will open eventually.
          </p>
          <h5>Part 2: Create a new Python file</h5>
          <ol>
            <li> In VS Code  press: command + n on mac, or control + n on windows to create a new file. A new untitled file will open.</li> 
            <li> Press command + s on mac, or control + s to save the file.</li> 
            <li>
            A box will popup asking you to name the file. Name it main.py.
            </li>
          </ol>
          <h5>Part 3: Run the Python file </h5>
          <ol>
            <li>
              Add: <C>print("Hello World")</C> to the top of the Python file
            </li>
            <li>
              Press: control + ` (the button to the left of 1). This will open a terminal.
            </li>
            <li>
              Type: Python3 main.py 
            </li>
            <li>
              You should see: Hello World in the console.
            </li>
          </ol>
          <p>
            If you get an error, and it says Python3 is not  a valid command. Go here to troubleshoot. 
          </p>
        </Section>
        <Section link="syntax" label="Syntax">
          <p>
            Python syntax is minimal relative to Java or C. It uses whitespace instead of curly brackets to define code blocks, like many other languages. Whitespace is very important in Python. All code sections need to be tabbed properly in order for the code to run.
          </p>
          <p>
            In this section we will go over the syntax that makes up Python, and how to read Python code.
          </p>
          <Code.Wrapper>
            <Code.Title>Example Python Code</Code.Title>
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
                Variables are used to store values. In Python you don't need to explicity define what
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
                <Code.Code>
                  <Code.Line>
                    integer1 = 10 # An <span
                    style={{color: 'rgb(40, 116, 166)'}}>Integer</span> is any number with out
                    decimals.
                  </Code.Line>
                  <Code.Line>
                    string1 = "hello" # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>String</span> is a sequence of characters.
                  </Code.Line>
                  <Code.Line>
                    float1 = 1.88 # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Float</span> is any number with decimal
                    places.
                  </Code.Line>
                  <Code.Line>
                    bool1 = True # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Boolean</span> is either True or False.
                  </Code.Line>
                  <Code.Line>
                    list1 = [0,1,2,3,4,5] # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>List</span> contains a sequence of values. <C>list1</C> is a list of integers.
                  </Code.Line>
                  <Code.Line>
                    dict1 = {`{`}"Apple": "Fruit", "Corn": "Vegetable"} # A <span
                    style={{color: 'rgb(40, 116, 166)'}}>Dictionary</span> contains Key and Value pairs.
                  </Code.Line>
                </Code.Code>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="syntax-operators" label="Operators">
              <p>
                Operators are used to combine and maniuplate variables. Here are the four main types.
              </p>
              Math operators behave like the standard math operations.
              <ul>
                <li><C>+</C> - Addition. <C>{`5 + 5`}</C> returns <C>10</C></li>
                <li><C>-</C> - Subtraction. <C>{`5 - 3`}</C> returns <C>2</C></li>
                <li><C>/</C> - Division. <C>{`10 / 5`}</C> returns <C>2</C></li>
                <li><C>//</C> - Integer Division. <C>{`10 / 3`}</C> returns <C>3</C>. It divides 10 by 3
                  then truncates the decimal places leaving 3.
                </li>
                <li><C>*</C> - Multiplication. <C>{`10 * 2.5`}</C> returns <C>25</C>. All operators work
                  for integers and floats.
                </li>
                <li><C>%</C> - Modulus. The remainder operator. Takes the remainder after
                  division. <C>{`12 % 5`}</C> returns <C>2</C> because 12 / 5 = 10 remainder <C>2</C>.
                </li>
              </ul>
              Comparison operators compare two variables and return a boolean.
              <ul>
                <li><C>{`<`}</C> - less than. <C>{`3 < 5`}</C> returns <C>true</C></li>
                <li><C>{`>`}</C> - greater
                  than. <C>{`7 > 5`}</C> returns <C>true</C>. <C>{`5 > 5`}</C> returns <C>false</C>
                </li>
                <li><C>{`>=`}</C> - greater than or equal. <C>{`5 >= 5`}</C> returns <C>true</C></li>
                <li><C>{`<=`}</C> - less than or equal. <C>{`5 <= 6`}</C> returns <C>true</C></li>
                <li><C>{`==`}</C> - equals. <C>{`3 == 5`}</C> returns <C>false</C>.</li>

              </ul>
              Boolean Operators combine one or two booleans and return a boolean.
              <ul>
                <li><C>{`not`}</C> - not. Changes a boolean to the opposite
                  state. <C>{`not true`}</C> returns <C>false</C></li>
                <li><C>{`and`}</C> - and. if both are true returns
                  true. <C>{`true and true`}</C> returns <C>true</C></li>
                <li><C>{`or`}</C> - or. if either are true returns
                  true. <C>{`true or false`}</C> returns <C>true</C></li>
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
                <li><C>{'%='}</C> - applies modulus and updates. <C>apples %= 10</C> finds the remainder with respect to 10 and saves it to apples
                </li>
              </ul>

            </SubSection>
            <SubSection link={'syntax-functions'} label={"Functions"}>
              <p>
                Functions are used to perform specific tasks. A example function could be one that
                displays
                "Hello World" to the user. Every function has input values, called parameters, and most
                have
                output values, called return values.
              </p>
              <p>
                Parameters are values passed to the function, so it can perform a calculation or task.
                Once
                the
                function is complete it returns a value. Functions are used on tasks repeated
                often to reduce writing the same code more than once. They are also used as callbacks
                when a user interacts with the page. Functions can have multiple
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
                  function adds 1 to number then returns it. The output in the console in this case is
                  11.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  Built-in functions
                </Code.Title>
                Built-in functions are functions defined in the standard Python library. They are accessible without any imports. Here are popular ones, and <Link href="https://docs.Python.org/3/library/functions.html">here</Link> are all of them
                <CardDeck>
                  <CodeSnip.Snip title="len" subtitle="Length">
                    Returns length of an object. Most common use is to find the length of a list.
                    <CodeSnip.Example>
                      len(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      The code would return an integer with the length of the list.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="min" subtitle="Minimum">
                    Returns the minimum of a list, or all parameters.
                    <CodeSnip.Example>
                      min(var1, var2, var3)
                      <br/>
                      min(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Both are valid ways to call min. Example one will return either var1,var2, or var3 based on which is smallest. Example 2 will return the smallest value in list1.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="max" subtitle="Maximum">
                    Returns the maximum of a list, or all parameters.
                    <CodeSnip.Example>
                      max(var1, var2, var3)
                      <br/>
                      max(list1)
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Example one will return either var1,var2, or var3 based on which is largest. Example 2 will return the largest value in list1.
                    </CodeSnip.Result>
                  </CodeSnip.Snip>
                </CardDeck>
                <CardDeck>
                  <CodeSnip.Snip title="sum" subtitle="Summation">
                    Adds up all values in a list.
                    <CodeSnip.Example>
                      sum([1,2,4,5,6]) 
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Returns {1+2+4+5+6} which is the sum of all values in list1.
                    </CodeSnip.Result>

                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="int" subtitle="To Integer">
                    Turns the input into an integer. Takes in either a float, a string, or another integer. If the result number has decimal places, it removes them. Most often used with strings.
                    <CodeSnip.Example>
                      int(10.05) # equals 10
                      <br/>
                      int("23") # equals 23
                    </CodeSnip.Example>
                    <CodeSnip.Result>
                      Example 1 returns 10. Example 2 returns 23.
                    </CodeSnip.Result>

                  </CodeSnip.Snip>
                  <CodeSnip.Snip title="float" subtitle="To Float">
                    Turns the input into a float. Takes in a string, integer, or other floats. Most often used with strings.
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
                <CodeSnip.Snip title="sorted" subtitle="Sorting">
                  Sorts a list and returns the sorted list.
                  <CodeSnip.Example>
                    result = sorted([1,3,4,2,0])
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>result</C> now equals the array passed in, sorted in ascending order:
                    <C> [0,1,2,3,4]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
                <CodeSnip.Snip title="range" subtitle="Range Function">
                  Return all integers between a starting point, and an ending point. The starting point is included in the range, and the end point is not. 
                  <CodeSnip.Example>
                    for i in range(4): <br/>
                    <span>    print(i)</span> 
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>result</C> now equals the array passed in, sorted in ascending order:
                    <C> [0,1,2,3,4]</C>
                  </CodeSnip.Result>
                </CodeSnip.Snip>
                </CardDeck> 
                <CardDeck>
                <CodeSnip.Snip title={"input"} subtitle={"Input Function"}>
                  Takes in a string, displays the string to the user in the console and waits for the user to type something into the console and press enter. It always returns a <b>string</b>.
                  <CodeSnip.Example>
                    user_input = input("Enter your name:")
                  </CodeSnip.Example>
                  <CodeSnip.Result>
                    <C>user_input</C> is now equal to whatever the user typed in the terminal.
                  </CodeSnip.Result>


                </CodeSnip.Snip>

                </CardDeck>
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
                    <Code.Comment># When run the parameters will be equal to the
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
                  The function equation has an <C>x</C>, <C>m</C> and <C>b</C> paramter. <C>m</C>,
                  and <C>b</C> are optional. When you call the function and do not set them they are
                  by default 2 and 10 respectively. <C>x</C> must be specified everytime the function
                  is called. Below the function definition are valid ways to call the function.
                </Code.Description>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="syntax-lists" label="Lists">
              <p>
                Lists are a way of holding data in a sequence, where order matters. It is a type of data structure. Lists can hold any type of data. List are used in all different types of programs to hold data for grocery receipts up to neural network data.
              </p>
              <p>
                Lists are defined by a set of square brackets, one at the start and one at the end.
              </p>
              <Code.Wrapper>
                <Code.Title>
                  Creating a List
                </Code.Title>
                <Code.Code>
                
                <Code.Line>
                  list1 = [0,1,2,3,4,5]
                </Code.Line>
               
                <Code.Line>
                list2 = [1.5, "3.6", 1, "apples"]  <Code.Comment># Lists can hold variables of different types, but this is not recommended because it is difficult to deal with.</Code.Comment>
                </Code.Line>
                <Code.Line>
                  empty_list = [] <Code.Comment># If nothing is between the list is empty.</Code.Comment>
                </Code.Line>
                </Code.Code>
                <Code.Description>
                  Both examples create a list. The first creates a list with numbers 0,1,2,3,4,5 the second list is empty. 
                </Code.Description>
              </Code.Wrapper>
              
              <Code.Wrapper>
                <Code.Title>
                  Adding to a list
                </Code.Title>
                Values are added to the end of a list using the <C>append</C> method.
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
                  Accesses the 0th and 2nd index of the letters list. After the code runs, letter_a equals "a" and char_c equals "c".
                </Code.Description>
              </Code.Wrapper>
              <Code.Title>
                Built-in list methods
              </Code.Title>
              These are the most used methods on lists.
              <CardDeck>
                  <CodeSnip.Snip title="append" subtitle="Append Item">
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
                  <CodeSnip.Snip title="index" subtitle="Find Item Index">
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
                <CodeSnip.Snip title="sort" subtitle="Sort list">
                  <C>sort</C> sorts the values in the list, in ascending order. Ascending means smallest first, and largest last. 
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
                <CodeSnip.Snip title="clear" subtitle="Removes all items from list">
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
      
                <CodeSnip.Snip title="remove" subtitle="Remove one item from the list">
                  <C>remove</C> deletes one item from the list. It uses the item index to delete the item.
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
                Dictionaries in Python are created using curly brackets. <C>{`{}`}</C> defines an empty dictionary. Key and value pairs can be added. Look at the code example below. The key and value can be different data types. Any data type can be a key, and the same for value. 
              </p>
              <Code.Wrapper>
                <Code.Title>
                  Creating a dictionary
                </Code.Title>
                <Code.Code>
                  <Code.Line>
                    dict1 = {`{`}<S color="rgb(40, 116, 166)">"apple"</S>: <S color="rgb(230, 126, 34)">"fruit"</S>, <S color="rgb(40, 116, 166)">"broccoli"</S>: <S color="rgb(230, 126, 34)">"vegetable"</S>}`}
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
                  Adding a value to a dict
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
                  <C>dict1</C> creates an empty dictionary. Then the key <C>'apple'</C> is added with the value <C>"fruit"</C>. After the above code runs, <C>dict1</C> will have two key pair values, one for apple, one for 10. 
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
              <CardDeck>
                <CodeSnip.Snip title="values" subtitle="Values List">
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
                <CodeSnip.Snip title="keys" subtitle="Keys List">
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
                loops are used when the finish condition is not known at the start.
              </p>
              <p>
                Python has two main formats, one iterates directly over a list, and the other iterates
                over a range iterator. The first type, direct iteration, is used when the index of an item is not needed. The second type iterates using the Range function.
                
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
                  The above code is used find the sum of the numbers in <C>array1</C>. The for loop
                  iterates over <C>array1</C>. The first time the loop runs <S
                  color='#922B21'>val</S> is set to 0. <S color='#922B21'>val</S> is added to sum, and
                  sum is updated to 1. On the second iteration the <S color='#922B21'>val</S> is set
                  to 2, and sum is updated to 3. After the final iteration sum will be 18.
                </Code.Description>
              </Code.Wrapper>
              <Code.Wrapper>
                <Code.Title>
                  For Loop: Range
                </Code.Title>
                This for loop uses two built-in functions, <C>range</C>, and <C>len</C>. <C>len</C> is
                used to calculate the length of a alist. 
                <Code.Code>
                  <Code.Line>
                  array1 = [1,2,4,5,6]
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
                  In this <C>for loop</C>, <S color="#922B21">i</S> is not set to the array values. <S
                  color="#922B21">i</S> is set to each index from 0 until the length of array1,
                  denoted <S color='#0E6251'>len(array1)</S>. The loop will run 6 times and <S
                  color="#922B21">i</S> will be 0-5.
                </Code.Description>
              </Code.Wrapper>
            </SubSection>
            <SubSection link="ifstatement" label="if statements">
            <p>If statements control the program flow. Based on variables you can decide whether to run sections of code or not. 
            </p> 
            <p>
              There are multiple parts to an if statement. 
              <C> if</C>, <C>else</C>, and <C>elif</C>. 
              <C> if</C> is always at the start of the if statement. After the <C>if</C> secion is a boolean. If the boolean is true the code within the if statement runs. If false, the code doesn't run. <C>elif</C> can be used after the first <C>if</C>. It will run when all of the conditionals above are false. If none of the <C>if</C> or <C>elif</C> statements are true above the <C>else</C> code will run. It can be used as a default if nothing is true. 
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
                <S color="rgb(50, 116, 166)">if</S> <S color="#0E6251">money > 1000000000</S>:
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
                  print("You're not a Millionaire")
                </Code.Line>
              </Code.Code>
              <Code.Result>
                This example prints out whether you're a millionaire or not, based on the value of the money variable. The dark blue is sthe syntax for the if statement. The green are for the boolean statements. If <C>money</C> was 1000, it would print "You're not a Millionaire". If <C>money</C> was greater than 1 Billion it would print "You're a Billionaire!"."
              </Code.Result>
            </Code.Wrapper>
            </SubSection>
          </TableOfContents>
        </Section>
        <Section link="commandline" label="Practice App 1: Command Line Calculator">
          <p>
            Command line programs are very common in Python.  Scripts are small programs, such as command line programs, that do a set of tasks. Scripts are most often used to save time doing repetitive tasks. Python is good for writing scripts.
          </p>
          <p>
            When I was a TA for an undergrad class we downloaded all the homework files for grading in a
            certain format. For each homework assigment we needed to make an excel file with the individuals
            name and email. I didn't want to spend 20 minutes every assignment individually
            making and filling in the excel documents, so I made a 40 line Python script that did everything
            for me. I gave it a folder of homework assignments, and it did the rest. It reduced a 20 minute task down to 1 second.  
          </p>
          <p>
            Start out by downloading the <Link href={"/files/commandline.py"} download >template file</Link>.
            The template file contains boiler plate code to get you started. Open IDLE then click file, open, then browse to find the downloaded file and open it. Once IDLE opens make sure it says Python 3 or higher on the top bar. If it doesn't 
          </p>
          <p>
            The Calculator will take in two numbers and an operator for the user and calculate the output. In order to take in user input we use the <C>input</C> function.
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
                Enter the above lines of code into your template file. Then follow the running instructions from the <Link href="#howtorun">How to run code section.</Link>. A terminal on the bottom of the window will open and you will be prompted to enter 2 numbers, and then an operator. The terminal will then print out the information you entered.
              </Code.Description>
            </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
                Part 2: Parse User Input
              </Code.Title>
              Since the <C>input</C> function returns a string. We need to parse the user number inputs, so that we can use them as numbers.
              <Code.Code>
                <Code.Line>
                  number1 = int(number1)
                </Code.Line>
                <Code.Line>
                  number2 = int(number2)
                </Code.Line>
              </Code.Code>
              <Code.Description>
                Changes number1 and number2 from a string to an integer.
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
                The above code is a multiple line if statement. It uses both <C>if</C> and <C>elif</C>. The if statement will go through until the operator matches, and then run the code inside. It sues the if statement to process the operator.
            </Code.Description>
          </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
              Putting Everything Together
              </Code.Title>
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
                  number1 = int(number1)
                  </Code.Line>
                  <Code.Line tabs={0}>
                  number2 = int(number2)
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
          The turtle module is used for creating simple graphics. You control a turtle and move it around the screen. As it moves it draws a line behind it.
        </p>
        <Code.Wrapper>
          <Code.Title>
            Turtle Examples
          </Code.Title>
            Python has a lot of built in turtle examples. Check out <Link href="https://docs.python.org/3/library/turtle.html#module-turtledemo">this page</Link> to see all the examples and how to run them.
        </Code.Wrapper>
        <TableOfContents noNumbers fontSize={"20px"} >
          <SubSection link="turtlecommands" label="Turtle Commands">
            <p>
              The first step to turtle is creating a turtle. Once created a turtle has a set of commands that you can use to move it around the screen. 
            </p>
            <Code.Wrapper>
              <Code.Title>
                Creating a turtle
              </Code.Title>
              <Code.Code>
                bob_the_turtle = turtle.Turtle()
              </Code.Code>
              <Code.Result>
                Now that the turtle is made you can use the following commands to move the turtle around. 
              </Code.Result>
            </Code.Wrapper>
            <Code.Title>
              
            </Code.Title>
            <CardDeck>
            <CodeSnip.Snip title="forward" label="Move Forward" >
              Moves the turtle forward a specified amount of units.
              <CodeSnip.Example>
                bob_the_turtle.forward(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Moves bob_the_turtle foward 10 units.
              </CodeSnip.Result>
            </CodeSnip.Snip>
            <CodeSnip.Snip title="right(n)" label="Turn Right" >
              Turns the turtle n degrees to the right.
              <CodeSnip.Example>
                bob_the_turtle.right(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Turns the turtle 10 degrees to the right.
              </CodeSnip.Result>
            </CodeSnip.Snip>
            <CodeSnip.Snip title="left(n)" label="Turn Left" >
              Turns the turtle n degrees to the left. There are 360 degrees in an entire circle. 
              <CodeSnip.Example>
                bob_the_turtle.left(10)
              </CodeSnip.Example>
              <CodeSnip.Result>
                Turns the turtle 10 degrees to the left. 
              </CodeSnip.Result>
            </CodeSnip.Snip>
            </CardDeck>
            <CardDeck>
              <CodeSnip.Snip title="pencolor" label="Pen Color" >
                Changes the turtle pen color. Takes in a color string such as "blue", "red", "green", or "yellow".
                <CodeSnip.Example>
                  bob_the_turtle.pencolor("blue")
                </CodeSnip.Example>
                <CodeSnip.Result>
                  Changes the turtle pen color to blue.
                </CodeSnip.Result>
              </CodeSnip.Snip>
            </CardDeck>
          </SubSection>
          <SubSection  label="Project 1: Turtle Circle">
            <p>
              In this first project we will create a simple circle. This will build off everything you have read until this point. Don't worry if you don't understand all the code.
            </p>
            <Code.Wrapper>
              <Code.Title>
                Circle Code
              </Code.Title>
              Go through each line and make sure you understand it. It's one thing to read it over, another to really understand it. 
              <Code.Code>
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
          <p>
            Let's make the circle a little more exciting. We are going to turn it into a spiral that changes colors. A spiral is created by a drawing a circle of increasing radius. We are drawing a many sided shape that looks like a circle. In a many sided shape two values that determine radius are foward movement and turn size. If we increase forward movement distance every time we move the radius increases. The new code below shows this change. 
          </p>
          <Code.Wrapper>
              <Code.Title>
                Spiral Code
              </Code.Title>
              
              <Code.Code>
                <Code.Line>
                  import turtle <Code.Comment># Imports the turtle module</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  bob_the_turtle = turtle.Turtle() <Code.Comment># Imports the turtle module</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                <Code.Comment># Initialize the foward movement to 20. The variable keeps track of the movement, so we can keep increasing it.</Code.Comment>
                </Code.Line>
                <Code.Line>
                  forward_distance = 20
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
                  <Code.Comment> # Increase the forward distance by one every time to create a circle. </Code.Comment>
                </Code.Line>
                <Code.Line tabs={1}>
                  foward_distance += 1 
                </Code.Line>
                <Code.Line>
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
            <CodeSnip.Snip title="import math" subtitle="Math Module">
              Calculates more complex math functions such as Trignometry, factorial, square root, exponents, Pi, e, logarithms, and rounding functions like floor and ceiling.
            </CodeSnip.Snip>
            <CodeSnip.Snip title="import random" subtitle="Random Module">
              Generates pseudo-random numbers. Can generate random integers or floats. Not truly random, but good enough for simple programs. 
            </CodeSnip.Snip>
          </CardDeck>
          <CardDeck>
            <CodeSnip.Snip title='import time' subtitle="Time Module">
              Used for any calculations that require time. Can be used to get the current time, or format time to make it more readable. Go <Link href="https://dev.to/zenulabidin/digesting-python-date-and-time-at-lightspeed-2c19">here</Link> for a good underestanding of the time module 
            </CodeSnip.Snip>
            <CodeSnip.Snip title='import statistics' subtitle="Statistics Module">
              Calculate various statistics on a list. Some of the available functions cover mean, median, mode, quantiles, standard deviation, and variance. 
            </CodeSnip.Snip>    
          </CardDeck>
          <CardDeck>
            <CodeSnip.Snip title="import sys" subtitle="System Module">
              A module that provides access to interpreter variables. Can be used to access command line arguments. 
            </CodeSnip.Snip>
            <CodeSnip.Snip title="import smptplib" subtitle="Emailing Library">
              <p>
                Create and send emails.
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
                      1-3hrs
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
                      Create a program that can encrypt and decrypt Caesar Cipher text. Allow offset to be used. 
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
            Python has many faces. It is capable at web development and and state of the art Deep Learning. Python's huge amount of open source libraries allow it to do almost anything. Django is used for backend web development. Pytorch and Tensorflow are used for deep learning. Numpy is for linear algebra. Python Image Library (PIL) is for image processing. Pandas and Matplotlib are for data science. Here is a list of plugins to learn based on the topics you're interested in.
          </p>
          <Code.Title>
            Data Aquisition, Processing, and Manipulation
          </Code.Title>
          <ul>
            <li>
              <Link href="https://pandas.pydata.org//">Pandas - Read/Write/Editing csv's and data</Link>
            </li>
            <li>
              <Link href="https://docs.python.org/3/library/csv.html">csv module - read and write csv</Link>
            </li>
            <li>
              <Link href="https://openpyxl.readthedocs.io/en/stable/">openpyxl - Excel Changing</Link>
            </li>
            <li>
              <Link href="https://requests.readthedocs.io/en/master/">Requests - HTTP requests</Link>
            </li>
            <li>
              <Link href="https://docs.python.org/3/library/json.html">JSON Module - Reading, Writing, and Parsing JSON </Link>
            </li>
            <li>
              <Link href="https://docs.python.org/3/library/urllib.html">urllib module- HTTP request</Link>
            </li>
            <li>
              <Link href="https://pytorch.org/"> Pytorch</Link>
            </li>
            <li>
              <Link href="https://pytorch.org/"> Pytorch</Link>
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
        </Section>
      </TableOfContents>
    </div>
  )
}