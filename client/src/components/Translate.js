import { useState } from "react";
import * as XLSX from "xlsx";
import "./TranslateStyle.css";
const Translate = () => {
  const [items, setItems] = useState([]);
  const [final, setFinal] = useState([]);
  const [lang,setLang] = useState()
  const [language,setLanguage] =useState('en');
  const arr = [];
  // const [result,setResult] = useState([]);
  // const [english,setEnglish] =useState("")

  // const readExcel = (file) => {

  //   const promise = new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();

  //     fileReader.readAsArrayBuffer(file);

  //     fileReader.onload = (e) => {
  //       const bufferArray = e.target.result;

  //       const wb = XLSX.read(bufferArray, { type: "buffer" });

  //       const wsname = wb.SheetNames[0];

  //       const ws = wb.Sheets[wsname];

  //       const data = XLSX.utils.sheet_to_json(ws);

  //       resolve(data);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });

  //   promise.then((d) => {
  //     setItems(d);
  //   });
  // };

  const run = () => {

    fetch(`http://127.0.0.1:5000/lang/${language}/${items}`).then(
      res=>res.json()
    ).then((data)=>{
        console.log('hi')
        console.log(data)
        const res = data[0].toUpperCase()+data.substring(1)
        setFinal(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  
  };



  const handleMessageChange = (event) => {
    setItems(event.target.value);
  };

  return (
    <div className="parent2">
      <div className="left2 card2 card-5">
        <h1>Input Text</h1>

        <textarea
          placeholder="Copy/Enter text in any Regional Language"
          rows="80"
          id="message"
          name="message"
          value={items}
          onChange={handleMessageChange}
          cols="40"
        ></textarea>
      </div>

      <div className="middle2">
    
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
        <button onClick={run}> Transliterate </button>
      </div>

      <div className="right2 card2 card-5">
        <h1>Transliterated Text</h1>
        {final !== "" && <p>{final}</p>}
      </div>
    </div>
  );
};

export default Translate;

// --------------------------------------------------------------------------
