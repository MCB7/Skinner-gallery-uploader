import React,{useState, useEffect} from 'react';
import { Storage } from 'aws-amplify'



export default function Backend(){

  const [images, setImages] = useState([])
  useEffect(() => {
    // we dispatch the action here just for the first time
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
  return(
  <div>
  I'm the back end!
  {/* DELETING GALLERY */}
  {
          images.map(image => (
            <img
              src={image}
              key={image}
              onClick={(e)=>{deleteAnImageconsole(e,image) }}             
            />
          ))
        }  
      
      <input
        type="file"
        onChange={onChange}
      />
  </div>
  )
}