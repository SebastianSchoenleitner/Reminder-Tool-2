import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LabelBox from './reminderComponent'
import './App.css'

import { getJsonList } from './createReminder';

export default function Overview() {
    const jsonList = getJsonList();
    const [isToggled, setIsToggled] = useState(false);
    let navigate = useNavigate();


    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    const routeChange = () => {
        let path = "/reminderCreation";
        navigate(path);
    };

    return (

        <div style={{ margin: "50px", backgroundColor: "white" }}>
            <div>
                <button onClick={handleToggle}>
                    {isToggled ? 'KalenderAnsicht ein' : 'KalenderAnsicht aus'}
                </button>
            </div>
            <div>
                <div>
                    <select>
                        <option selected="true">Alphabetisch (A-Z)</option>
                        <option>Alphabetisch (Z-A)</option>
                        <option>Jüngste Erinnerung</option>
                        <option>Älteste Erinnerung</option>
                    </select>
                    <button onClick={routeChange} >neue Erinnerung erstellen</button>
                </div>
            </div>





            {!isToggled && (
                <div>

                    <div style={{ display: "flex", margin: "150px", backgroundColor: "white", flexWrap: "wrap" }}>
                        {jsonList.map((data, index) => (
                            <LabelBox key={index} data={data}></LabelBox>
                        ))}
                    </div>
                </div>
            )}
            {isToggled && (
                <label>hi</label>
            )}
        </div>

    )


}




//  const [numberOfComponents, setNumberOfComponents] = useState(0);

//  const handleButtonClick = () => {
//      setNumberOfComponents((prevCount) => prevCount + 1);

//  }

//return (
//    <><p>Overview works!</p><div className="container">
//        {[...Array(numberOfComponents )].map((_, index) => (
//            <LabelBox key={index} />
//        ))}
//    </div>
//        <button onClick={handleButtonClick} >Add component to test</button>
//    </>
//);

