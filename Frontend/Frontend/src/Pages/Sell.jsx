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
          <h4 style={{ color: 'aqua' }}>Account</h4>
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
          <div className="col-half">
            <h4>Members</h4>
            <div className="input-group">
              <input id="Members-single" type="radio" name="Members" value="Single" />
              <label htmlFor="Members-single" style={radioLabelStyle}>Single</label>
              <input id="Members-family" type="radio" name="Members" value="family" />
              <label htmlFor="Members-family" style={radioLabelStyle}>Family</label>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>Terms and Conditions</h4>
          <div className="input-group">
            <input id="terms" name="terms" type="checkbox"  />
            <label htmlFor="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
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
  backgroundColor: 'aqua',
  color: '#fff',
  padding: '1em',
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.35s ease-in-out',
  outline: 'none'
};

export default Sell;
