import React from 'react';

import  Offfade from './Fade';
import contactOverlayon from './OverlayC-on';
import OverlayOff from './Overlay'

export default function Overlay() {

  
        
    

 

    

    return(
        
        <div>
            
            <div id = {"overlay"} onClick={OverlayOff} style={{cursor: 'url(./assets/scursor1.svg)'}}  onMouseUp={Offfade}>
                
            <div id="text0" onClick={contactOverlayon} style={{cursor: 'url(./assets/scursor1.svg)'}} class="allsides-6">  Contact</div>
            
          
      
            </div>

        </div>
         
        
    )
}