import React from "react";
import Section from "../section";
import SIETLogo from "../siet-logo";
import AnimatedLine from "../animated-line";
import styles from "./education.module.sass";
import { BsCalendarCheck } from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Education({ data }) {
  return (
    <div id="education" className={styles.education}>
      <div data-aos className="d-none d-xl-block animated-connect-line">
        <AnimatedLine />
      </div>
      <Section dir="ltr" head="education">
        <div data-aos="zoom-in-right" className="col-12 col-md-5">
          <div className={`${styles.univ_logo} mb-5`}>
            <SIETLogo />
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="col-12  col-md-7 mb-xl-5 pb-xl-5"
        >
          <div className="about-me-area">
            <p className="sec-title">
              <span>02.</span>my education
            </p>
            <p>{data.degree}</p>
            <p className="univ">{data.university}</p>
            <ul>
              <li>
                <a href={data.link}>
                  {" "}
                  <FaExternalLinkSquareAlt />
                </a>
              </li>
            </ul>

            <p className="interval">
              <BsCalendarCheck className="me-3" />
              {data.interval}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}