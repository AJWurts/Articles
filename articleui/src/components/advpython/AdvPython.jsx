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
      <TableOfContents>
      <Section link="nextsteps" label="Next Steps">
          <p>
            You now have a good idea of the basic components of Python. Try to work through the easy projects above and if you feel good go for the medium projects. Move on to the Advanced Python Tutorial (Coming Soon!) to learn more about what Python can do. 
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