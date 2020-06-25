import React, {Component} from 'react';
import {Grid, Cell, List, ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Gagandeep Singh</h2>
                        <img src="https://i.ibb.co/X5TZvh0/prrrf.jpg" alt="prf" border="0" height="290px" width="285px"/>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                            I am a student of Vellore Institute of Technology expected to complete my Btech in 2021. 
                            I belong from the Chandigarh-'The City Beautiful' though currently i reside in VIT Hostel (Vellore).
                            You can contact me on the sources provide on the right hand side.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    8870902220
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    gagan2665790@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    gagan2665790
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;