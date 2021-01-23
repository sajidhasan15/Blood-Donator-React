import './DataSubmit.css';
import { Component } from 'react';
import React from 'react-router-dom';

// class DataSubmit extends Component{

//     setData(){
//         let obj = {
//             name: '',
//             num: '',
//             num2: '',
//             email:'',
//         }
//         localStorage.setItem('myData', JSON.stringify(obj));
//     }

//     getData(){
//         let data = localStorage.getItem('myData');
//         data =JSON.parse(data);
//         console.log(data.value);
//     }

// }


function DataSubmit() {

        return (
            <div className="mainDiv">
                <form className="formSection" >
                <h2>Registration for Blood Donation</h2>
                    <label>Name: </label>
                    <input name="name" type="text"  placeholder="Enter your name" /> <br/>
                    <label>Mobile Number: </label>
                    <input name="num" type="text" placeholder="Enter your number" /> <br/>
                    <label>Alternate Number: </label>
                    <input name="num2" type="text"  placeholder="Enter alternate number"/> <br/>
                    <label>Email: </label>
                    <input name="email" type="text"  placeholder="Enter your email"/> <br/>
                    <label>Blood Group: </label>
                        <select className="custom-select">
                            <option >Select Blood Group:</option>
                            <option name="Ap" value="A+">A+</option>
                            <option name="An"  value="A-">A-</option>
                            <option name="Bp" value="B+">B+</option>
                            <option name="Bn" value="B-">B-</option>
                            <option name="ABp" value="AB+">AB+</option>
                            <option name="ABn" value="AB-">AB-</option>
                            <option name="Op" value="Op">O+</option>
                            <option name="On" value="On">O-</option>
                        </select> <br/>                 
                    <label>Religion: </label>
                    <input name="religion" type="text"  placeholder="Enter your religion"/> <br/>
                    <label>Present Address: </label>
                    <input name="address" type="text"  placeholder="Enter your address"/> <br/>
                    <label>Weight: </label>
                    <input name="weight" type="text" placeholder="Enter your weight" /> <br/>
                    <label>Birthdate: </label>
                    <input name="birthday" type="date" />
                    <label> Last donate Blood: </label>
                    <input name="donate" type="date"  /> <br/>
                    <input type="submit" value="Send"/>
    
                </form>
            </div>
        )

    
}

export default DataSubmit
