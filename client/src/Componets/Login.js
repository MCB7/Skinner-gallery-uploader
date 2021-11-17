import react from 'react';
import scrollFunction from '../Componets/Index.js'

import '../index.css'

export default function Login(){
  return(
    
    <div style={{alignItems:'center',justifyContent:'center',paddingLeft:'2em'}}>
    <button style={{borderRadius:'15px', padding:'1em', justifyContent:'center', alignItems:"center",
      fontSize:'50px'}}>
    <a href="/auth/google"> Sign in with google </a>
    </button>
    <div id="navbar"></div>
    </div>
  )
}