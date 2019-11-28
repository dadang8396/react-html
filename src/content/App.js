import React, {Component,Fragment} from 'react';
import '../style/styles.css'
import Home from './Home/Home';
// import Blogs from './Blogs/Blogs';
import Props from './Props/Props';
import Form from './event/event';
import SimpleEvent from './event/SimpleEvent'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class App extends Component{
    render(){
      return(
            <Router>
                <div className="wraaper">
                    <div className="header">
                    <div className="navbar">
                            <div className="logo">
                                <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
                            </div>
                            <div className="menu">
                                <ul>
                                    <Link to="/" className="li">Home</Link>
                                    <Link to="/blogs" className="li">Blogs</Link>
                                    <Link to="/blogs" className="li">Galery</Link>
                                    <Link to="/form" className="li">Kontak</Link>
                                    <Link to="/event" className="li">Simple event</Link>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>  
                    <Fragment>
                        {/* <Home/> */}
                        <Route path="/" exact component={Home}/>
                        <Route path="/blogs"  component={Props}/>
                        <Route path="/form"  component={Form}/>
                        <Route path="/event"  component={SimpleEvent}/>
                    </Fragment>
                </div>
            </Router>
      )
    }
}
export default App;

