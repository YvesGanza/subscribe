import './App.css';
import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [email, Setemail]=useState("");
 



  const HandleSubmit=(ev)=>{
    ev.preventDefault();
      axios.post('https://yvessubscriber.herokuapp.com/create',{email:email})
      .then(()=>{

        Setemail("");
        console.log("Success");
      })
      
  }
  return (
    <div className="App" >
      <div className="Titles">
        <h3> <sapn className="Logo">/ /</sapn>Yves Ganza</h3>
        <span>Subscribe to our blog and get the latest update straight to your Inbox</span>
        <h4> MailChip Api</h4>
      </div>
      <form onSubmit={HandleSubmit} className="Forms">
        <input type="text" placeholder="Your Email" value={email} onChange={(ev)=>Setemail(ev.target.value)}></input>
        <button>Subscribe</button>
      </form>
      <div className="results">
      </div>
    </div>
  );
}

export default App;
