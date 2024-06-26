import React from 'react';

function Sell() {
  return (
    <div className="container" style={{
      boxSizing: 'border-box',
      backgroundColor: '#fff',
      borderRadius: '4.2px',
      boxShadow: '0px 3px 10px -2px rgba(0, 0, 0, 0.2)',
      maxWidth: '38em',
      padding: '1em 3em 2em 3em',
      margin: '0em auto'
    }}>
      <form method="post" action="sell.php">
        <div className="row">
          <h4 style={{ color: 'green' }}>Account</h4>
          <div className="input-group input-group-icon">
            <input type="text" name="full_name" placeholder="Full Name" style={inputStyle} />
            <div className="input-icon"><i className="fa fa-user"></i></div>
          </div>
          <div className="input-group input-group-icon">
            <input type="email" name="email_address" placeholder="Email Address" style={inputStyle} />
            <div className="input-icon"><i className="fa fa-envelope"></i></div>
          </div>
          <div className="input-group input-group-icon">
            <input type="text" name="type" placeholder="Type" style={inputStyle} />
            <div className="input-icon"><i className="fa fa-tpe"></i></div>
          </div>
          <div className="input-group input-group-icon">
            <input type="password" name="password" placeholder="Password" style={inputStyle} />
            <div className="input-icon"><i className="fa fa-key"></i></div>
          </div>
        </div>
        <div className="row">
          <div className="col-half">
            <h4>Date of Availability</h4>
            <div className="input-group">
              <div className="col-third">
                <input type="text" name="date_day" placeholder="DD" style={inputStyle} />
              </div>
              <div className="col-third">
                <input type="text" name="date_month" placeholder="MM" style={inputStyle} />
              </div>
              <div className="col-third">
                <input type="text" name="date_year" placeholder="YYYY" style={inputStyle} />
              </div>
            </div>
          </div>
          </div>
          <div className="col-half">
            <h4>Members</h4>
  
            <div>
  <style dangerouslySetInnerHTML={{__html: "\n.btn-group .button {\n  background-color: #04AA6D; /* Green */\n  border: 1px solid green;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  float: left;\n}\n\n.btn-group .button:not(:last-child) {\n  border-right: none; /* Prevent double borders */\n}\n\n.btn-group .button:hover {\n  background-color: #3e8e41;\n}\n" }} />
  <div className="btn-group">
    <button className="button">Single</button>
    <button className="button">Family</button>
  </div>
</div>
       </div>    
<div className="tnc">
  <style dangerouslySetInnerHTML={{__html:"\n .tnc {\n float: left"} }></style>

   <div className="row">
          <h4>Terms and Conditions</h4>
          <div className="input-group">
            <input id="terms" name="terms" type="checkbox"  />
            <label htmlFor="terms">I accept he terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
          </div>
        </div>
       </div>


        {/* <!--Button to submit the form--> */}
        <div className="row">
          <button type="submit" style={buttonStyle}>Submit</button>
        </div>
      </form>
    </div>
   
  );
}

// CSS styles converted to JavaScript objects
const inputStyle = {
  width: '100%',
  padding: '1em',
  lineHeight: '1.4',
  backgroundColor: '#f9f9f9',
  border: '1px solid #e5e5e5',
  borderRadius: '3px',
  transition: 'all 0.35s ease-in-out',
  outline: 'none'
};


const radioLabelStyle = {
  display: 'inline-block',
  width: '50%',
  textAlign: 'center',
  float: 'left',
  borderRadius: '0',
  padding: '1em',
  lineHeight: '1.4',
  backgroundColor: '#f9f9f9',
  border: '1px solid #e5e5e5',
  transition: 'all 0.35s ease-in-out'
};

const checkboxStyle = {
  display: 'none'
};

const buttonStyle = {
  backgroundColor: 'green',
  color: '#fff',
  padding: '1em',
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.35s ease-in-out',
  outline: 'none'
};

export default Sell;
