import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login Page Tutorial</h2>
            <table>
                <tr>
                    <td>Email Address</td>
                    <td><input type={text}></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type={'password'}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type={'button'} value="Login"></input></td>
                </tr>
            </table>
        </div>
    );
};

export default Index;