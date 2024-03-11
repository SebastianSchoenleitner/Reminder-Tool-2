import REACT, { useState } from 'react';
import './App.css'

const Labelbox = ({ data }) => (

    <div style={{
        border: "1px solid black", borderRadius: "10px", flex: "0 0 20%", flexDirection: "column", margin: "10px", width: "250px"
    }}>
        <p>Title: {data.title}</p>
        <p>Date: {data.date}</p>
        <p>description: {data.description}</p>
    </div>


);

export default Labelbox;