import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from '../skills';
import { Wave} from 'react-animated-text';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    {/*left side*/}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://i.ibb.co/RN6bCPp/DSC-8223-min.png" height="300px" width="300px" style={{marginTop:'5em'}}/>
                        </div>
                        <h2 style={{paddingTop:'1em'}}>Gagandeep Singh</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #5B3B8C', width:'50%'}}/>
                        <p style={{fontSize:'16px'}}> 
                        Energetic and self-motivated student seeking a full-time position 
                        in a good organization where my potentials will be fully discovered while working for the company dedicatedly.
                        </p>
                        <hr style={{borderTop: '3px solid #5B3B8C', width:'50%'}}/>
                        <h5>Address</h5>
                        <p style={{fontSize:'16px'}}>#1804, Sector 45-B, Chandigarh</p>
                        <h5>Phone</h5>
                        <p style={{fontSize:'16px'}}>8870902220</p>
                        <h5>Email</h5>
                        <p style={{fontSize:'16px'}}>gagan2665790@gmail.com</p>
                        <hr style={{borderTop: '3px solid #5B3B8C', width:'50%'}}/>
                    </Cell>

                    {/*right side*/}
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName={"Vellore Institute of Technology"}
                            schoolDescription={"I am doing my B.tech in Computer Science here with current CGPA :- 8.88"}
                        />
                        <Education 
                            startYear={2016}
                            endYear={2017}
                            schoolName={"The British School"}
                            schoolDescription={"I did my 12th class here with 94% in CBSE Boards (Physics, Chemistry, Maths, English, Physical Education)"}
                        />
                        <Education 
                            startYear={2014}
                            endYear={2015}
                            schoolName={"Saupin's School"}
                            schoolDescription={"I did my 10th class from here with CGPA of 9.8 in CBSE Boards"}
                        />
                        <hr style={{borderTop:'3px dotted #f4c430'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={"DEC 2017"}
                            endYear={"JAN 2019"}
                            jobName={"Core Committee Member @ Apple Developers Group"}
                            jobDescription={"I was recruited in the management team but later my interest in android and web made me join the android team. As a member of the club, i was Event Coordinator at one of our annual workshops i.e. 'IOS Fusion' in which we basically teach students basics of IOS app development. Also i was a part the Tech Support Team for our UniDev Workshop in which we teach students basics of developing apps using Unity"}
                        />
                        <Experience
                            startYear={"MAY 2019"}
                            endYear={"JUNE 2019"}
                            jobName={"Internship @ PLMP Blockchain PTE LTD "}
                            jobDescription={"I designed the Front-end (using React.JS and CSS) of a supply chain management website for *Agora* (our company's client). I also worked little bit on another live project going on (I developed some screens of the app using React Native). The project was basically a Wallet App for storage and transaction of crypto-currencies."}
                        />
                        <hr style={{borderTop:'3px dotted #f4c430'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skills={"HTML/CSS | React | Java | Android | MySQL"}
                            /*progress={100}*/
                        />
                        <hr style={{borderTop:'3px dotted #f4c430'}}/>
                        <h2>Languages</h2>
                        <p style={{fontSize:'20px', marginLeft:'1em'}}>
                            <Wave text="English | Hindi | Punjabi"/>
                        </p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;