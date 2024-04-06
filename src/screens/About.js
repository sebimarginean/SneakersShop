import React, { useState } from "react";
import CountUp from "react-countup";
import { numbers } from "../mock/index";
import VisibilitySensor from "react-visibility-sensor";

const About = ({ darkMode }) => {
  const childrenClasses = darkMode ? "white" : "dark";
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="foreground">
        <div className="about">
          <div className="about-description">
            <h1 className="questions">Despre pagina noastră</h1>
            <p class="about-text">
              Sneakersshop România este o pagină de resell pe care poți găsi o
              mulțime de produse de brand, începând de la: Jordan, Nike, Tommy,
              The North Face, Kenzo, Guess, CDG, ASSC, Calvin Klein și până la
              Supreme, Versace, Off-white, Bape, Dsquared, Yeezy, Vlone, Marcelo
              Burlon, McQueen, Palm Angels. După un an de existență am reușit să
              adunăm o audiență bogată, care ar putea aprecia chiar și produsul
              tău. Totul pleacă de la tine!
            </p>
          </div>
          <div className="iphone-container">
            <div className="iphone">
              <div className="img-box"></div>
              <img className="img" src="/img/iphone.png" height="620px" />
            </div>
          </div>
        </div>
      </div>
      <div className={childrenClasses}>
        <div className="foreground">
          <div className="counter">
            {numbers.map((number, index) => (
              <div key={index} className="cell">
                <div className="inner">
                  <h3>
                    <CountUp
                      start={focus ? 0 : null}
                      end={number.end}
                      duration={2.5}
                      separator="."
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <VisibilitySensor
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span>{number.sign}</span>
                          </VisibilitySensor>
                        </div>
                      )}
                    </CountUp>
                  </h3>
                  <p>{number.description}</p>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
