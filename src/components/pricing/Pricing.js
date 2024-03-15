import React from "react";
import "./Pricing.css";
function Pricing() {
  return (
    <section class="section pricing-section">
      <div class="container">
        <div class="align-items-center mt-3 row">
          <div class="mx-auto col-md-3 cards-main-wrapper px-0">
            <div class="col-12">
              <div class="card-upper-section-wrapper">
                <span class="card-main-btn-wrapper">Build for free</span>
                <div class="Card-main-heading">Free plan</div>
                <div class="Card-main-heading-dollars">$0</div>
                <div class="Card-main-heading-Preview">
                  40 preview images/month
                </div>
              </div>
              <div class="col-12 card-bottom-section-wrapper">
                <div class="">
                  <ul class="pricing-list-wrapper">
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      No credit card required (Requires signing in with Google)
                    </li>
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      Ideal for prototyping
                    </li>
                  </ul>
                </div>
                <div class="col-12">
                  <a
                    class="col-12"
                    href="https://app.photoroom.com/api-dashboard"
                  >
                    <div class="col-12">
                      <span class="sign-up-btn">Sign up</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto col-md-4 cards-main-wrapper px-0">
            <div class="">
             <div className="card-upper-section-wrapper">
             <div class="">
                <span class="card-main-btn-wrapper">
                  Best Plan
                </span>
              </div>
              <div class="">
                <h4 class="Card-main-heading">Subscription</h4>
                <h5 className="Card-main-heading-dollars">
                  20$<small class="Card-main-heading-Preview">/month </small>
                </h5>
              </div>
              <div class="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-solid fa-cloud-arrow-down fa-lg text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview">
                        {" "}
                        Unlimited Hd download
                      </strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        Via Pixcleaner
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-solid fa-layer-group fa-lg text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview"> Bulk processing</strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        Via Pixcleaner
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-regular fa-image fa-lg  text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview">300 credits</strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        via api
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-solid fa-eye fa-lg fa-lg  text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview"> 1200 previews</strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        via api
                      </label>
                    </div>
                  </div>
                </div>
                <table class="ui compact table list-unstyled mb-0 ps-0">
                  <tbody>
                    <tr class="pricing-list-wrapper">
                      <td>
                      <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          50 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 7</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.14</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          100 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 10</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.10</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                      <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          300 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 20</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.07</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          1000 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 40</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.04</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          3000 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 100</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.03</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">
                          10000 credits <small>via API</small>
                        </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 250</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.03</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
          
              </div>
             </div>

              <div class="card-bottom-section-wrapper">
              <div className="col-10 mx-auto">
              <button class="sign-up-btn">Buy Now</button>
              </div>
              <div class="col-12 card-bottom-section-wrapper">
                <div class="">
                  <ul class="pricing-list-wrapper">
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      2 days trial

                    </li>
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      Ideal for designer and developers
                    </li>

                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      Unlimited Hd download via pixcleaner

                    </li>
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      Credits via api accumulate and does not expire during subscription

                    </li>
                  </ul>
                </div>
             
              </div>
              </div>
            </div>
          </div>
          <div class="mx-auto col-md-3 cards-main-wrapper px-0">
            <div class="">
             
            <div className="card-upper-section-wrapper">
            <div class="">
            <div class="" style={{marginBottom:"16px"}}>
                <span class="card-main-btn-wrapper">
                  Pay as you go
                </span>
                </div>
                <h5 className="Card-main-heading-dollars">
                  {" "}
                  349$
                  <small class="Card-main-heading-Preview"> One time </small>
                </h5>
              </div>
        
         
              <div class="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-regular fa-image fa-lg  text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview">10000 credits</strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        via Pixcleaner.com or api
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-2">
                      <i class="fa-solid fa-eye fa-lg fa-lg  text-success"></i>
                      <br />
                      <strong class="Card-main-heading-Preview"> 40000 previews</strong>
                      <br />
                      <label
                        class="Card-main-heading-Preview"
                        style={{ fontSize: "14px" }}
                      >
                        via Pixcleaner.com or api
                      </label>
                    </div>
                  </div>
                </div>
                <table class="ui compact table list-unstyled mb-0 ps-0">
                  <tbody>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">20 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 4</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.20</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">100 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 15</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.15</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                    <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">300 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 29</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.10</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">1000 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 79</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.08</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">3000 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 159</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.05</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                    <tr class="pricing-list-wrapper">
                      <td>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input position-static"
                          />
                        </div>
                      </td>
                      <td>
                        <span class="text-muted h6">10000 credits </span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 349</span>
                      </td>
                      <td>
                        <span class="text-muted h6">$ 0.03</span>
                        <small class="text-muted  Pricing__period">
                          /image
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
   
     
              
   
              </div>
          </div>
                       
          <div class="card-bottom-section-wrapper">
              <div className="col-12">
              <button class="sign-up-btn">Buy Now</button>
              </div>
              
              <div class="col-12 card-bottom-section-wrapper-lats">
                <div class="">
                  <ul class="pricing-list-wrapper">
             
                    <li class="">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        role="img"
                        class="h-4 w-4 shrink-0 text-content-positive xl:h-6 xl:w-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20.53 3.15201C20.9983 3.44472 21.1407 4.06167 20.848 4.53001L10.848 20.53C10.6793 20.7999 10.3923 20.9733 10.0749 20.9972C9.75759 21.021 9.44784 20.8924 9.24073 20.6508L3.24073 13.6508C2.88131 13.2315 2.92987 12.6002 3.3492 12.2408C3.76852 11.8813 4.39982 11.9299 4.75924 12.3492L9.87341 18.3157L19.152 3.47001C19.4447 3.00168 20.0617 2.8593 20.53 3.15201Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      Credits available for use anytimeZ within two years of purchase.
                    </li>

                   
                  </ul>
                </div>
             
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
