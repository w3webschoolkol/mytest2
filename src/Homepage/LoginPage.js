import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import {AA1,Email} from './Asset';
import Popup from 'reactjs-popup';


const LoginPage = () => {

    const PopupExample = () => (
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
      );
  
    return (


        
        <div>
        <h2>Login {AA1}</h2>
        <form>
        <table>
            <tr>
                <td>{Email}</td>
                <td><input type="text" name='email'></input></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type='password' name='pwd'></input></td>
            </tr>
            <tr>
                <td><NavLink to="/reg"><input type='button' value="Register"></input></NavLink></td>
                <td><input type='button' value="Login"></input></td>
            </tr>
        </table>
        </form>
    </div>
    );
};

export default LoginPage;