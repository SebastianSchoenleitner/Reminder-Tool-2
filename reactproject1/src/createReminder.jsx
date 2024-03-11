import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const jsonList = [];

const CreateReminder = () => {
    let werte;
    let navigate = useNavigate();
    const [titleInput, setTitleInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [isOnceReminded, setIsOnceReminded] = useState(false);
    const [isMoreReminded, setIsMoreReminded] = useState(false);
    const [isWeeklyReminded, setIsWeeklyReminded] = useState(false);
    const [isMonthlyReminded, setIsMonthlyReminded] = useState(false);
    const [isYearlyReminded, setIsYearlyReminded] = useState(false);
    const [isQuartalyReminded, setIsQuartalyReminded] = useState(false);
    const [isAnyhowReminded, setIsAnyhowReminded] = useState(false);
    const [isPerEmail, setIsPerEmail] = useState(false);
    const [isPerTd, setIsPerTd] = useState(false);
    const [isPerTC, setIsPerTC] = useState(false);
    const [isPerK, setIsPerK] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");



    const inputChangetitle = (event) => { setTitleInput(event.target.value) };
    const inputChangeDate = (event) => { setDateInput(event.target.value) };
    const inputChangeOnceReminded = (event) => {
        setIsOnceReminded(event.target.checked);
        setIsMoreReminded(!event.target.checked);
    };
    const inputChangeMoreReminded = (event) => {
        setIsMoreReminded(event.target.checked);
        setIsOnceReminded(!event.target.checked);
    };
    const inputChangeWeeklyReminded = (event) => {
        setIsWeeklyReminded(event.target.checked);
        setIsMonthlyReminded(!event.target.checked);
        setIsYearlyReminded(!event.target.checked);
        setIsQuartalyReminded(!event.target.checked);
        setIsAnyhowReminded(!event.target.checked);
    };
    const inputChangeMonthlyReminded = (event) => {
        setIsWeeklyReminded(!event.target.checked);
        setIsMonthlyReminded(event.target.checked);
        setIsYearlyReminded(!event.target.checked);
        setIsQuartalyReminded(!event.target.checked);
        setIsAnyhowReminded(!event.target.checked);
    };
    const inputChangeYearlyReminded = (event) => {
        setIsWeeklyReminded(!event.target.checked);
        setIsMonthlyReminded(!event.target.checked);
        setIsYearlyReminded(event.target.checked);
        setIsQuartalyReminded(!event.target.checked);
        setIsAnyhowReminded(!event.target.checked);
    };
    const inputChangeQuartalyReminded = (event) => {
        setIsWeeklyReminded(!event.target.checked);
        setIsMonthlyReminded(!event.target.checked);
        setIsYearlyReminded(!event.target.checked);
        setIsQuartalyReminded(event.target.checked);
        setIsAnyhowReminded(!event.target.checked);
    };
    const inputChangeAnyhowReminded = (event) => {
        setIsWeeklyReminded(!event.target.checked);
        setIsMonthlyReminded(!event.target.checked);
        setIsYearlyReminded(!event.target.checked);
        setIsQuartalyReminded(!event.target.checked);
        setIsAnyhowReminded(event.target.checked);
    };
    const inputChangePerEmail = (event) => { setIsPerEmail(event.target.checked) };
    const inputChangePerTd = (event) => { setIsPerTd(event.target.checked) };
    const inputChangePerTC = (event) => { setIsPerTC(event.target.checked) };
    const inputChangePerK = (event) => { setIsPerK(event.target.checked) };
    const inputChangeEmail = (event) => { setEmailInput(event.target.value) };
    const inputChangeDescription = (event) => { setDescriptionInput(event.target.value) };


    const routeChange = () => {
        let path = "/home";
        navigate(path);
    };
    const saveAsText = () => {
        let wert = {
            title: titleInput,
            date: dateInput,
            onceReminded: isOnceReminded,
            moreReminded: isMoreReminded,
            weeklyReminded: isWeeklyReminded,
            monthlyReminded: isMonthlyReminded,
            yearlyReminded: isYearlyReminded,
            quartalyReminded: isQuartalyReminded,
            anyhowReminded: isAnyhowReminded,
            perEmail: isPerEmail,
            perTd: isPerTd,
            perTc: isPerTC,
            perK: isPerK,
            email: emailInput,
            description: descriptionInput
        }
        jsonList.push(wert);

        werte = JSON.stringify(wert);
        /*alert(werte);*/
    };


    return (

        <body style={{ backgroundColor: "lightgray" }}>

            <div style={{ margin: "50px", backgroundColor: "white" }}>
                <div style={{ margin: "50px", backgroundColor: "white", display: "flex" }}>
                    <div style={{ width: "40%", border: "solid", borderWidth: "2px", margin: "10px", flex: "0 0 40%" }}>
                        <div>
                            <label style={{ marginLeft: "10%", marginTop: "2.5%" }}>Title:</label>
                            <input type="text" value={titleInput} onChange={inputChangetitle} placeholder="Titel" ></input>
                            <br></br>
                            <label style={{ marginLeft: "10%" }}>Date:</label>
                            <input type="date" value={dateInput} onChange={inputChangeDate}></input>
                        </div>
                        <br></br>
                        <label style={{ marginLeft: "15px" }}>einmal erinnern</label>
                        <input type="radio" checked={isOnceReminded} onChange={inputChangeOnceReminded}></input>
                        <br></br>
                        <label style={{ marginLeft: "15px" }}>mehrmals erinnern</label>
                        <input type="radio" checked={isMoreReminded} onChange={inputChangeMoreReminded}></input>
                        <hr></hr>
                        <input type="radio" checked={isWeeklyReminded} onChange={inputChangeWeeklyReminded}></input>
                        <label style={{ marginLeft: "15px" }}>wöchentlich</label>
                        <br></br>
                        <input type="radio" checked={isMonthlyReminded} onChange={inputChangeMonthlyReminded}></input>
                        <label style={{ marginLeft: "15px" }}>monatlich</label>
                        <br></br>
                        <input type="radio" checked={isYearlyReminded} onChange={inputChangeYearlyReminded}></input>
                        <label style={{ marginLeft: "15px" }}>jährlich</label>
                        <br></br>
                        <input type="radio" checked={isQuartalyReminded} onChange={inputChangeQuartalyReminded}></input>
                        <label style={{ marginLeft: "15px" }}>pro Quartal</label>
                        <br></br>
                        <input type="radio" checked={isAnyhowReminded} onChange={inputChangeAnyhowReminded}></input>
                        <label style={{ marginLeft: "15px" }}>beliebig</label>
                    </div>

                    <div style={{ flex: "1", backgroundColor: "white", placeContent: "center", borderStyle: "solid", borderWidth: "2px", margin: "10px" }}>
                        <h2 style={{ textAlign: "center" }}>Art der Benachrichtigung</h2>
                        <input type="checkbox" checked={isPerEmail} onChange={inputChangePerEmail}></input>
                        <label>per Email</label>
                        <br></br>
                        <input type="checkbox" checked={isPerTd} onChange={inputChangePerTd}></input>
                        <label>per Teams-Direktnachricht</label>
                        <br></br>
                        <input type="checkbox" checked={isPerTC} onChange={inputChangePerTC}></input>
                        <label>per Teams-Channel</label>
                        <br></br>
                        <input type="checkbox" checked={isPerK} onChange={inputChangePerK}></input>
                        <label>per Kalender</label>
                        <br></br>
                        {isPerEmail && (
                            <div>
                                <hr></hr>
                                <label>Email-Addresse: </label>
                                <input type="text" value={emailInput} onChange={inputChangeEmail}></input>
                            </div>

                        )}

                        <hr></hr>

                    </div>
                </div>
                <div style={{ backgroundColor: "white", alignContent: "center", display: "flex" }}>
                    <div style={{ height: "300px" }}>
                        <div style={{ height: "150px" }}></div>
                        <div>
                            <label>Beschreibung</label>
                        </div>
                    </div>
                    <textarea style={{ width: "70%", height: "300px", margin: "10px", marginRight: "30px" }} type="text" value={descriptionInput} onChange={inputChangeDescription}></textarea>
                </div>
                <div style={{ backgroundColor: "lightgrey", display: "flex" }}>
                    <div style={{ width: "40%" }}></div>
                    <div >
                        <button style={{ backgroundColor: "red", color: "black", marginInline: "5px", height: "30px", width: "70px" }} onClick={() => {
                            routeChange();
                        }}>zurück</button>
                        <button style={{ backgroundColor: "red", color: "black", marginInline: "5px", height: "30px", width: "70px" }} onClick={() => {
                            saveAsText();
                        }}>speichern</button>
                    </div>
                </div>
            </div>
        </body>
    );





}
export const getJsonList = () => jsonList;
export default CreateReminder;

