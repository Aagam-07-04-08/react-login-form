import React from "react";

function Login(){

    return(
        <div className="container">
            <div className="login">
                <h2>Login</h2>
                <label htmlFor="user">UserName</label>
                <br />
                <input type="text" id="user" placeholder="enter username"/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" id="password" placeholder="enter password"/>
                <br />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login;