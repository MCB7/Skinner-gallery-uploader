import React, { Component } from 'react';
import { render } from 'react-dom';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from './assets/maptest.svg'
import sheet1 from './assets/headertitle.png'
import sheet2 from './assets/orbbutton.svg'





class AppGallery extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }



  render() {
    return (

      
      <div className="rrs-container">
        <div id="navbar">
          <Spritesheet
            className={`navbar`}
            image={sheet2}
            widthFrame={234.5}
            heightFrame={57}
            steps={15}
            fps={10}
            autoplay={false}
            loop={true}
            isResponsive={true}
            direction={`forward`}

           

            onClick={spritesheet => {
              spritesheet.play();


            }}
            onLoopComplete={spritesheet => {
              spritesheet.goToAndPause(.001)
              function on() {
                document.getElementById("overlay").style.display = "block";
                document.getElementById("overlay").style.opacity = "1"
                document.getElementById("overlay").style.visibility = "visible";






              }
              on();
            }}




            style={{
              display: 'block',
              margin: 'auto',
              width: '25%',
              


            }}



          />
        </div>



        <Spritesheet

          image={sheet}

          widthFrame={1006}
          heightFrame={285}
          className={'style fade-in'}  
          steps={11}
          fps={11}
          autoplay={true}
          loop={false}
          isResponsive={true}
          direction={`forward`}
          onMouseOver={spritesheet => {
            spritesheet.goToAndPlay(1)

          }}
          style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
          }}

        />

        <Spritesheet
          image={sheet1}
          widthFrame={694}
          heightFrame={158}
          className={'style fade-in'}  
          steps={10}
          fps={10}
          autoplay={true}
          loop={false}
          isResponsive={true}
          direction={`forward`}

          onMouseOver={spritesheet => {
            spritesheet.goToAndPlay(1)

          }}

          timeout={100}

          style={{
            display: 'block',
            margin: 'auto',
            width: '50%',
          }}
        />

        <Spritesheet
          className={`buttonpadding`}
          className={'style fade-in'}  
          image={sheet2}
          widthFrame={234.5}
          heightFrame={57}
          steps={15}
          fps={10}
          autoplay={false}
          loop={true}
          isResponsive={true}
          direction={`forward`}
          



          onClick={spritesheet => {
            spritesheet.play();


          }}
          onLoopComplete={spritesheet => {
            spritesheet.goToAndPause(.001)
            function on() {
              document.getElementById("overlay").style.display = "block";
              document.getElementById("overlay").style.opacity = "1"
              document.getElementById("overlay").style.visibility = "visible";






            }
            on();
          }}




          style={{
            display: 'block',
            margin: 'auto',
            width: '50%',
            cursor: 'pointer',
            paddingTop:'1.25em' //this needs to be media queried
           


          }}



        />
      
      </div>
      

            

    );
  }
}



export default AppGallery;
