import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const red="red";
    const pink="pink";
    //  const name="click me" ;  
    const [bg,setBg] = useState(red);
    const[name,setName]=useState("Click here 🥰");

    const bgChange =() =>{
        console.log("clicked");
        let newbg="purple";
        setBg(newbg);
        let newname="OOO 😯";
        setName(newname);
    

    }
    const Bgback = () =>{
        let newBg="pink";
        setBg(newBg);
        let newname="hello Honey 🐝"
        setName(newname);
    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button className="btn" onClick={bgChange} onDoubleClick={Bgback} >{name}</button>
        </div>
        </>
    );
}
export default App;