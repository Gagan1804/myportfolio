import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Layout,
  Header,
  HeaderRow,
  Textfield,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";

import Main from './components/main';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link to="/" style={{color:"white", textDecoration:'none'}}>MyPortfolio</Link>} scroll>
              <Navigation>
                <Link to="/resume">My Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">My Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
