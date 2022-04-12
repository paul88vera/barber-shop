import React from 'react';

function About() {
  return (
    <section className="about-bckgrd">
      <div className="about container mt-5">
        <div className="about-p row">
          <div className="col-xs-6">
            <h1 className="about-h1">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum turpis sed ex condimentum molestie. Mauris condimentum
              lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
              metus aliquam maximus. Proin aliquam justo nec diam vulputate
              vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit
              massa eleifend. Morbi tristique justo vel turpis sollicitudin, et
              tristique velit convallis. In hac habitasse platea dictumst.
              Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl
              nibh. Curabitur imperdiet ultricies mollis. In hac habitasse
              platea dictumst.
            </p>
          </div>
        </div>
        <div className="about-img-div col-xs-6">
          <img
            className="about-img img-fluid"
            src={require('../assets/images/about.png')}
            alt="barbers"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
