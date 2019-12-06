import React, {useState} from 'react';
import logo from './logo.svg';
import {
    NavBar,
    TableOfContents,
    Section,
    SideBar
} from './components/compstore';

import {
    IntroWebDev,
    IntroPython
} from './components';


import './App.css';

function App() {
    var [ window, setWindow ] = useState(0);

    console.log(window)
    if (window === 0) {
        var content = <IntroWebDev />
    } else if (window === 1) {
        var content = <IntroPython />
    }


    return (
        <div className="App" style={{backgroundColor: "white"}}>
            <NavBar/>
            <div style={{display: "flex", maxWidth: '1000px', marginLeft: "auto", marginRight: 'auto'}}>
                <SideBar.Wrapper style={{minWidth: "150px", maxWidth: "250px"}}>
                    <SideBar.Item onClick={() => setWindow(0)}>
                        Intro to Web Dev
                    </SideBar.Item>
                    <SideBar.Item onClick={() => setWindow(1)}>
                        Intro to Python
                    </SideBar.Item>
                </SideBar.Wrapper>
                <div>
                    {content}
                </div>
            </div>

        </div>
    );
}

export default App;
