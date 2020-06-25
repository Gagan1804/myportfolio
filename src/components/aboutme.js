import React, {Component} from 'react';
import Slider from './slider';
import {img1} from '../images/1.jpg'

const images = [
    img1,
]

class About extends Component{
    render(){
        return(
            <div>
                <h2 style={{fontSize:'40px', fontFamily:'Anton'}}><center>About Me</center></h2>
                <Slider/>
            </div>
        );
    }
}

export default About;