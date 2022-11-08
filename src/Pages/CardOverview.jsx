import React from "react";
import { useLocation } from "react-router-dom";
const CardOverview = () => {
  const location = useLocation();
  console.log(location.state);
  const val = location.state;
  return (
    <>
      <div className="container overview py-3">
      <div className="row">
        <div className="overivew-top-div">
        <img className="overivew-top-logo" src={val.logo} alt="" />
        </div>
        
          <h1 className="overview-top-h1">{val.coin}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="card multi-card px-4">
              <div className="row py-4">
                <div className="col-md-6 overview-col1">
                  <img
                    className="overivew-card-logo"
                    src="assets/logo-cr.png"
                    alt=""
                  />
                </div>
                <div className="col-md-6 overview-col2">
                  <h3 className="mt-3 top-cards-title-h3">MRACE</h3>
                </div>
              </div>

              <hr className="pt-1" />
              <div className="row">
                <div className="col-md-6 overview-col1">
                  <h5>
                    Earned <br /> <span>0.00</span>
                  </h5>
                </div>
                <div className="col-md-6 overview-col2">
                  <div className="row pb-3">
                    <a className="card-btn  m-auto " href="/">
                      Harvest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="card multi-card px-4">
              <div className="row py-4">
                <div className="col-md-6 overview-col1">
                  <img
                    className="overivew-card-logo"
                    src={val.logo}
                    alt=""
                  />
                </div>
                <div className="col-md-6 overview-col2">
                  <h3 className="mt-3 top-cards-title-h3">{val.coin}</h3>
                </div>
              </div>

              <hr className="pt-1" />
              <div className="row">
                <div className="col-md-6 overview-col1">
                  <h5>
                    Stacked <br /> <span>0.00</span>
                  </h5>
                </div>
                <div className="col-md-6 overview-col2">
                  <div className="row pb-3">
                    <a className="card-btn  m-auto " href="/">
                      Approve
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOverview;
