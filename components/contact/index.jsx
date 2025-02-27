import React from "react";
import Section from "../section";
import styles from "./contact.module.sass";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Contact({ data }) {
  return (
    <div id="contact" className="position-relative pt-4">
      <Section dir="ltr" head="contact with me">
        <div className="col">
          <div className="contact-area">
            <p data-aos="fade-right" className="sec-title ">
              <span>04.</span>Get in touch
            </p>
          </div>
          <div className={styles.contact_form_wrapper}>
            <div className="row ps-lg-5 align-items-center">
              <div className="col-12 col-lg-6  ps-lg-5 " data-aos="fade-down">
                <div className={styles.contact_info}>
                  <div className="my-3 d-flex align-items-center">
                    <BsTelephone />
                    <div>
                      <h2>Call Me</h2>
                      <p>{data.phone}</p>
                    </div>
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <AiOutlineMail />
                    <div>
                      <h2>Email</h2>
                      <p>{data.email}</p>
                    </div>
                  </div>
                  <div className="my-3 d-flex align-items-center">
                    <HiOutlineLocationMarker />
                    <div>
                      <h2>My Location</h2>
                      <p>{data.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6" data-aos="fade-up">
                <div className={styles.social_contact_links}>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-6 align-items-center d-flex justify-content-center my-5">
                      <a
                        className={styles.social_link_styled}
                        target={"_blank"}
                        title="Instagram"
                        rel="noreferrer"
                        href={data.instagram}
                      >
                        <FiInstagram />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 align-items-center d-flex justify-content-center my-5">
                      <a
                        className={styles.social_link_styled}
                        target={"_blank"}
                        title="LinkedIn"
                        rel="noreferrer"
                        href={data.linkedin}
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 align-items-center d-flex justify-content-center my-5">
                      <a
                        className={styles.social_link_styled}
                        target={"_blank"}
                        title="Github"
                        rel="noreferrer"
                        href={data.github}
                      >
                        <FiGithub />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 align-items-center d-flex justify-content-center my-5">
                      <a
                        className={styles.social_link_styled}
                        target={"_blank"}
                        title="Hashnode"
                        rel="noreferrer"
                        href={data.hashnode}
                      >
                        <SiHashnode />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
