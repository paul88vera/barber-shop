import React from 'react';

function About() {
  return (
    <div>
      <h1 className="about-h1">About</h1>
      <div className="about">
        <div className="about-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            bibendum turpis sed ex condimentum molestie. Mauris condimentum
            lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
            metus aliquam maximus. Proin aliquam justo nec diam vulputate
            vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit
            massa eleifend. Morbi tristique justo vel turpis sollicitudin, et
            tristique velit convallis. In hac habitasse platea dictumst.
            Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl
            nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea
            dictumst.
          </p>
        </div>
        <div className="about-img">
          <img src={require('../../assets/images/about.png')} alt="barbers" />
        </div>
      </div>
    </div>
  );
}

export default About;
