import React,{Component} from 'react';
import PageWarpper from './components/PageWarpper';
import {BrowserRouter as Router,Route} from "react-router-dom";

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact'

class App extends Component {

  render(){

    return (
      <Router>
        <PageWarpper>
           <Route
              exact={true}
              path="/"
              component={Home}
            />
            <Route
              exact={true}
              path="/about"
              component={About}
            />
            <Route 
              path="/contact"
              component ={Contact}
            />
        </PageWarpper>
      </Router>
    );

  }
  
}

export default App;
