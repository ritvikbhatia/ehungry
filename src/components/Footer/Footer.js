import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.scss'

const Footer = () => {
   return (
      <div className="footer-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6">
                 <div className="footer-box">
                     <h3 className="logo"><span>e</span>hungry</h3>
                     <p>Delhi Technological University, Rohini, New Delhi</p>
                     <p>PHONE - 9810879604,8800477533</p>
                     <p>EMAIL - krohilla2001@gmail.com,jasvinderkaur927@gmail.com</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="footer-box">
                     <h5>Useful Links</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/menus">Menus</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="link" to="/appointment">Appointment</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="footer-box hour-box">
                     <h5>OPENING HOURS</h5>
                     <ul className="navbar-nav">
                        <li className="nav-item">Mon - Tues : <span>6.00 am - 10.00 pm</span></li>
                        <li className="nav-item">Wed - Thurs : <span>6.00 am - 10.00 pm</span></li>
                        <li className="nav-item">Launch : <span>Everyday</span></li>
                        <li className="nav-item">Sunday : <span className="closed">Closed</span></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <span> &copy; ehungry all Rights Reserved. Designed by Omuk </span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
