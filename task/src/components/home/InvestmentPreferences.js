import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InvestmentPreferences extends Component {
  render() {
    return (
      <div className="contactDetails">
        <div className="container">
          <div className="header">
            <div>STEP 1 OF 3</div>

            <div>
              Lost or have trouble?
              <a href=""> Get help ➝</a>
            </div>
          </div>

          <div className="detailsTitle">
            <h2 style={{ marginLeft: "-360px" }}>Investment preferences</h2>
            <p>
              This will help us figure out what your investment options are so
              that we can show you only possibly intresting for you deals
            </p>
            <h3 style={{ marginLeft: "-190px" }}>
              What kind of real estate are you interested in?
            </h3>
          </div>
          <div className="form">
            <div className="user-infor">
              <form>
                <div className="checkboxs">
                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item1">
                      <div className="tickmark"></div>

                      <div className="name">Single family</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item2">
                      <div className="tickmark"></div>
                      <div className="name">Residential multifamily</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item3">
                      <div className="tickmark"></div>

                      <div className="name">Commercial retail</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item4">
                      <div className="tickmark"></div>

                      <div className="name">Commercial industrial</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item5">
                      <div className="tickmark"></div>

                      <div className="name">Commercial hospitality</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item6">
                      <div className="tickmark"></div>

                      <div className="name">Commercial warehousing</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item7">
                      <div className="tickmark"></div>

                      <div className="name">Commercial office</div>
                    </div>
                  </label>

                  <label className="option-item">
                    <input type="checkbox" className="checkbox" />
                    <div className="option-inner item8">
                      <div className="tickmark"></div>

                      <div className="name">Other</div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="footer" style={{ marginTop: "110px" }}>
            <div>
              <Link to="/investment">← Back to the homepage </Link>
            </div>

            <div className="foterStep">
              <a href=""> Skip for now</a>
              <a href="" class="finish">
                Finish
              </a>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    );
  }
}
