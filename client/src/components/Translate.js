import {useState } from 'react';
import './TranslateStyle.css'
const Translate = () => {

  const [english,setEnglish] =useState("")
  const [final,setFinal] = useState();




const convertToEnglish = ()=>{

  const payload = {
    "q": english,
    "target":"eng",
  }

  fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyADNPAFEau5uw-bYuae94Xb4O-5VkimLnM',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(payload),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  setFinal(data.data.translations[0].translatedText)
})
.catch((error) => {
  console.error('Error:', error);
}); 
}


const handleMessageChange = event => {
  setEnglish(event.target.value);
};
  
  
  return (
    <div className='parent2'>

      <div className='left2 card card-5'>
      <h1>Input Text</h1>

<textarea placeholder="Copy/Enter text in any Regional Language" rows="80"   id="message"
        name="message"
        value={english}
        onChange={handleMessageChange} 
        cols="40"></textarea>
       
      </div>

      <div className='middle2'>
        <h1>Regional Language Translator</h1>
        <button onClick={convertToEnglish}> Convert to ENGLISH</button>
      </div>

      <div className='right2 card card-5'>
      <h1>English Text</h1>
      {

      (final!== "" && (
        <>
        <p> {final}</p> 
        </>
      ))
      }
      </div>

    </div>
    )
}

export default Translate

// --------------------------------------------------------------------------




