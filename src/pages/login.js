import React, { Fragment } from 'react';

// class Home extends React.Component{
    function login(){
    // render()
        return(
            <Fragment>

<section class="container">
<header>User Login</header>


  <div class="input-box">
    <label>Email Address</label>
    <input type="text" placeholder="Enter email address" required />
  </div>

  <div class="input-box">
    <label>Password</label>
    <input type="text" placeholder="Enter password" required />
  </div>

  <button>Log In</button>
{/* </form> */}
</section>

</Fragment>


);
}


export default login;