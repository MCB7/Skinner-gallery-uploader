import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

//dispatches the action you exported from actions index
import {useDispatch,useSelector} from 'react-redux'

import {firstAction} from '../Actions/index';

// style
const GlobalStyle = createGlobalStyle`
 * {
   
   box-sizing: border-box;
 }



 img {

  height: auto;

  max-width: 100%;

}
`;

const WrapperImage = styled.section`
max-width: 70rem;
margin: 10rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));
padding-bottom: 200 px;
grid-auto-rows: 500px;
`; 



export default function Index() {
//lastly we have use selector which is where we can query anywhere for the state by just assigning 
//a variable and looking for state where state is the reducer we want to pull from
const phrase = useSelector(state => state.api)
console.log('this is the state', phrase)
  //we assign dispatch to a new variable
  const dispatch = useDispatch()

  const [images, setImages] = useState([])
  useEffect(() => {
    // we dispatch the action here just for the first time
    dispatch(firstAction('hi there morgan im the first action'));
    fetchImages()
  }, [])

  async function fetchImages() {
    let imageKeys = await Storage.list('')
    imageKeys = await Promise.all(imageKeys.map(async k => {
      const key = await Storage.get(k.key)
      return key
    }))
    console.log('imageKeys: ', imageKeys)
    setImages(imageKeys)
  }
  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file, {
      contentType: 'image/png'
    })
    console.log({ result })
    fetchImages()
  }


  async function deleteAnImageconsole(e,image){
    //split the image att the slashes
    let split = image.split('/')
    console.log('im the split1',split)
    //assign to new varibale so data is not stale
     let thisistheword = split[4].split('?')
    console.log('im the split',thisistheword)
    //assign new data again to the index in the array that is the image
    let Deleteme = thisistheword[0];
    //reaplce all % with spaces DOES NOTHING FOR NOW REALLY
    let newdetele = Deleteme.replace(/%/g,' ')
    //consolelog the image name
    console.log('im new here',newdetele);
    //delete that image
    const result = await Storage.remove(newdetele)
    console.log({result})
  }


  return (
    <div className="App">
      <GlobalStyle />
     <WrapperImage>
    {/* GALLERY IMAGES */}
        {
          images.map(image => (
            <img
              src={image}
              key={image}
              style={{width: 500, height: 500}}
             
              
            />
          ))
        }

{/* DELETING GALLERY */}
        {
          images.map(image => (
            <img
              src={image}
              key={image}
              style={{width: 500, height: 500}}
              onClick={(e)=>{deleteAnImageconsole(e,image) }}
              
            />
          ))
        }
        
    
      </WrapperImage>
      <input
        type="file"
        onChange={onChange}
      />
     
    </div>
  );
}

