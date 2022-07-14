import Tesseract from 'tesseract.js';
import {useState} from 'react'
import "./style.css";


const Extract= () => {

  const [file,setFile] =useState();
const [progress,setProgress] = useState(0);
const [result,setResult] =useState();
const [language,setLanguage] =useState('eng');


const [lang,setLang] = useState()
// const [convert,setConvert] = useState()

const onFileChange =(e)=>{
  console.log(e.target.files[0])
  setFile(e.target.files[0])
  const type = e.target.files[0].type;
  console.log(type)
  if(type === "application/pdf"){
    alert('Please Use Screenshots of PDF (Not PDF)....This Feature is Yet to be Implemented')
  }
}


const processImage =()=>{

  setResult("");
  setProgress(0);
  setLang("");


Tesseract.recognize(
file,
language,
{ logger: m =>{
  if(m.status === "recognizing text"){
    setProgress(m.progress);
  }
  console.log(m)
} }
  
).then(({ data: { text } }) => {
setResult(text)

const payload = {
  "q": text,
  "target":"en",
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
    setLang(data.data.translations[0].translatedText)
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 

})
}





 return(
  <>
  <div className="parent3">
    <section className="left3">  
    <p>SELECT FIR SCREENSHOTS</p>
    <i class="fa-solid fa-arrow-down"></i>
    <input type="file" onChange={onFileChange}></input>
    <span>Choose State or language</span>
   <select value ={language} onChange={e=>setLanguage(e.target.value)}>
      <option value="eng">ENGLISH</option>
      <option value="tam">Tamil Nadu -- Tamil</option>
      <option value="hin">Uttar Pradesh -- Hindi</option>
      <option value="kan">Karnataka -- Kannada</option>
      <option value="mar">Maharashtra -- Marathi</option>
      <option value="hin">Rajasthan -- Hindi</option>
      <option value="hin">Chattisgarh -- Hindi</option>
      <option value="hin">Madhya Pradesh -- Hindi</option>
      <option value="tam">Pudducherry -- Tamil</option>
      <option value="hin">Bihar -- Hindi</option>
      <option value="hin">Haryana -- Hindi</option>
      <option value="pan">Punjab -- Punjabi</option>
      <option value="tel">Andhra Pradesh -- Telgu</option>
      <option value="ori">Orrisa -- Oriya</option>
      <option value="mal">Kerela -- Malayam</option>
      <option value="guj">Gujrat -- Gujrati</option>
    </select>

    <button onClick={processImage}>Extract Text</button>
    
    <div className='progress-bar'>
      <progress value={progress} max={1} />
    </div>

    </section>



    <section className="middle3 card card-5" >
    <h1>Extracted Data</h1>
    
    {
      (result !== "" && (
        <>
        <p> {result}</p> 
        </>
      ))
    } 
    </section>
    

    <section className="right3 card card-5" >
        <h1>English Output</h1>

        {
      (lang !== "" && (
        <>
        <p> {lang}</p> 
        </>
      ))
    }  
   </section>
  </div>

    

  </>
 )
}

export default Extract