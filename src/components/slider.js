/** @jsx jsx */
import React, { useState, button } from 'react'
import { css, jsx } from '@emotion/core'
import './slider.scss'
import { Button } from 'react-mdl';
import SliderContent from './sliderContent';
import i1 from '../images/1.jpg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';

function Slider(){

    let sliderArr = [
        <SliderContent src={i1}/>,
        <SliderContent src={i2}/>,
        <SliderContent src={i3}/>,
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        // for continuation running of carousel i.e after first image again on clicking left button last image will show
        x === 0 ? setX(-100*(sliderArr.length-1)) : setX(x+100);
    };
    const goRight = () => {
        // for continuation running of carousel i.e after last image again on clicking right button 1st image will show
        (x === -100*(sliderArr.length-1)) ? setX(0) : setX(x-100);
    };

    return(
        <div className="slider">
            {
                sliderArr.map((item,index) => {
                    return(
                        <div  key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })    
            }
            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;