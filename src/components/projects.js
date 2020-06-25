import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    btnClickR1() {
        window.open("https://github.com/Gagan1804/Agora-front-end");
    }

    btnClickA1() {
        window.open("https://github.com/Gagan1804/DrugAid");
    }

    btnClickA2() {
        window.open("https://github.com/Gagan1804/School-Management-Android-App");
    }

    btnClickA3() {
        window.open("https://github.com/Gagan1804/BlogX");
    }

    btnClickJ1() {
        window.open("https://github.com/Gagan1804/Library-Management");
    }

    btnClickRN1() {
        window.open("https://github.com/Gagan1804/RPS-game");
    }

    btnClickRN2() {
        window.open("https://github.com/Gagan1804/fireDataApp");
    }

    btnClickRN3() {
        window.open("https://github.com/Gagan1804/ToDoApp");
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
               // <div><h1>This is React</h1></div>
               <div className="projects-grid">
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:"url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center/cover"}}>
                       Agora Front-End
                   </CardTitle>
                   <CardText>I designed front-end for Supply Chain Management website for Agora. I worked on this project as part of my Summer Internship 2019 @ PLMP Blockhain PTE LTD.</CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickR1}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>
               </div>
            )
        }
        if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:"url(https://besthqwallpapers.com/Uploads/1-11-2019/110338/thumb2-android-green-logo-4k-green-brickwall-android-logo-brands.jpg) center/cover"}}>
                        Drug Aid
                   </CardTitle>
                   <CardText>I made an android app to control the drug dispenser as a part of my IoT project. We are presented the architecture and implementation of an 
                       automatic medication dispenser specifically for users who take medications without close professional supervision. 
                    </CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickA1}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:"#fff", height:"176px", background:"url(https://besthqwallpapers.com/Uploads/1-11-2019/110338/thumb2-android-green-logo-4k-green-brickwall-android-logo-brands.jpg) center/cover"}}>
                        School Management
                    </CardTitle>
                    <CardText>I built a school management android app as a part of my DBMS project, in which the admin/principal can add students,
                         teachers, parents and their details/information in the database. 
                         Also the teachers can add the exam results obtained by the students, which can be viewed by the student login as well as 
                         the parent login. So parents can keep a check on their child’s performance because some children tell lie or hide the 
                         exam papers from the parents but with this app we eliminate that conventional thing.</CardText>
                    <CardActions border>
                        <Button colored onClick={this.btnClickA2}>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:"#fff", height:"176px", background:"url(https://besthqwallpapers.com/Uploads/1-11-2019/110338/thumb2-android-green-logo-4k-green-brickwall-android-logo-brands.jpg) center/cover"}}>
                        BlogX
                    </CardTitle>
                    <CardText>I built an android app for fetching data from any blog(blogspot.in) like here i fetched data from my blog using API calling with Retrofit</CardText>
                    <CardActions border>
                        <Button colored onClick={this.btnClickA3}>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:"white"}}>
                            <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }
        if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"white", height:"176px", background:"url(https://besthqwallpapers.com/Uploads/8-2-2020/120813/thumb2-java-golden-logo-programming-language-brown-metal-background-creative-java-logo.jpg) center/cover"}}>
                       Library Management
                   </CardTitle>
                   <CardText>I made a Core Java project with Swing Animation and MySQL at Infowiz (The coaching center where i learnt java)</CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickJ1}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>
               </div>
            )
        }
        if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"white", height:"176px", background:"url(https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png) center/cover"}}>
                       Rock Paper Scissor
                   </CardTitle>
                   <CardText>Rock paper scissor game made in React Native. In this user selects rock or paper or scissor and computer also selects
                       a random thing and then they are clashed, then who soever wins result is displayed.I made it using expo platform 
                       (this app can run on both ios and android platforms)</CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickRN1}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"white", height:"176px", background:"url(https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png) center/cover"}}>
                       CRUD App
                   </CardTitle>
                   <CardText>I built an app for Creating/ReViewing/Updating/Deleting Data in Firebase real time database using react native technology</CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickRN2}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>

               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color:"white", height:"176px", background:"url(https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png) center/cover"}}>
                       ToDo App
                   </CardTitle>
                   <CardText>I built a ToDo app using react native technology</CardText>
                   <CardActions border>
                       <Button colored onClick={this.btnClickRN3}>Github</Button>
                   </CardActions>
                   <CardMenu style={{color:"white"}}>
                        <IconButton name="share"/>
                   </CardMenu>
               </Card>
               </div>
            )
        }
    }

    render(){
        return(
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Android</Tab>
                    <Tab>Java</Tab>
                    <Tab>React Native</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div> 
        );
    }
}

export default Projects;