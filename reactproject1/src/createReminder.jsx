import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateReminder() {
    let Werte;
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
        Werte = JSON.stringify(wert);
        alert(Werte);
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
                    <input type="radio" checked={isOnceReminded} onChange={inputChangeOnceReminded}></input>
                    <br></br>
                    <label>mehrmals erinnern</label>
                    <input type="radio" checked={isMoreReminded} onChange={inputChangeMoreReminded}></input>
                    <hr></hr>
                    <input type="radio" checked={isWeeklyReminded} onChange={inputChangeWeeklyReminded}></input>
                    <label>wöchentlich</label>
                    <br></br>
                    <input type="radio" checked={isMonthlyReminded} onChange={inputChangeMonthlyReminded}></input>
                    <label>monatlich</label>
                    <br></br>
                    <input type="radio" checked={isYearlyReminded} onChange={inputChangeYearlyReminded}></input>
                    <label>jährlich</label>
                    <br></br>
                    <input type="radio" checked={isQuartalyReminded} onChange={inputChangeQuartalyReminded}></input>
                    <label>pro Quartal</label>
                    <br></br>
                    <input type="radio" checked={isAnyhowReminded} onChange={inputChangeAnyhowReminded}></input>
                    <label>beliebig</label>
                </div>
                <div>
                    <h2>Art der Benachrichtigung</h2>
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
                <textarea type="text" value={descriptionInput} onChange={inputChangeDescription}></textarea>
            </div>
            <div>
                <div></div>
                <div>
                    <button onClick={() => {
                        routeChange();
                    }}>zurück</button>
                    <button onClick={() => {
                        saveAsText();
                    }}>speichern</button>
                </div>
            </div>
        </div>
    );

}

