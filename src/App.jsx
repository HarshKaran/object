//*************** Handeling events2******/

import React, {useState} from "react";


function App(){
    const [HeadingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);
    function action(){
        setHeadingText("Clicked");
    }
    function handelMouseOver(){
        setMouseOver(true);
    }
    function handelMouseOut(){
        setMouseOver(false);
    }
    return(
        <div className="container">
            <h1>{HeadingText}</h1>
            <input type="text" placeholder="What's your name"></input>
            <br></br>
            <button style={{ backgroundColor: isMousedOver ? "black" : "white"}}
            onClick={action}
            onMouseOver={handelMouseOver}
            onMouseOut={handelMouseOut}
            >
            Submit</button>
            
        </div>
    )
}
export default App;