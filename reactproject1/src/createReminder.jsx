import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateReminder() {
    let Werte;
    let navigate = useNavigate();
    const [titleInput, setTitleInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [isOnceReminded, setIsOnceReminded] = useState("");
    const [isMoreReminded, setIsMoreReminded] = useState("");
    const [isWeeklyReminded, setIsWeeklyReminded] = useState("");
    const [isMonthlyReminded, setIsMonthlyReminded] = useState("");
    const [isYearlyReminded, setIsYearlyReminded] = useState("");
    const [isQuartalyReminded, setIsQuartalyReminded] = useState("");
    const [isAnyhowReminded, setIsAnyhowReminded] = useState("");
    const [isPerEmail, setIsPerEmail] = useState("");
    const [isPerTd, setIsPerTd] = useState("");
    const [isPerTC, setIsPerTC] = useState("");
    const [isPerK, setIsPerK] = useState("");
    const [emailInput, setEmailInput] = useState("");



    const inputChangetitle = (event) => { setTitleInput(event.target.value) };
    const inputChangeDate = (event) => { setDateInput(event.target.value) };
    const inputChangeOnceReminded = (event) => { setIsOnceReminded(event.target.value) };
    const inputChangeMoreReminded = (event) => { setIsMoreReminded(event.target.value) };
    const inputChangeWeeklyReminded = (event) => { setIsWeeklyReminded(event.target.value) };
    const inputChangeMonthlyReminded = (event) => { setIsMonthlyReminded(event.target.value) };
    const inputChangeYearlyReminded = (event) => { setIsYearlyReminded(event.target.value) };
    const inputChangeQuartalyReminded = (event) => { setIsQuartalyReminded(event.target.value) };
    const inputChangeAnyhowReminded = (event) => { setIsAnyhowReminded(event.target.value) };
    const inputChangePerEmail = (event) => { setIsPerEmail(event.target.value) };
    const inputChangePerTd = (event) => { setIsPerTd(event.target.value) };
    const inputChangePerTC = (event) => { setIsPerTC(event.target.value) };
    const inputChangePerK = (event) => { setIsPerTC(event.target.value) };
    const inputChangeEmail = (event) => { setEmailInput(event.target.value) };


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
        }
        JSON.parse(wert);

    };


    return (
        <div>
            <div>
                <div>
                    <div>
                        <label>Title:</label>
                        <input type="text" value={titleInput} onChange={inputChangetitle} ></input>
                        <br></br>
                        <label>Date:</label>
                        <input type="date" value={dateInput} onChange={inputChangeDate}></input>
                    </div>
                    <br></br>
                    <label>einmal erinnern</label>
                    <input type="radio" value={isOnceReminded} onChange={inputChangeOnceReminded }></input>
                    <br></br>
                    <label>mehrmals erinnern</label>
                    <input type="radio" value={isMoreReminded} onChange={inputChangeMoreReminded}></input>
                    <hr></hr>
                    <input type="radio" value={isWeeklyReminded} onChange={inputChangeWeeklyReminded}></input>
                    <label>wöchentlich</label>
                    <br></br>
                    <input type="radio" value={isMonthlyReminded} onChange={inputChangeMonthlyReminded}></input>
                    <label>monatlich</label>
                    <br></br>
                    <input type="radio" value={isYearlyReminded} onChange={inputChangeYearlyReminded }></input>
                    <label>jährlich</label>
                    <br></br>
                    <input type="radio" value={isQuartalyReminded}></input>
                    <label>pro Quartal</label>
                    <br></br>
                    <input type="radio" value={isAnyhowReminded}></input>
                    <label>beliebig</label>
                </div>
                <div>
                    <h2>Art der Benachrichtigung</h2>
                    <input type="checkbox" value={isPerEmail} onChange={inputChangePerEmail}></input>
                    <label>per Email</label>
                    <br></br>
                    <input type="checkbox" value={isPerTd} onChange={inputChangePerTd}></input>
                    <label>per Teams-Direktnachricht</label>
                    <br></br>
                    <input type="checkbox" value={isPerTC} onChange={inputChangePerTC}></input>
                    <label>per Teams-Channel</label>
                    <br></br>
                    <input type="checkbox" value={isPerK} onChange={inputChangePerK}></input>
                    <label>per Kalender</label>
                    <br></br>
                    <input type="text" value={emailInput} onChange={inputChangeEmail}></input>
                    <hr></hr>

                </div>
                <br></br>
            </div>
            <div>
                <div>
                    <div></div>
                    <div>
                        <label>Beschreibung</label>
                    </div>
                </div>
                <textarea></textarea>
            </div>
            <div>
                <div></div>
                <div>
                    <button onClick={() => {
                        routeChange();
                    }}>zurück</button>
                    <button onClick={() => {
                        saveAsText();
                    } }>speichern</button>
                </div>
            </div>
        </div>
    );

}

