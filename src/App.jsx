import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

    const onType = async (e) => {
        const search = e.target.value 
        var e = document.getElementById("language");
        var text = e.options[e.selectedIndex].text;

        var da = {
            "categories": "Electronics, Mobile ",
            "data": [
                {
                    "field": "Description",
                    "inln": text,
                    "op": "0",
                    "qual": "4",
                    "text": document.getElementById("inputText").value
                }
            ],
            "key": "BFDB-A007-D6DF-44A1-BDE1-2D15-1310-45F3",
            "lang": [
                text
            ],
            "priority": "1",
            "recid": "176972"
        }

        axios("https://webrisk.googleapis.com/v1/uris:search?threatTypes=MALWARE&uri=http%3A%2F%2Ftestsafebrowsing.appspot.com%2Fs%2Fmalware.html&key=AIzaSyCORfOASFuuJ7mje4cffTdXCd-LcAnN07Q", {
            method: 'GET',
            headers: headers
          }).then(function (response) {
            console.log(response)
            //const dataD = response.data.data[0];
            const resultText = dataD.text;
            document.getElementById("result").innerHTML = resultText;            
            
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
  return (
    <div className="App">
      <div className="home__container container grid">
            
            <div style={{marginTop: "4em", textAlign: "center"}}>

                    <label for="language">Select a Language: </label>
                    <select name="language" id="language">
                        <option value="Hindi">Hindi</option>
                        <option value="English">Engish</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Gujarati</option>
                        <option value="Arabic">Tamil</option>
                        <option value="Arabic">Punjabi</option>
                        <option value="Arabic">Telugu</option>
                        <option value="Arabic">Kannada</option>
                        <option value="Arabic">Malayalam</option>
                        <option value="Arabic">Bhojpuri</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                    

                    <br/>
                    <br/>

                <textarea id='inputText' type="text" placeholder='data for language conversion' cols="50" rows="5"/> 
                <br/><br/>

                <button className="button button--flex" name='onClick' onClick={onType}>
                    Convert Data
                   
                </button>

                 <br/><br/>
                
                <div style={{textAlign: "center"}}>
                    <h3>Final Result: </h3>
                    <p id='result'></p>
                </div>
            </div>

            <div >
            </div>
            <div >
            </div>
        </div>
    </div>
  )
}

export default App
