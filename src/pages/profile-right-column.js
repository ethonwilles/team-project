import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitterSquare,
//   faInstagram,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

export default class RightColumn extends Component {
  constructor(props) {
    super(props);
  }
  handleToTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    console.log(this.props.banner);
    return (
      <div className="right-column">
        <div className="banner-img">
          <img src={this.props.banner} alt="banner-img" />
        </div>
        <div className="heading-wrapper">
          <div className="headline">
            <h1>{this.props.title}</h1>
          </div>
          <div className="subheading">
            <h5>
              By: Someone <br /> Uploaded At: a certain time
            </h5>
          </div>
        </div>
        <div className="information-wrapper">
          <div className="opening-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              suscipit placeat temporibus mollitia reiciendis totam?
            </p>
          </div>
          <div className="content-wrapper">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              explicabo vel et ex eligendi corrupti esse neque autem mollitia,
              itaque voluptates, tempore velit inventore nemo totam sapiente id.
              Quia ab atque explicabo repellat dicta cum?
            </p>
            <img src={this.props.imgs} alt="alternate" />
            <img src={this.props.imgs} alt="alternate2" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              eos adipisci facere nesciunt similique voluptatem assumenda ipsa
              voluptate mollitia cupiditate animi ducimus quisquam rem suscipit
              ipsam? Inventore doloribus pariatur iusto reprehenderit earum
              dolorum sunt nemo?
            </p>
          </div>
          <button onClick={this.handleToTop}>Back To Top</button>

          <div className="social">
            <div className="spacer" />
            <div className="icons">
              {/* <FontAwesomeIcon icon={faFacebook} className="icon" />
              <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <FontAwesomeIcon icon={faLinkedin} className="icon" /> */}
            </div>
          </div>
          <div className="copyright">copyright</div>
        </div>
      </div>
    );
  }
}
