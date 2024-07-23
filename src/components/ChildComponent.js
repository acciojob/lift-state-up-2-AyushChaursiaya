// ChildComponent.js

import React from "react";

function ChildComponent({text, ontextChange}) {

    const handleChange = (e) => {
        ontextChange(e.target.value);
    }

    return (<div className="child">
        <h2>Child Component</h2>
        <input type="text" value={text} onChange={handleChange} />
    </div>)
}

export default ChildComponent;