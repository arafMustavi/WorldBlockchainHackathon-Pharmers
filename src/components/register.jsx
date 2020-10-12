import React from "react";
import loginImg from "../../pharmers-logo.png";

export class Register extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container">
        <div className="header">Login</div>
        <div className="content">4
            <div className="image">
                <img src={loginImg} />
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="userName">UserName</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">Register</button>
        </div>
    </div>

    }
}