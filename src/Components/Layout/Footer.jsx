import React from "react";
import {Link} from 'react-router-dom'
import {AiOutlineMedium} from 'react-icons/ai'
import {BsTwitter, BsTelegram, BsDiscord, BsInstagram, BsGithub, BsReddit,BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <div className="container footer-container py-4">
        <div className="row">
          <div className="col-md-6">
            <h1>
              YOUR STEPS COUNT <br />
              WITH Marathon!
            </h1>
          </div>
          <div className="col-md-6">
            <h2>Join Our Comunity</h2>
          </div>
        </div>
        <div className="row row2 pb-3">
          <div className="col-md-6 mt-4">
            <img className="img-fluid me-3" src="assets/Google-play.svg" alt="" />
            <img className="img-fluid" src="assets/App-store.svg" alt="" />
          </div>
          <div className="col-md-6 footer-icons-col mt-4">
            <div className="d-flex ">
            <Link to="/"> <AiOutlineMedium className="footer-icons"/></Link>
              <Link to="/"> <BsTwitter className="footer-icons"/></Link>
              <Link to="/"> <BsTelegram className="footer-icons"/></Link>
              <Link to="/"> <BsDiscord className="footer-icons"/></Link>
              <Link to="/"> <BsInstagram className="footer-icons"/></Link>
              <Link to="/"> <BsGithub className="footer-icons"/></Link>
              <Link to="/"> <BsReddit className="footer-icons"/></Link>
              <Link to="/"> <BsFacebook className="footer-icons"/></Link>
            </div>
              
            
          </div>
        </div>
      </div>

      <div className="container-fluid footer-fluid py-2">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="assets/logo.png"
              alt=""
              width={200}
            />
          </div>
          <div className="col-md-5 ms-auto">
            <p className="mt-3">
              Copyright © 2022 MarathonCash.Com Company All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
