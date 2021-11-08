import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom';


import Index from './Componets/Index';
import AboutMe from './Componets/Aboutme'
import AppGallery from './AppGallery'
import Backend from './Componets/Backend'
import ContactUs from './Componets/ContactForm';
import  InstaMsgOverlay from './Componets/InstaMsgIconOverlay'
import  Overlay from './Componets/Overlay'
import './index.css'; 

import disableScrollFox from './Componets/hideScrollFireFox';





//this is the entry point of the application now
export default function App() {
  const nameish = 'youngblood'
  return(
  <div> 
  <BrowserRouter>
  {/* base route and componets */}
    
    
    <Route path='/' exact={true} component={AppGallery} />
    <Route path='/' exact={true} component={Index} />
    <Route path='/' exact={true} component={ContactUs} />
    <Route path='/' exact={true} component={InstaMsgOverlay} />
    
    <Route path='/login' exact component={Backend} />
    
    <Route path='/aboutme' component={AboutMe} exact firsttnamne={nameish} />
   

  </BrowserRouter>
  </div>
  )
}