import React from "react";
import "./sample.css";

const Toggle = () => {
    const [show, toggleShow] = React.useState(true);
    
    return (
      <div>
        <button onClick={() => toggleShow(!show)}>toggle: {show ? 'show' : 'hide'}</button>    
        {show && <div>Hi there</div>}
      </div>
    )
  }
  
export default Toggle;
