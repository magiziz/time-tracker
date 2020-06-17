import React, { Component } from "react";
import Macbook from "../Image/Macbook/macbook.png";
import first from "../Image/Row/first.jpg";
import second from "../Image/Row/second.jpg";
import third from "../Image/Row/third.jpg";
import laptop from "../Image/Row/laptop.png";
import Mockup from "../Image/Macbook/Mockup.png";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      // Home section
      <section>
        <div className="Home">
          <div className="red-part" />
          <div className="container">
            <div className="red-part" />
            <div className="row">
              <div className="col-lg-6 image_iPhone">
                <img
                  src={Macbook}
                  className="img-fluid image_iPhone"
                  alt="desc"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="title_home">
                  <span>Give</span> a try to our <span>Tracker</span> app
                  <span>FOR FREE </span>
                  in 2020!
                </h1>
                <p className="title_home">
                  Our design project is here for you! This product is completely
                  FREE and you can try it out. Give it a try!
                </p>
                <div className="getStarted">
                  <Link to="/tracker">
                    <button className="btn">Get Started!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container whatSection my-5">
          <h1 className="text-center mb-5">
            What can you use time <br />
            tracker app for?
          </h1>
          <div className="row pt-2 text-center">
            <div className="col-md-4">
              <img src={first} alt="first" />
              <h3>
                Keeping track of <br /> hours
              </h3>
            </div>
            <div className="col-md-4">
              <img src={second} alt="first" />
              <h3>
                Helps productivity <br /> and motivation
              </h3>
            </div>
            <div className="col-md-4">
              <img src={third} alt="first" />
              <h3>
                Allows your business <br /> to scale, seamlessly
              </h3>
            </div>
          </div>
        </div>
        <section className="beneficialTimeTracker">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mt-4">
                <h1>Get Started with Time Tracker Today!</h1>
                <p>Try anything with tracker app for free!</p>
                <Link to="/Signup">
                  <button className="btn">Sign Up For Free!</button>
                </Link>
              </div>
              <div className="col-lg-5">
                <img
                  src={laptop}
                  className="img-fluid laptop_image"
                  alt="laptop"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="partner pt-5 pb-5">
          <div className="container pt-3 pb-3">
            <div className="row">
              <div className="col-lg-7">
                <h1>Want to partner/work with us?</h1>
                <p>
                  If you are looking for any questions or want to ask something
                  make sure to contact us. Infomration links will be down below.
                </p>
                <p>
                  This is not a very big application it is a mini version that
                  our team created. We are looking forward to make this
                  application better + having it in the mobile app version.
                </p>

                <div className="contactInformation">
                  <h3 className="m-0 pt-3">Contact us Today!</h3>
                  <p className="m-0 pt-3">+47 939 32 426</p>
                  <p className="m-0 pt-3">Mago.khamidov@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  src={Mockup}
                  className="img-fluid image_iPhone_second"
                  alt="iphone"
                />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container pt-4 pb-4 ">
            <div className="row">
              <div className="col-lg-3">
                <h4>Time Tracker</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum porro repudiandae eos minima ad accusamus inventore
                  doloribus sit odio? Velit veniam laboriosam, at earum
                  dignissimos itaque nihil facere voluptatum! Blanditiis!
                </p>
              </div>
              <div className="col-lg-3">
                <h4>Features</h4>
                <ul>
                  <li>Functions</li>
                  <li>Databases</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Postman</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Frontend</h4>
                <ul>
                  <li>React JS</li>
                  <li>React Routers</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>React Bootstrap</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Contact Us!</h4>
                <ul>
                  <li>Email: Mago.khamidov@gmail.com</li>
                  <li>Phone: +47 939 32 426</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Home;
