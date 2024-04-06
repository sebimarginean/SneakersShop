import React, { useState } from "react";
import { stepsDescription, whyUs, problem } from "../mock/index";
import VisibilitySensor from "react-visibility-sensor";

const Home = ({ darkMode }) => {
  const childrenClasses = darkMode ? "white" : "dark";
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  return (
    <>
      <div className="foreground">
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1 className="font-weight-bold">Inspirație și pasiune</h1>
              <p className="font-weight-light">
                Vinde-ți produsele rapid și ușor, folosind pagina de instagram
                &nbsp;
                <a href="https://www.instagram.com/sneakersshop_ro/">
                  sneakersshop_ro
                </a>
              </p>
            </div>

            <div className="cta">
              <a href="https://www.instagram.com/sneakersshop_ro/">
                <button className="cta-select">Vezi pagina</button>
              </a>
              <a href="https://www.instagram.com/direct/new/">
                <button className="cta-view">Pune postare</button>
              </a>
            </div>
          </div>

          <div className="bounce">
            <img src="/img/shoe.png" alt="" />
          </div>
        </section>
      </div>
      <div className={childrenClasses}>
        <div className="foreground">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                setFocus2(true);
              }
            }}
          >
            <div className="component">
              {focus2 ? (
                <>
                  <div id="img-1">
                    <img src="/img/solution-mindset.svg" height="300px" />
                  </div>
                  <div className="comp-text">
                    <h1 className="questions">
                      Problema pe care vrem să o rezolvăm
                    </h1>
                    <p>{problem.description}</p>
                  </div>
                </>
              ) : null}
            </div>
          </VisibilitySensor>
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                setFocus1(true);
              }
            }}
          >
            <div className="component">
              {focus1 ? (
                <>
                  <div className="comp-text">
                    <h1 className="questions">De ce să ne alegi pe noi?</h1>
                    <p>{whyUs.description}</p>
                  </div>
                  <div id="img-2">
                    <img src="/img/forgot-password.svg" height="300px" />
                  </div>
                </>
              ) : null}
            </div>
          </VisibilitySensor>
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                setFocus3(true);
              }
            }}
          >
            <div className="last-comp">
              <div className="last-h">
                <h1 className="questions">Pașii care trebuie urmați</h1>
              </div>
              {focus3 ? (
                <>
                  <div className="container">
                    {stepsDescription.map((step, index) => (
                      <div key={index} className="card">
                        <div className="image-steps">
                          <img src={step.img} />
                        </div>
                        <div className="content">
                          <p className="description">{step.description}</p>
                          <a href={step.link}>{step.name}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </>
  );
};

export default Home;
