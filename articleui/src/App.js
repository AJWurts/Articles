import React from 'react';
import logo from './logo.svg';
import {
  NavBar,
  TableOfContents,
  Section,
  SideBar
} from './components/compstore';

import {
  IntroWebDev
} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ display: "flex", maxWidth: '1000px', marginLeft: "auto", marginRight: 'auto' }}>
        <SideBar 
          links={[]}
        />
        <div>
        <Router>
        <Switch>
          <Route path='/introtoweb'>
            <IntroWebDev />
          </Route>
        </Switch>

        </Router>
         

          {/* Main Content */}
        </div>
      </div>

    </div>
  );
}

export default App;
