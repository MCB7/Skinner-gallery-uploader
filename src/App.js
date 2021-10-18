import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

import Index from './Componets/Index';
import AboutMe from './Componets/Aboutme'
import ContactUs from './Componets/ContactForm';







export default function App() {
  const nameish = 'youngblood'
  return(<div> <Index />
        <AboutMe firsttnamne={nameish} />
  
  </div>)
}