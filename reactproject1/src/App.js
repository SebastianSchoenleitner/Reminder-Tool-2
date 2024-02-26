import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import AlterReminder from './alterReminder';
import CreateReminder from "./createReminder"
import Overview from './Overview';
export default function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/reminderCreation">
                                create a Reminder
                            </Link>
                        </li>
                        <li><Link to="/home">Overview</Link></li>
                        <li>
                            <Link to="/test">alter Reminder</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/reminderCreation" element={<CreateReminder></CreateReminder>}></Route>
                    <Route exact path="/home" element={<Overview></Overview>}></Route>
                    <Route exact path="/test" element={<AlterReminder></AlterReminder>}></Route>

                </Routes>
            </div>
        </Router>
    )
   
}