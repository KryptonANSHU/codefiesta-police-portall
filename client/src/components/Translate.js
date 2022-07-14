import {useState } from 'react';
import * as XLSX from "xlsx";
import './TranslateStyle.css'
const Translate = () => {

  const [items, setItems] = useState([]);
  const [final,setFinal] = useState([]);
  const arr = []
  // const [result,setResult] = useState([]);
  // const [english,setEnglish] =useState("")


  const excelToEnglish = (payload2)=>{
    fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyADNPAFEau5uw-bYuae94Xb4O-5VkimLnM',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(payload2),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data.data.translations[0].translatedText);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 }
 
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };


const run=()=>{
  console.log(typeof(items))

  if(typeof(items) === 'object'){
    items.forEach(i => {
      console.log(i)
      const payload2 = {
        "q": i.word,
        "target":"eng",
      }
        convertToEnglish(payload2)
    });
  }else{
    const payload2 = {
      "q": items,
      "target":"eng",
    }

    convertToEnglish(payload2)
  }
  
//   items.map((i)=>{
//     for(let key in i){
//     <p>Helloe</p>
//   }
// })
 
}
  
  const convertToEnglish = (payload)=>{
    
    // const payload = {
    //   "q": english,
    //   "target":"eng",
    // }

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
  arr.push(data.data.translations[0].translatedText)
  setFinal(arr)
  // setFinal(data.data.translations[0].translatedText)
})
.catch((error) => {
  console.error('Error:', error);
}); 
}


const handleMessageChange = event => {
setItems(event.target.value);
};


  
  
  return (
    <div className='parent2'>

      <div className='left2 card card-5'>
      <h1>Input Text</h1>

<textarea placeholder="Copy/Enter text in any Regional Language" rows="80"   id="message"
        name="message"
        value={items}
        onChange={handleMessageChange} 
        cols="40"></textarea>
       
      </div>

      <div className='middle2'>
      <div className='aiwe'>
      <h1>Choose a Excel File or Input Text Manually</h1>
      <p>Note: Heading for the coloumn of excel data that is to be converted should be 'word'</p>
      </div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
        {/* <h1>Regional Language Translator</h1> */}
        <button onClick={run}> Convert to English</button>
        {/* <button onClick={run}>  Excel to English</button> */}
      </div>

      <div className='right2 card card-5'>
      <h1>English Text</h1>
      {

      (final !== "" && (
        final.map((i)=>{
         return <p>{i}</p>
        })
      ))
      }
      </div>

    </div>
    )
}

export default Translate

// --------------------------------------------------------------------------




