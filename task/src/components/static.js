import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const HeaderLink = [
    {
        id :1,
        page :'Contact Deatils',
        path :'/'
    },
    {
        id :2,
        page :'Investment plans',
        path :'/investment'
    },
    {
        id :3,
        page :'Investment preferences',
        path :'/investmentPreferences'
    }
];
export default class Header extends Component{

    render(){
        return(
            <div className="unitedProperties">
            <div className="container">
            <div className="title">
            <span>UNITED <span>PROPERTIES</span></span>
            </div>
            
            
            <div className="changeStep">
     <ul>
     {HeaderLink.map(({page,path},id)=>(
        <li key={{id}}>
         <NavLink   exact to={path} style={{ textDecoration: 'none', color:"white" }} >
         {page}</NavLink> </li>
        
             ))}
    
     </ul>
            </div>
            <div className="description"><span id="span"></span>
           <div className="desContent">
    <div className="secContent">
    
        <p>
            We care about your time, that's why we created 
            a 3-stage onboarding that will not take more than 5 minutes to complete
          </p>
        
    </div>
    
    <div className="mac">
    <p>William Mac</p>
    <p className="founder">CO-FOUNDER, INVESTOR</p>
    <img src="assets/css/img/UP.png" alt="Up"/>
    </div>
    
           </div>
      
            </div>
    </div>
    
            </div>
        )
    }
}