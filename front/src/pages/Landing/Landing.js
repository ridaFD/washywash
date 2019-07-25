import HeaderLanding from '../../components/Header-landing/Header-landing.js';
import React, { Component } from 'react';

 class Landing extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             service:[
                 {title:'blah', description:'jdjdjdjdj'},
                 {title:'blah', description:'jdjdjdjdj'},
                 {title:'blah', description:'jdjdjdjdj'},
             ]
          }
     }
     render() { 
         return ( 
             <div>
             {this.state.service.map(item=>(
               <span>{ item.title}</span> 
             ))}
                 <HeaderLanding />
             </div>
          );
     }
 }
  
 export default Landing;