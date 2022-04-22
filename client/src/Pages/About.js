import React from 'react';

const About = () => {
  return (
    <section className="about-bckgrd">
      <div className="about container mt-5">
        <div className="about-p row">
          <div className="">
            <h1 className="about-h1">About Us</h1>
            <p>
              I'm baby church-key slow-carb cloud bread kogi, food truck four
              dollar toast fanny pack DIY intelligentsia flexitarian glossier
              blue bottle. Seitan chartreuse PBR&B af pork belly offal
              church-key hexagon. Chia meh chicharrones glossier blog, health
              goth schlitz thundercats. Pok pok kale chips raclette pinterest
              actually meggings art party celiac everyday carry kinfolk gentrify
              letterpress crucifix. Mlkshk master cleanse blue bottle, etsy
              cronut disrupt humblebrag.
            </p>
            <p>
              Bitters chillwave unicorn cred tilde crucifix offal ethical.
              Authentic butcher listicle pok pok before they sold out actually
              shoreditch man braid gentrify. Roof party tilde vape af, gentrify
              readymade drinking vinegar selfies irony ennui pour-over direct
              trade. Wolf marfa lumbersexual synth direct trade ramps. Pok pok
              trust fund try-hard organic mlkshk banjo single-origin coffee.
              Hell of gastropub activated charcoal sartorial everyday carry art
              party fixie craft beer occupy vexillologist waistcoat ethical
              poutine.
            </p>
          </div>
        </div>
        <div className="about-img-div ">
          <img
            className="about-img img-fluid"
            src={require('../assets/images/about.png').default}
            alt="barbers"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
