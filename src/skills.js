import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div stye={{display:'flex'}}><h5>{this.props.skills}</h5></div>
                    {/*<ProgressBar style={{marginTop:'0px', width:'75%', color:"white"}} progress={this.props.progress}/>*/}
                </Cell>
            </Grid>
        )
    }
}

export default Skills;