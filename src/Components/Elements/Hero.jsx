import React from "react";
import {useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    logo: "assets/GMT94.png",
    percent: "600%",
    coin: "GMT",
  },
  {
    id: 2,
    logo: "assets/BUSD94.png",
    percent: "3500%",
    coin: "BUSD",
  },
  {
    id: 3,
    logo: "assets/USDT94.png",
    percent: "4000%",
    coin: "USDT",
  },
  {
    id: 4,
    logo: "assets/USDC94.png",
    percent: "4000%",
    coin: "USDC",
  },
  {
    id: 5,
    logo: "assets/WBNB94.png",
    percent: "3400%",
    coin: "WBNB",
  },
  {
    id: 6,
    logo: "assets/CAKE94.png",
    percent: "4500%",
    coin: "CAKE",
  },
  {
    id: 7,
    logo: "assets/ETH94.png",
    percent: "7800%",
    coin: "ETH",
  },
  {
    id: 8,
    logo: "assets/1INCH94.png",
    percent: "3400%",
    coin: "1INCH",
  },
];

const Hero = () => {

    const navigate = useNavigate();

    const toNavigate = (v) => {
        navigate("/overview", { state: v });
        // console.log({state:v});
      };
  return (
    <>
      <div className="container hero">
        <div className="row">
          <h1 className="hero-top-h1">Farm</h1>
          <p className="hero-top-p">Stake your tokens to earn more $MRACE.</p>
        </div>

        <div className="row">
        <div className="col-md-6 mt-4">
            <div className="card multi-card px-4">
              <div className="row py-4">
                <div className="col-md-2"/>
                <div className="col-md-4">
                <img className="top-cards-img" src="assets/logo-cr.png" alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="mt-3 top-cards-title-h3">Your MRACE Balance </h3>
                <h4 className="mt-3 top-cards-title-h4"> 0.00 </h4>
                </div>
              </div>
                
              <hr className="pt-1" />
              <div className="row">
                <div className="col-md-6">
                  <h5>Pending Harvest</h5>
                </div>
                <div className="col-md-6 text-end">
                  <h5>
                    <span>0.00 MRACE</span>
                  </h5>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6">
                  <h5>Daily output of MRACE</h5>
                </div>
                <div className="col-md-6 text-end">
                  <h5>
                    <span>0.00 MRACE</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 mt-4">
            <div className="card multi-card px-4">
            <div className="row pt-4 pb-3">
                <div className="col-md-4 second-col">
                <img className="top-cards-img" src="assets/GMT94.png" alt="" />
                </div>
                <div className="col-md-4 second-col">
                <h4 className="mt-3 card-title"> APY: <br/> 600%</h4>
                </div>
                <div className="col-md-4 second-col">
                <img className="top-cards-img" src="assets/logo-cr.png" alt="" />
                </div>
              </div>
              <hr className="mt-4" />
              <div className="row">
                <div className="col-md-3">
                  <h5>Deposit</h5>
                </div>
                <div className="col-md-3">
                <h5>
                    <span>GMT</span>
                  </h5>
                </div>
                <div className="col-md-3">
                <div className="col-md-6">
                  <h5>Earn</h5>
                </div>
                </div>
                <div className="col-md-3">
                <h5>
                    <span>MRACE</span>
                  </h5>
                </div>
              </div>
             
              <div className="row pb-3 mt-2">
                <a className="card-btn  m-auto " href="/">
                  Seclect
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <h1 className="choose-stake-h1">Choose Your Stake Pool</h1>
        </div>

        <div className="row py-3">
          {data.map((item, index) => {
            return (
              <div className="col-md-3 mt-4">
                <div className="card multi-card px-4" key={index}>
                  <div className="text-center">
                    <img className="card-img-top" src={item.logo} alt="" />
                    <h4 className="mt-3 card-title"> APY: {item.percent}</h4>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h5>Deposit</h5>
                    </div>
                    <div className="col-md-6 text-end">
                      <h5>
                        <span>{item.coin}</span>
                      </h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h5>Earn</h5>
                    </div>
                    <div className="col-md-6 text-end">
                      <h5>
                        <span>MRACE</span>
                      </h5>
                    </div>
                  </div>
                  <hr className="py-2" />
                  <div className="row pb-4">
                    <a  onClick={() => {
                      toNavigate(item);
                    }} className="card-btn  m-auto " href="/overview"> 
                      Seclect
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
