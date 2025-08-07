import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client"


function PasswordGenerator(){

    const [Password,setPassword]=useState("");
    const[length,setlength]=useState(10);
    const[numchanged,setnumchanged]=useState(false);
    const[charchanged,setcharchanged]=useState(false);

    function generatepassword(){

        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numchanged)
            str+="0123456789";
        
        if(charchanged)
            str+="@!~\{}()*&#$%^+-''/;:<>=.,";

        let pass="";

        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);

    }

    // generatepassword()  // yeh maut ka khel hai bhai console mar gya

    useEffect(()=>{
        generatepassword();
    },[length,numchanged,charchanged])       

    // password update nhi ho rha? 

    return(

        <>
        
            <div className="first">
                
                     <h2 className="title">Random Password Generator</h2>

                     <h1>{Password}</h1>

                            <div className="second">

                                <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
                                <label>Length({length})</label>

                                <input type="checkbox" defaultChecked={numchanged} onChange={()=> setnumchanged(!numchanged)}></input>
                                <label>Number</label>

                                <input type="checkbox" defaultChecked={charchanged} onChange={()=> setcharchanged(!charchanged)}></input>
                                <label>Character</label>


                            </div>
        
            </div>

        </>


    )


}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>)