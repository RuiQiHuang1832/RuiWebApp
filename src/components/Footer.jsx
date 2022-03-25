import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <footer className="position-relative bg-dark text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className="text-white">Get connected with us on social networks:</span>
          </div>

          <div className="text-white">
            <a href="mailto: huangben32@gmail.com" aria-label="mail button" className="me-4 text-reset ms-3"><i className="bi bi-envelope" /></a>
            <a href="https://github.com/RuiQiHuang1832" aria-label="github button" className="me-4 text-reset"><i className="bi bi-github" /></a>
            <a className="me-4 text-reset" href="https://google.com" aria-label="social media button"><i className="bi bi-instagram" /></a>
            <a href="https://www.linkedin.com/in/rui-qi-huang-528a43220/" aria-label="linkedin Button" className="me-4 text-reset"><i className="bi bi-linkedin" /></a>
            <a className="me-4 text-reset" href="https://google.com" aria-label="discord button"><i className="bi bi-discord" /></a>
          </div>
        </section>

        <section className="border-bottom">
          <div className="container text-center text-sm-start mt-4">
            <div className="row text-white">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <p>
                  Overflow is a community where you can make new friends,
                  participate in active discussions and much more.
                </p>
              </div>
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"> Disclaimer</h6>
                <p>
                  Overflow provides links to other sites on the internet
                  and doesn&apos;t host any files itself.
                </p>
              </div>
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-3">
                  Navigation
                </h6>

                <div className=""><Link className="text-white fw-bold text-decoration-none " to="/upgrade">Upgrade</Link></div>
                <div><Link className="text-white fw-bold text-decoration-none" to="/tos">Terms of Service </Link></div>
                <div className=""><Link className="text-white  fw-bold text-decoration-none" to="/faq">FAQ </Link></div>

              </div>
            </div>

          </div>

        </section>
        <section>
          <div style={{ backgroundColor: 'dark', color: 'white' }} className="text-center p-2">
            © 2021 Copyright. All Rights Reserved.
          </div>
        </section>

      </footer>
    );
  }
}

export default Footer;