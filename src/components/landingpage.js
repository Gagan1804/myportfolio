import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Wave, Random } from 'react-animated-text';
import Particles from "react-particles-js";

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto', height:'100%'}}>
                <Grid className="landing-grid">
                <Particles
                width="100vw"
                height="100vh"
                className="pattern"
                params={{
                    particles: {
                    number: {
                        value: 200,
                        density: {
                        enable: true,
                        value_area: 2400
                        }
                    }
                    }
                }}
                />
                    <Cell col={12}>
                        <img src="https://i.ibb.co/HG0c6Tb/pfl.png" className="profile" style={{position:'relative'}}/>
                        
                        <div className="banner-text">
                            <h1>A Java Coder who loves Web Development</h1>
                            <hr/>
                            <p>
                                <Wave text="HTML | CSS | React | Java | Android | MySQL" iterations="2"/>
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/gagandeep-singh-1804/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/Gagan1804" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.instagram.com/khalsinghdrogo/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                                <a href="https://www.youtube.com/channel/UC2rVjya4m7lujaEbGpfcQ7A" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                            
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default LandingPage;
