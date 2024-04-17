import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomePageImage from "../Assets/Images/hotel.svg";
import "../Pages/timer.js";
// import React from 'react';
<script src="timer.js"></script>

function HomePage() {
  return (
    <HomeLayout>
   <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>
  <style dangerouslySetInnerHTML={{__html: `
    /* CSS styles */
    /* Reset CSS */
    * {
        // margin: 0px 100px -10px -10px;
        padding: -100px 100px 100px 100px;
        box-sizing: border-box;
        position:relative;
        left:-6px;
    
  
    }
    /* Navbar styles */
    .navbar {
        background-color: #333;
        padding: 10px;
    }

    .navbar ul {
        list-style-type: none;
        text-align: center;

    }

    .navbar ul li {
        display: inline;
        margin-right: 20px;
    }

    .navbar ul li a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    /* Home content styles */
    .home-content {
        background-color: #222;
        color: white;
        padding: 100px 100px 100px 100px;
        margin : 0px -100px 100px -100px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: auto;
        padding: 0px;
    }

    .content-left {
        flex: 0 0 50%;
        padding: 0 20px;
    }

    .content-left h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .highlight {
        color: #ffcc00;
    }

    .content-left p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    .buttons {
        display: flex;
        gap: 10px;
    }
    .basic-room-button,
    .luxury-room-button,
    .occasional-room-button{
      padding: 10px 10px;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }

    .roomsButtons{
  padding-top: 10%;
    }

    .basic-room-button{
      border: 3px solid red;
      background-color:black;
      border: 2px solid red;
      color: aqua;
    }

    .luxury-room-button{
      border: 3px solid red;
      background-color:black;
      color: aqua;
      position: relative;
      top : 70px;
      left: -0%;

    }

    .occasional-room-button{
      border: 3px solid red;
      background-color:black;
      color: aqua;
      position: relative;
      top : 140px;
      left: 0%;
    }

      .timing_1 .num{
        position:relative;
        // left:30%;
        top: 12px;
      }
      .timing_2 .num{
        position:relative;
        // left:40%;
        top: 82px;
      }
      .timing_3 .num{
        position:relative;
        // left:40%;
        top:  152px;
      }
    .button-primary,
    .button-secondary {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }

    .button-primary {
        background-color: #ffcc00;
        color: #333;
    }

    .button-secondary {
        border: 2px solid #ffcc00;
        color: #ffcc00;
    }

    .content-right img {
        max-width: 100%;
    }

    /* Footer styles */
    footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px 0;
    }

    .image-container {
      width: 50%; /* Equivalent to w-1/2 */
      display: flex; /* Equivalent to flex */
      justify-content: center; /* Equivalent to justify-center */
      align-items: center; /* Equivalent to items-center */
  }
  .heading{
    color: aqua;
    position:relative;
    left:10%;
    top: -90px;
    font-size: 40px;

  }
  
` }} />
  <header>
    {/* Navbar content */}
    {/* <nav className="navbar">
      <ul>
        <li><a href="/courses">Get Started</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav> */}
  </header>
  <section className="home-content">
    {/* Home content */}
    <h1 class="heading">Hotrizon Inn</h1>
    <div className="container">
      <div className="content-left">
        <h1>explore our <span className="highlight">Exquisite Hotel</span></h1>
        <p>Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance.</p>
        <div className="buttons">
          <a href="/courses" className="button-primary">Get Started</a>
          <a href="/contact" className="button-secondary">Contact Us</a>
        </div>

        <div className="roomsButtons">
          <a href="/basicroom" className="basic-room-button">Basic Room</a>
          <div className="timing_1"><span class="num" data-val="350">000</span></div>
          <a href="/luxuryroom" className="luxury-room-button">Luxury Room</a>
          <div className="timing_2"><span class="num" data-val="200">000</span></div>
          <a href="/occasionalroom" className="occasional-room-button">Occassional Room</a>
          <div className="timing_3"><span class="num" data-val="150">000</span></div>
        </div>

        

  




      </div>
      
        <div className="w-1/2 flex items-center justify-center">
          <img alt="homepage image" src={HomePageImage} />
      </div>





    </div>
  </section>
  <footer>
    {/* Footer content */}
  </footer>
  {/* Include any JavaScript files */}
</div>

    </HomeLayout>
  );
}

export default HomePage;
