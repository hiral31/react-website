import React, {Component} from 'react';
import Header from '../Common/Header'
import image from '../assets/img/aboutUs.jpg'
import Timeline from '../Common/Timeline'
class About extends Component{

    render(){
        return(
            <div>
                <Header
                title="About Us!"
                subTitle="IT'S NICE TO MEET YOU"
                showButton={false}
                image={image}
                />
                <Timeline />
            </div>
            
        )
    }
}

export default About