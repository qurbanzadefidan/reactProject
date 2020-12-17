import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default class Inverstment extends Component {
  values = [
    "$0",
    "$10,000",
    "$50,000",
    "$100,000",
    "$200,000",
    "$500,000",
    "$1,000,000 +",
  ];

  constructor(props) {
    super(props);
    this.state = {
      currentStepIndex: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({ currentStepIndex: e.currentTarget.value });
  };

  render() {
    return (
      <div className="contactDetails">
        <div className="container">
          <div className="header">
            <div>STEP 2 OF 3</div>

            <div>
              Lost or have trouble?
              <a href="#"> Get help ➝</a>
            </div>
          </div>

          <div className="detailsTitle">
            <h2>Investment plans</h2>
            <p>
              Let us know about your investment plans. This will help us get you
              to the right expert who will help you further
            </p>
            <h3>Ho much are you planning to invest in this year?</h3>
          </div>
          <div className="form">
            <div className="user-infor">
              <form>
                <div className="login_input">
                  <div className="user-box">
                    <input type="text" name="" value="$10,000" required="" />
                    <label>From</label>
                  </div>
                  <div className="user-box">
                    <input
                      type="text"
                      value={this.values[this.state.currentStepIndex]}
                      required=""
                    />
                    <label htmlFor="">To</label>
                  </div>
                </div>

                <form class="customizing">
                  <input
                    style={{ width: "610px" }}
                    onInput={this.handleInputChange}
                    type="range"
                    min="0"
                    value={this.state.currentStepIndex}
                    max="6"
                    step="1"
                    list="tick-list"
                  />
                  <datalist id="tick-list">
                    <option style={{ marginLeft: "0px" }}>0</option>
                    <option>$10,000</option>
                    <option>$50,000</option>
                    <option>$100,000</option>
                    <option>$200,000</option>
                    <option>$500,000</option>
                    <option>$1,000,000 +</option>
                  </datalist>
                </form>

                <div className="select">
                  <p>Are you an accredited investor?</p>

                  <form>
                    <div className="yesOrno">
                      <div className="input-container">
                        <label>
                          {" "}
                          <input type="radio" name="title" />
                          Yes
                        </label>
                      </div>
                      <div className="input-container">
                        <label>
                          {" "}
                          <input type="radio" name="title" checked />
                          No
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          </div>

          <div className="footer">
            <div>
              <Link to="/">← Back to the homepage</Link>
            </div>

            <div className="foterStep">
              <Link to="/InvestmentPreferences">Skip for now</Link>

              <a href="#"> Get help ➝</a>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
