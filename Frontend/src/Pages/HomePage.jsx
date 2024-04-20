import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomePageImage from "../Assets/Images/hotel.svg";
import "../Pages/timer.js";
import "../Helpers/Fixed.js";
// import React from 'react';
<script src="timer.js"></script>

function HomePage() {
  return (

    <HomeLayout>
      <header>
        <h1>abcd</h1>
      </header>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
        <style dangerouslySetInnerHTML={{
          __html: `
    /* CSS styles */
    /* Reset CSS */
   
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
        background-color: #white;
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





.containerBox {
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 10px 0;
  
  
}

.containerBox .card {
	position: relative;
	width: 200px;
	height: 200px;
	background: rgba(255, 255, 255, 0.05);
	margin: 20px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(10px);
 
}

.containerBox .card:hover{
  background-color: aqua;

}
.containerBox .card .content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: 0.5s;
}

.containerBox .card:hover .content {
	transform: translateY(-27px);
}

.containerBox .card .content .imgBx {
	position: relative;
	width: 150px;
	height: 150px;
	overflow: hidden;
}

.containerBox .card .content .imgBx img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.containerBox .card .content .contentBx h3 {
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	margin: 20px 0 10px;
	line-height: 1.1em;
}

.containerBox .card .content .contentBx h3 span {
	font-size: 12px;
	font-weight: 300;
	text-transform: initial;
}

.containerBox .card .sci {
	position: absolute;
	bottom: 50px;
	display: flex;
}

.containerBox .card .sci li {
	list-style: none;
	margin: 0 10px;
	transform: translateY(40px);
	transition: 0.5s;
	opacity: 0;
}

.containerBox .card:hover .sci li {
	transform: translateY(0px);
	opacity: 1;
  
}

.container .card .sci li a {
	color: #fff;
	font-size: 20px;
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
              <section>
                <div className="containerBox">
                  <a href="/basicroom"><div className="card">
                    <div className="content">
                      <div className="contentBx">
                        <h3>Basic Room</h3>
                      </div>
                    </div>
                    <div className="timing_1"><span class="num" data-val="350">000</span></div>

                  </div>
                  </a>

                  <a href="/luxuryroom"> <div className="card">
                    <div className="content">

                      <div className="contentBx">
                        <h3>Luxury Room</h3>
                      </div>
                    </div>
                    <div className="timing_1"><span class="num" data-val="350">000</span></div>

                  </div>
                  </a>

                  <a href="occassionalroom"><div className="card">
                    <div className="content">
                      <div className="contentBx">
                        <h3>Occassional Room</h3>
                      </div>
                    </div>
                    <div className="timing_1"><span class="num" data-val="350">000</span></div>

                  </div>
                  </a>
                </div>
              </section>






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
