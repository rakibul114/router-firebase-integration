import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
  const {signInWithGoogle} = useFirebase();
    return (
      <div>
        <h1>Please login</h1>
        <button onClick={signInWithGoogle}>Google Sign In</button>
        <form className="form-elements">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
};

export default LogIn;