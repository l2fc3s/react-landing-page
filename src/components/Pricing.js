import React from "react";
import { FaFire } from "react-icons/fa";
import { Button } from "./Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>$300.00</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>4 Published episodes per month</li>
                    <li>Hi fidelity audio production</li>
                    <li>Distribution optional</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="skyblue">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>$600.00</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>8 Published episodes per month</li>
                    <li>Video production for podcast</li>
                    <li>Distribution optional</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="skyblue">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$900.00</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>12 published episodes per month</li>
                    <li>Social media marketing and branding</li>
                    <li>Access to exclusive Studio B</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="skyblue">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
