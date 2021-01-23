import React from 'react';

function Admin() {
    return (

        <div className="mainDiv">
            <form className="formSection" >
            <h2>Admin Login</h2>
                <label>Name: </label>
                <input name="name" type="text"  placeholder="Enter your name" /> <br/>
                <label>Password: </label>
                <input name="num" type="text" placeholder="Enter your password" /> <br/>
                <input type="submit" value="Submit"/>
              </form>  
        </div>

    )
}

export default Admin
