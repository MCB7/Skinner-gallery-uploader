import React from 'react';
import  contactOverlayOff from './OverlayC';
import  OfffadeC from './Cfade';
import contactOverlayon from './OverlayC-on';
import messageOverlayon from './OverlayM-on.js'
import instaicon from '../assets/instaicon.svg'
import contacticon from '../assets/contacticon.svg'
export default function InstaMsgOverlay() {

  
        
    

 

    

    return(
        
        <div>
            
            <div id = {"overlayC"} onClick={contactOverlayOff} style={{cursor: 'url(./assets/scursor1.svg)'}}  onMouseUp={OfffadeC}>
            <div id="text1" onClick={contactOverlayOff} style={{cursor: 'url(./assets/scursor1.svg)'}}  className="allsides-6"><img src={instaicon} className="icons"></img></div>
            
            <div id="text2" onClick={messageOverlayon} style={{cursor: 'url(./assets/scursor1.svg)'}}  className="allsides-6" className="message"><img src={contacticon} className="icons"></img></div>
            </div>

        </div>
         
        
    )
}