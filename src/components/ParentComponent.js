import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (<div>
        <h2>Parent Component</h2>
        <p>{text}</p>
        <ChildComponent type='text' value={text} onTextChange={setText} />
    </div>)
}

export default ParentComponent;