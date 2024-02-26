import {useState,React } from 'react';


export default function AlterReminder() {
    const [inputtext, setInputtext] = useState("");
    let outputtext ="";

    const inputChange = (event) => { setInputtext(event.target.value) };


    return (
        <div>
            <p>alter Reminder works!</p>
            <p>createReminder works!</p>
            <button onClick={() => {
                m(outputtext, inputtext);

            }}>hi</button>
            

            <input type="text" value={inputtext} onChange={inputChange}></input>
            <label>InputText: {outputtext}</label>
        </div>
        

    );
   


}
function m(a, b) {
    a = b;

    
}
