import React, { Component } from "react";
import { Link } from "react-router-dom";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;

    return (
      <div className="contactDetails">
        <div className="container">
          <div className="header">
            <div>STEP 1 OF 3</div>

            <div>
              Lost or have trouble?
              <a href="#"> Get help ➝</a>
            </div>
          </div>

          <div className="detailsTitle">
            <h2 className="titleItem" style={{ marginLeft: "-490px" }}>
              Сontact details
            </h2>
            <p>
              Welcome to United Properties, we are glad to see you! Let’s get
              started by letting us know a little bit about you
            </p>
          </div>

          <div className="form">
            <div className="user-infor">
              <form>
                <div className="login_input">
                  <div className="user-box" style={{ width: "227px" }}>
                    <input type="text" name="" required="" />
                    <label>Username</label>
                  </div>
                  <div className="user-box">
                    <IntlTelInput
                      containerClassName="intl-tel-input"
                      inputClassName="form-control"
                    />
                  </div>
                </div>
                <div className="user-box input ">
                  <input type="email" required="" className="email" />
                  <label htmlFor="">Email address </label>
                </div>
                <div></div>

                <div className="user-box country ">
                  <label htmlFor="country">Country </label>

                  <CountryDropdown
                    id="country"
                    style={{ width: "600px" }}
                    defaultOptionLabel={""}
                    value={country}
                    onChange={(val) => this.selectCountry(val)}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="privacy">
            <h3>Privacy policy</h3>
            <p>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
            <a>Expand privacy policy ➝</a>
          </div>

          <div className="footer" style={{ marginTop: "100px" }}>
            <div>
              <Link to="/contact">← Back to the homepage </Link>
            </div>

            <div className="foterStep">
              <Link to="/investment">Skip for now </Link>

              <a href=""> Get help ➝</a>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
