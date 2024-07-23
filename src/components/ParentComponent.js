// ParentComponent.js

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import '../styles/App.css'

function ParentComponent() {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (<div className="parent">
        <h2>Parent Component</h2>
        <p>{text}</p>
        <ChildComponent type='text' value={text} onChange={handleTextChange} />
    </div>)
}

export default ParentComponent;