import React from 'react';
class Loader extends React.Component {

    // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 500)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ('')
        }, 500)
      }
    })
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">
         
          <p>
  
          </p>
          <a>
       
          </a>
        </header>
        </div>
    );
  }
}
  
  
  export default Loader;