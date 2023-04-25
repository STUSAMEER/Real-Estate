/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="flexCenter paddings innerWidth f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <h1 className="orangeText">Real Estate</h1>
                <span className="secondaryText">
                    Our vision is to make all people 
                    <br />
                    the best place to live for them.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">145 Jeddah, MK 24552, KSA</span>

                <div className="flexCenter f-menu">
                    <span className="secondaryText">Property</span>
                    <span className="secondaryText">Services</span>
                    <span className="secondaryText">Product</span>
                    <span className="secondaryText">About Us</span>
                </div>
            </div>

        </div>

    </section>
  );
};

export default Footer;