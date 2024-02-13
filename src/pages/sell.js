import React, { Fragment } from 'react';

// class Home extends React.Component{
    function sell(){
    // render()
        return(
            <Fragment>


<body>
    
<div class="container">
  <form method="post" action="sell.php">
    <div class="row">
      <h4>Account</h4>
      <div class="input-group input-group-icon">
        <input type="text" name="full_name" placeholder="Full Name"/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="email" name="email_address" placeholder="Email Adress"/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="text" name="type" placeholder="Type"/>
        <div class="input-icon"><i class="fa fa-tpe"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="password" name="password" placeholder="Password"/>
        <div class="input-icon"><i class="fa fa-key"></i></div>
      </div>
    </div>
    <div class="row">
      <div class="col-half">
        <h4>Date of Availability</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" name="date_day" placeholder="DD"/>
          </div>
          <div class="col-third">
            <input type="text" name="date_month" placeholder="MM"/>
          </div>
          <div class="col-third">
            <input type="text" name="date_year" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div class="col-half">
        <h4>Members</h4>
        <div class="input-group">
          <input id="Members-single" type="radio" name="Members" value="Single"/>
          <label for="Members-single">Single</label>
          <input id="Members-family" type="radio" name="Members" value="family"/>
          <label for="Members-family">Family</label>
        </div>
      </div>
    </div>
    <div class="row">
      <h4>Payment Details</h4>
      <div class="input-group">
        <input id="payment-method-card" type="radio" name="payment_method" value="card" checked="true"/>
        <label for="payment-method-card"><span><i class="fa fa-cc-visa"></i>Credit Card</span></label>
        <input id="payment-method-paypal" type="radio" name="payment_method" value="paypal"/>
        <label for="payment-method-paypal"> <span><i class="fa fa-cc-paypal"></i>Paypal</span></label>
      </div>
      <div class="input-group input-group-icon">
        <input type="text" name="card_number" placeholder="Card Number"/>
        <div class="input-icon"><i class="fa fa-credit-card"></i></div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" name="card_cvc" placeholder="Card CVC"/>
          <div class="input-icon"><i class="fa fa-user"></i></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group">
          <select>
            <option>01 Jan</option>
            <option>02 Jan</option>
          </select>
          <select>
            <option>2015</option>
            <option>2016</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input id="terms" name="terms" type="checkbox"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>
    
    
    {/* <!--Button to submit the form--> */}
    <div class="row">
       <button type="submit">Submit</button>
    </div>
  </form>
</div>
</body>
            </Fragment>
        

            );
            }
            
            
            export default sell;