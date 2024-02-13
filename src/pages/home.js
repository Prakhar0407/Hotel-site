// import "./stylehome.css";

import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
// import Menu from "./menu";
// import { Link } from 'react-router'

// class Home extends React.Component{
function home() {
    // render()
    return (
        <Fragment>
            {/* <Menu /> */}
            <div>


                <nav>
                    <div class="logo">
                     {/* <Link to='/'>HotelBook</Link>    */}
                     <a href='/'>HotelBook</a>
                    </div>
                    {/* /* /* <!-- /* search box -->  */}


            
                     <form class="search-box">
                        <input type="text" placeholder=" " />
                        <button type="reset"></button>
                    </form>
                    <div class="menu">
                        <a href="#">Home</a>
                        <a href="#">Hotels</a>
                        <a href="#">Offers</a>
                        <a href="#">Trips</a>
                        <a href="contact">Contact</a>
                        {/* <Link to="/csontact">Contact</Link> */}
                    </div>
                    <div class="signin">
                        <a href="register">Register</a>
                    </div>
                </nav>  
                <div class="heading">Spend the time</div>

                 {/* <!-- sell section -->  */}

                {/* <!-- <button class="sellbtn" onclick="location.href='hcontact.html">Sell</button> --> */}
                <a class="asellbtn" href="sell">
                    <button class="sellbtn" >Sell</button>
                </a>

                {/* <!-- <nav class="navbar">
            <ul>
                <li><a><a href="#"></href>Home</a></li>
                <li><a><a href="#"></href>Services</a></li>
                <li><a><a href="#"></href>Bookings</a></li>
                <li><a><a href="#">Profile</href></a></li>s
                <li><a><a href="#">Contact</href></a></li> */}



                {/* <!-- /*search box --> */}


                {/* <!-- <form class="search-box">
    <input type="text" placeholder=" "/>
    <button type="reset"></button>
  </form>
            
            </div>
            </a>  -->
        <!-- </nav> --> */}

                {/* <!--image card layout start--> */}
                <div class="container">
                    {/* <!--image row start--> */}
                    <div class="row">
                        {/* /   <!--image card start--> */}
                        <div class="image">
                            <img src="ASSETS/elements/room.jpg" alt="" />
                            <div class="details">
                                <h2>Your <span>Room</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="more">
                                    <a href="#" class="read-more">Read <span>More</span></a>
                                    <div class="icon-links">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                        <a href="#"><i class="fas fa-eye"></i></a>
                                        <a href="#"><i class="fas fa-paperclip"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--image card end-->
        <!--image card start--> */}
                        <div class="image">
                            <img src="ASSETS/elements/house.jpg" alt="" />

                            <div class="details">
                                <h2>Your <span>House</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="more">
                                    <a href="#" class="read-more">Read <span>More</span></a>
                                    <div class="icon-links">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                        <a href="#"><i class="fas fa-eye"></i></a>
                                        <a href="#"><i class="fas fa-paperclip"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--image card end-->
        <!--image card start--> */}
                        <div class="image">
                            <img src="ASSETS/elements/pool.jpg" alt="" />
                            <div class="details">
                                <h2>Your <span>Pool</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="more">
                                    <a href="#" class="read-more">Read <span>More</span></a>
                                    <div class="icon-links">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                        <a href="#"><i class="fas fa-eye"></i></a>
                                        <a href="#"><i class="fas fa-paperclip"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--image card end--> */}
                    </div>
                    {/* <!--image row end-->
        <!--image row start--> */}
                    <div class="row">
                        {/* <!--image card start--> */}
                        <div class="image">
                            <img src="ASSETS/elements/MarriageHall.jpg" alt="" />
                            <div class="details">
                                <h2>Your <span>Hall</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="more">
                                    <a href="#" class="read-more">Read <span>More</span></a>
                                    <div class="icon-links">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                        <a href="#"><i class="fas fa-eye"></i></a>
                                        <a href="#"><i class="fas fa-paperclip"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--image card end-->
          <!--image card start--> */}
                        <div class="image">
                            <img src="ASSETS/elements/shop.jpg" alt="" />
                            <div class="details">
                                <h2>Your <span>shop</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div class="more">
                                    <a href="#" class="read-more">Read <span>More</span></a>
                                    <div class="icon-links">
                                        <a href="#"><i class="fas fa-heart"></i></a>
                                        <a href="#"><i class="fas fa-eye"></i></a>
                                        <a href="#"><i class="fas fa-paperclip"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--image card end--> */}
                    {/* <!--image card start--> */}
                    {/* <!-- <div class="image">
          <img src="room.jfif" alt="" />
          <div class="details">
            <h2>Your <span>Title</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="more">
              <a href="#" class="read-more">Read <span>More</span></a>
              <div class="icon-links">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="#"><i class="fas fa-eye"></i></a>
                <a href="#"><i class="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div> --> */}
                    {/* <!--image card end--> */}
                </div>
                {/* <!--image row end--> */}
                {/* </div> */}
                {/* <!--image card layout end--> */}


            </div>
        </Fragment>

    );
}


export default home;