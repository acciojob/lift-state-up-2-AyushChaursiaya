import React from "react";

function ChildComponent({text, ontextChange}) {

    const handleChange = (e) => {
        ontextChange(e.target.value);
    }

    return (<div>
        <h2>Child Component</h2>
        <input text={text} onChange={handleChange} />
    </div>)
}

export default ChildComponent;