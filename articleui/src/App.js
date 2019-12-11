import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {
    NavBar,
    TableOfContents,
    Section,
    SideBar
} from './components/compstore';

import {
    IntroWebDev,
    IntroPython,
    HowToGoogle,
    AdvPython
} from './components';


import './App.css';

function useWindowSize() {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [width, setWidth] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWidth(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return width;
  }

function App(props) {
    var [ frame, setWindow ] = useState(1);

    const size = useWindowSize();

    if (frame === 0) {
        var content = <IntroWebDev width={size.width } />
    } else if (frame === 1) {
        var content = <IntroPython width={size.width } />
    } else if (frame === 2) {
        var content = <HowToGoogle width={size.width } />
    } else if (frame == 3) {
        var content = <AdvPython width={size.width} />
    }


    console.log(size.width);
    return (
        <div className="App" style={{backgroundColor: "white"}}>
            <NavBar width={size.width}/>
            <div style={{display: size.width < 900 ?  "block": "flex", maxWidth: Math.min(size.width , 900) + "px", marginLeft: size.width > 900 ? "auto" : "0px", marginRight:  size.width > 900 ? "auto" : "0px"}}>
                <SideBar.Wrapper style={{minWidth: "150px", maxWidth: "250px", marginLeft: "auto", marginRight: "auto"}}>
                    <SideBar.Item onClick={() => setWindow(0)}>
                        Intro to Web Dev
                    </SideBar.Item>
                    <SideBar.Item onClick={() => setWindow(1)}>
                        Intro to Python
                    </SideBar.Item>
                    <SideBar.Item onClick={() => setWindow(3)}>
                        Advanced Python
                    </SideBar.Item> 
                    <SideBar.Item onClick={() => setWindow(2)}>
                        How to Google
                    </SideBar.Item>
                </SideBar.Wrapper>
                <div style={{maxWidth: Math.min(size.width , 750) + "px"}}>
                    {content}
                </div>
            </div>

        </div>
    );
}

export default App;
