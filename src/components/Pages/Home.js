import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg'

import Services from '../Common/Services'
import Protfolio from '../Common/Portfolio'
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'
class Home extends Component{

    render(){
        return(
            <div>
                <Header
                title="Welcome To Our Studio!"
                subTitle="IT'S NICE TO MEET YOU"
                buttonText="Tell Me More"
                link="/services"
                showButton={true}
                image={image}
                />

                <Services />
                <Protfolio />
                <Timeline />
                <Team />
            </div>
            
        )
    }
}

export default Home