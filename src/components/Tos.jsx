import React, { Component } from 'react';
import '../styling/Tos.css';

const TITLE = 'Terms of Service';
const fontSize = {
  fontSize: '16px',
};

export class Tos extends Component {
  componentDidMount() {
    document.title = TITLE;
  }

  render() {
    return (
      <section id="backgroundColor">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="card gradient border-0 border-start" style={{ borderRadius: '', marginTop: '30px', marginBottom: '30px' }}>
                <div id="backgroundColor" className="card-body ">
                  <h5 className="d-flex justify-content-center text-decoration-underline text-white mt-3 ">Terms of Service</h5>
                  <p className="text-white fs-5">1. Terms</p>
                  <p className="text-white" style={fontSize}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec maximus id erat nec aliquet. Maecenas ac cursus erat.
                    Etiam ultricies, arcu ac mattis varius, nisi tortor blandit dolor,
                    id efficitur est tortor vitae purus. Morbi arcu ligula, egestas sit amet pulvinar at,
                    faucibus ac nulla. Vivamus placerat lacus odio, eget dignissim erat sagittis ut.
                    Praesent et tincidunt urna, nec laoreet metus. Nullam feugiat, eros at suscipit
                    iaculis, nulla purus semper nisl, at consectetur odio urna sed tellus.
                    Mauris lobortis est nec elementum malesuada. Pellentesque tincidunt leo enim, sed maximus arcu iaculis quis. Phasellus eu tellus justo.
                    Fusce placerat, tellus in mattis pellentesque, leo nibh egestas enim, id posuere nisi nunc euismod magna.
                  </p>
                  <p className="text-white fs-5">2. Use License</p>
                  <p className="text-white" style={fontSize}>
                    Sed id risus in mi tincidunt interdum. Maecenas maximus, est sit amet iaculis hendrerit, nulla risus venenatis sapien, at efficitur justo ex vitae libero.
                    Maecenas finibus quis sapien eu tempor.
                    Duis a diam ut libero accumsan venenatis. Quisque non nisi porta, rutrum nunc in, vehicula ipsum. Proin aliquet rutrum lacus ut ultrices.
                    Nulla luctus blandit nulla vitae ultrices. Cras sit amet urna rutrum, imperdiet est eu, sodales risus.
                  </p>
                  <p className="text-white fs-5">3. Disclaimer</p>
                  <p className="text-white" style={fontSize}>
                    In sed arcu ultrices, pretium ligula non, mattis tortor. Duis at dignissim libero. Fusce venenatis purus at pharetra condimentum. Sed id velit vitae leo eleifend aliquam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor elit sit amet enim sodales, nec scelerisque turpis congue. Aliquam nec ante turpis. Phasellus sem sapien,
                    ultricies vel turpis in, tincidunt congue ante. Donec aliquet eu diam vel lobortis. Nulla auctor rutrum neque ut placerat.
                  </p>
                  <p className="text-white fs-5">4. Limitations</p>
                  <p className="text-white" style={fontSize}>
                    Quisque in facilisis sem, non tincidunt mi. Proin suscipit tempus quam et aliquam. Vivamus risus velit,
                    faucibus vitae ligula non, congue gravida odio. Nulla tristique ullamcorper congue.
                    In turpis dui, facilisis id sapien id, bibendum rhoncus tortor. Sed a consectetur nunc, cursus ullamcorper elit.
                  </p>
                  <p className="text-white fs-5"> 5. Accuracy of materials</p>
                  <p className="text-white" style={fontSize}>
                    Mauris semper maximus porta. Vivamus euismod laoreet dui, in porttitor mauris. Nunc egestas dolor consequat laoreet consequat. Phasellus in massa lectus. Ut accumsan nulla leo,
                    in dapibus felis viverra non.
                    Mauris ultrices egestas ex, eget elementum diam tristique consectetur.
                    Praesent pellentesque convallis ex ut porta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tos;
