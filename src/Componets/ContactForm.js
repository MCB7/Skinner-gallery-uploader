import emailjs from "emailjs-com";
import React from 'react';
import  MessageOverlayOff from './OverlayM';
import  OfffadeM from './Mfade';
import MessageOverlayOn from './OverlayM-on';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_hdrytq8', 'template_4t58w5h', e.target, 'user_s91Br6tqZ1rGYwilylk8K')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

        
    }

 

    

    return(
        
        <div>
            
            <div id = {"overlayM"} onClick={MessageOverlayOff} style={{cursor: "none"}}  onMouseUp={OfffadeM}>

            <div class="text-slideshow">
             <h2 class="item-1" style={{fontFamily:"Permanent Marker", fontSize:" 3em"}}>Questions?</h2>
 
 <h2 class="item-2" style={{fontFamily:"Permanent Marker", fontSize:" 3em"}}>Want to schedule an appointment??</h2>
 
 <h2 class="item-3" style={{fontFamily:"Permanent Marker", fontSize:" 3em"}}>Fill out the form below!</h2>
 </div>
           <div id={"form"} className="containerTextBox" >
            <form onSubmit={sendEmail} onClick={MessageOverlayOn} >
     
                  
                       
                            <input type="text"  placeholder="Name" name="name" style={{fontFamily:"Permanent Marker"}}/>
                       
                      
                            <input type="email"  placeholder="Email Address" name="email" style={{fontFamily:"Permanent Marker"}}/>
                    
                    
                            <input type="text"  placeholder="Subject" name="subject"  style={{fontFamily:"Permanent Marker"}}/>
                   
                   
                            <textarea  id="" cols="30" rows="8" placeholder="Your message" name="message" style={{fontFamily:"Permanent Marker"}}></textarea>
                    
                     
                            <input type="submit" className="btn btn-info" style={{fontFamily:"Permanent Marker"}} value="Send Message"></input>
                      
                       
                           
                       
                   
                </form>
            </div>
        </div>
        </div>
         
        
    )
}