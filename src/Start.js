import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import './Start.css'
function Start(){
    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [gender, setGender] = useState(null);
    const [state, setState] = useState(null);

    let navigate = useNavigate()



    const HandleStart = () =>{
        if(name===null || email===null || number===null || DOB===null || state===null || gender===null){
            alert("Please enter your details.")
        }else if(agree !== true){
            alert("Please agree the terms & conditions")
        }
        else{
            navigate('./Exam')
        }
    }
    return(
        <><div>
            <h1 id="h1">Online Examination Portal</h1>
            <div id="data">
            <label id='label'>Enter your name:</label><br></br>
            <input type='text' 
                    id='input'
                    name="name"
                    onChange={e => setName(e.target.value)}
                    required>
            </input><br></br>
            <label id='label'>Email-id:</label><br></br>
            <input type='email' 
                    id='input'
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    required>
            </input><br></br>
            <label id='label'>Mobile number:</label><br></br>
            <input type='tel' 
                    id='input'
                    name="number"
                    onChange={e => setNumber(e.target.value)}
                    required>
            </input><br></br>
            <label id="label">Date of Birth:</label><br></br>
            <input type="date" 
                    id="dropdown"
                    name="DOB"
                    onChange={e => setDOB(e.target.value)}>
            </input><br></br>
            <label id="label">Select Gender:</label><br></br>
            <select id='dropdown' onChange={e => setGender(e.target.value)} required>
                <option value="none" selected disabled hidden>Select an Option</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select><br></br>
            <label id='label'>Select state:</label><br></br>
            <select id='dropdown' onChange={e => setState(e.target.value)} required>
                <option value="none" selected disabled hidden>Select an Option</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
            </select><br></br>
            </div>
        </div>
        <div id="instructions">
            <h4>Instructions:</h4>
            1.Click START button to start your exam.<br></br>
            2.Make sure you have a good internet connection<br></br>
            3.The clock has been set at server and count down timer at the top right side of the screen will display left out time to closure from where you can monitor time you have to complete the exam.<br></br>
            4.Click on one answer. Once you click on the answer, you will be redirected to next question.<br></br>
            5.You cannot go to the previous question.<br></br>
            6.The exam will be submitted automatically if the time is up.<br></br><br></br>
            <input  type='checkbox' onChange={e => setAgree(true)}/>I agree the terms and conditions.<br></br><br></br>
            <button id='start' onClick={HandleStart}>START</button>
        </div></>
    )
}

export default Start;