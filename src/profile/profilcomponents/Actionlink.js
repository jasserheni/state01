import React from 'react'


function ActionLink(props) {
  const handleClick = e => {
    e.preventDefault();
    alert(props.alert);
    console.log("The link was clicked.");
  };
  return (
    <div style={{color: "black" ,textAlign: "center" }}>
    <button  href="/" onClick={handleClick}>
        Click me
    </button>
    </div>
  );
}
   export default  ActionLink ;