import React from "react";
import {Link} from 'react-router-dom'
import { FaWallet } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="container header py-4">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src="assets/logo.png" alt="" width={350} />
            </Link>
          </div>
          <div className="col-md-2 ms-auto">
            <button className="btn btn-primary mt-3">
              {" "}
              <FaWallet className="me-2" /> Connect Walet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
