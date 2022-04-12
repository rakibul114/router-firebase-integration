import React from 'react';
import './Register.css';

const Register = () => {
    return (
      <div className="register-container">
        <div>
          <h1 className='form-title'>Please register</h1>
          <form className="form-elements">
            <input type="text" name="" id="" placeholder="Your Name" />
            <br />
            <input type="email" name="" id="" placeholder="Your Email" />
            <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
};

export default Register;