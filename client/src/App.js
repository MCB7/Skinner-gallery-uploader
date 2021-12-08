import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'


import Index from './Componets/Index';
import AboutMe from './Componets/Aboutme';
import AppGallery from './AppGallery';
import Backend from './Componets/Backend';
import ContactUs from './Componets/ContactForm';

import  InstaMsgOverlay from './Componets/InstaMsgIconOverlay';
import  Overlay from './Componets/Overlay';
import Login from './Componets/Login';
import './index.css'; 

import disableScrollFox from './Componets/hideScrollFireFox';

import {fetchUser}from './Actions/index';





//this is the entry point of the application now
export default function App() {
  
  useEffect(() => {
    // we dispatch the action here just for the first time
    
    
  }, [])
  const nameish = 'youngblood'
  return(
  <div> 
  <BrowserRouter>
  {/* base route and componets */}
    <Route path='/' exact={true} component={AppGallery} />
    
    <Route path='/' exact={true} component={Index} />
    <Route path='/' exact={true} component={ContactUs} />
    <Route path='/' exact={true} component={InstaMsgOverlay} />
    

    <Route path='/login' exact component={Login} />
    
    <Route path='/backend' exact component={Backend} />
    
    <Route path='/aboutme' component={AboutMe} exact firsttnamne={nameish} />
   

  </BrowserRouter>
  </div>
  )
}