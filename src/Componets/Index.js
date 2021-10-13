import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';



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
grid-template-columns: repeat(auto-fit, minmax(250px, 4fr));
padding-bottom: 200 px;
grid-auto-rows: 500px;
`; 



export default function Index() {
  const [images, setImages] = useState([])
  useEffect(() => {
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
  return (
    <div className="App">
      <GlobalStyle />
     <WrapperImage>
    
        {
          images.map(image => (
            <img
              src={image}
              key={image}
              style={{width: 500, height: 500}}
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

