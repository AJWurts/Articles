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
        Welcome to Advanced Python
      </h1>
      <h3>By Alexander Wurts</h3>
      <p>
        If you have any questions, comments, or think there is an error please email me at
          <b> alexwurtsfeedback@gmail.com</b>.
      </p>
      <h4>
        This is where it gets fun.
      </h4>
      <p>
        This tutorial works on top of the Intro Python tutorial. Make sure you read through that one first.
      </p>
      <p>
        The order of this tutorial is less important than the intro tutorial. The first section, Classes and Objects, should be read first, and the rest can be read in any order.
      </p>
      <TableOfContents>
        <Section link="syntax-classes" label="Classes">
          <p>
            Object orientated programming is a progrmaming method that organizes the program around
            code and objects as opposed to functions and logic. Python is built on top of objects,
            every object except for some primitive types are objects. Strings are objects built
            on top of lists, also objects, or chars (not objects).
                            </p>
          <p>
            Classes are used to define objects. A class can contains variables and methods
            (functions in a class). Methods are special because they have access to the object
            variables. Therefore it is common for a method to have no parameters because it can use the object variables to do calculations.
                            </p>
          <Code.Wrapper>
            <Code.Title>
              Example Dog Class
            </Code.Title>
            <Code.Code>
              <Code.Line tabs={0}>
                class Dog():
              </Code.Line>
              <Code.Line tabs={1}>
                def __init__(self, name, human_years, breed):
              </Code.Line>
              <Code.Line tabs={2}>
                self.name = name
               </Code.Line>
              <Code.Line tabs={2}>
                self.dog_years = human_years * 7
              </Code.Line>
              <Code.Line tabs={2}>
                self.breed = breed
              </Code.Line>
              <br />
              <Code.Line tabs={1}>
                def pet(self):
              </Code.Line>
              <Code.Line tabs={2}>
                print(name, "wags their tail.")
              </Code.Line>
              <br />
              <Code.Line tabs={1}>
                def feed(self, food_amount):
              </Code.Line>
              <Code.Line tabs={2}>
                print(name, "eats")
              </Code.Line>
              <br />
              <Code.Line tabs={1}>
                def getBreed(self):
              </Code.Line>
              <Code.Line tabs={2}>
                return self.breed
              </Code.Line>
              <br />
              <Code.Line tabs={1}>
                def setAge(self, human_years):
              </Code.Line>
              <Code.Line tabs={2}>
                self.dog_years = human_years * 7
                </Code.Line>
              <br />
            </Code.Code>
            <Code.Result>
              The code creates a template for the Dog class. To use the class you create a Dog Object. It is an instance of the Dog class. The object will have it own set of values for name, dog_years, and breed.  
            </Code.Result>
          </Code.Wrapper>
          <SubSection label='Methods'>
            <p>
              Methods are functions inside an object. Their parameters always start with self to provide access to the object
            </p>
          </SubSection>
        </Section>
        <Section link="lists" label="List and String Processing">
        <p>
        Lists are a way of holding data in a sequence, where order matters. It is a type of data structure. Accessing and manipulating one item in a list, as the intro tutorial teaches, is adequate for most problems. However, in a lot of cases you need to do more. Python has a comprehensive set of operations to do pretty much anything to a list. A string, or a list of characters, shares a lot of operations with list. I'll label which operations work for both.
        </p>
        <TableOfContents>
          <SubSection link="slicing" label="Slicing">
            <p>
              Slicing in Python requires a special, but powerful syntax. Slicing is used to access and edit values within a list. 
              
            </p>
            <p>
              Slicing uses the same syntax for lists and strings. If the start index is not specified, it starts at the beginning of the string. If the end index is not specified it slices until the end of the string. If step is not specified it defaults to 1. <br/>
            </p>
            <p>
            
              <b>Syntax:</b> <C>list[start: stop: step]</C> <br/>
              <C>start</C> defines the starting index, it is included.<br/>
              <C>end</C> defines the finishing index, it is not included. <br/>
              <C>step</C> defines the difference between each index.
            </p>
            <Code.Wrapper>
              <Code.Title>
                Example Slicing (Lists and Strings)
              </Code.Title>
             Shows the different ways of slicing lists and strings. Not all arguments need to be included. Even no arguments is still valid.
              <Code.Code> 
                <Code.Line>
                  list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
                </Code.Line>
                <Code.Line>
                  str1 = 'abcdefg'
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # Only start and finish index.
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[2:4] <Code.Comment># == ['c', 'd']</Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[2:4] <Code.Comment># == 'cd'</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # No starting index
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[:4] <Code.Comment># == ['a', 'b', 'c', 'd']</Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[:4] <Code.Comment># == 'abcd'</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # No end index
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[2:] <Code.Comment># == ['c', 'd', 'e', 'f', 'g']</Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[2:] <Code.Comment># == 'cdefg'</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # Using step without end
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[2::2] <Code.Comment># == ['c', 'e', 'g']</Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[2::-1] <Code.Comment># == 'ceg'</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # Only step to Revere String/List
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[::-1] <Code.Comment># == ['g', 'f', 'e', 'd', 'c', 'b', 'a']</Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[::-1] <Code.Comment># == 'gfedcba'</Code.Comment>
                </Code.Line>
                <br/>
                <Code.Line>
                  <Code.Comment>
                    # Shallow copy with no arguments
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  list[:] <Code.Comment># == ['a', 'b', 'c', 'd', 'e', 'f', 'g'] </Code.Comment>
                </Code.Line>
                <Code.Line>
                  str1[:] <Code.Comment># == 'abcdefg</Code.Comment>
                </Code.Line>
                
              </Code.Code>
            </Code.Wrapper>
            <Code.Wrapper>
              <Code.Title>
                Negative Indices (Lists and Strings)
              </Code.Title>
              Python supports negative indices for slicing. The last value in the list is -1, and it counts down from there. Negative indices can be used for indexing and slicing into lists
              <Code.Code>
                <Code.Line>
                  example_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
                </Code.Line>
                <Code.Line>
                  <Code.Comment>
                  # Indices:       0,   1,   2,   3,   4,   5,   6
                  </Code.Comment>
                </Code.Line>
                <Code.Line>
                  <Code.Comment>
                    # Negative:     -7,  -6,  -5,  -4,  -3,  -2,  -1
                  </Code.Comment>
                </Code.Line>
              </Code.Code>
            </Code.Wrapper>
          </SubSection>
        </TableOfContents>
        </Section>
        <Section link='files' label="File Reading and Writing">

        </Section>
        <Section link="mapandfilter" label="Map and Filter using Lambda">

        </Section>
        <Section link="yield" label="Iterators">

        </Section>
        <Section link="importing" label="Downloading Modules with PyPI">

        </Section>
        <Section link="sets" label="Sets">

        </Section>
        <Section link="nextsteps" label="Next Steps">

        </Section>
        <Section link="nextsteps" label="Next Steps">
          <p>
            You now have a good idea of the basic components of Python. Try to work through some of the projects above. Checkout the libraries below to work on more advanced projects. 
          </p>
          <p>
            If you have another project in mind that requires any of the following categories, look at or anything like that look through the links to find a library to help you. Most good libraries have a descent learning curve, but once learned they are very powerful.
          </p>
          <p>
            Python has many faces. It is capable at web development and and state of the art Deep Learning. Python's huge amount of open source libraries allow it to do almost anything. Django is used for backend web development. Pytorch and Tensorflow are used for deep learning. Numpy is for linear algebra. Python Image Library (PIL) is for image processing. Pandas and Matplotlib are for data science. Continue to my next tutorial to start using these tools.
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
              <Link href="https://plot.ly/python/">Plotly - Graphing</Link>
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
              <Link href="https://www.fullstackpython.com/flask.html">Flask - Lightweight server framework</Link>
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
              <Link href="https://docs.python.org/3/library/tkinter.html">Tkinter - Built-in user interface module</Link>
            </li>
            <li>
              <Link href="https://www.pygame.org/news">Pygame - Intro to game programming</Link>
            </li>
            <li>
              <Link href="https://kivy.org/#home">Kivy - Cross platform </Link>
            </li>
            <li>
              <Link href="https://wxpython.org/">wxpython - Cross-platform GUI toolkit</Link>
            </li>
          </ul>
        </Section>
      </TableOfContents>
    </div>
  )
}